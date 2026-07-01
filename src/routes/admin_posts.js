import { renderAdminLayout } from "../templates/admin_layout.js";
import { escapeHtml } from "../templates/layout.js";

function slugify(title) {
  const base = title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  const rand = Math.random().toString(36).slice(2, 7);
  return `${base || "post"}-${rand}`;
}

export async function handleDashboard(request, env) {
  const totalRow = await env.DB.prepare("SELECT COUNT(*) as c FROM posts").first();
  const publishedRow = await env.DB
    .prepare("SELECT COUNT(*) as c FROM posts WHERE status='published'")
    .first();
  const draftRow = await env.DB
    .prepare("SELECT COUNT(*) as c FROM posts WHERE status='draft'")
    .first();
  const catRow = await env.DB
    .prepare("SELECT COUNT(DISTINCT category) as c FROM posts")
    .first();
  const recent = await env.DB
    .prepare("SELECT title, slug, status, created_at FROM posts ORDER BY created_at DESC LIMIT 6")
    .all();

  const body = `
    <div class="flex-between">
      <h1>대시보드</h1>
      <a href="/admin/posts/new" class="btn">+ 새 글 작성</a>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="num">${totalRow.c}</div><div class="label">전체 글</div></div>
      <div class="stat-card"><div class="num">${publishedRow.c}</div><div class="label">발행됨</div></div>
      <div class="stat-card"><div class="num">${draftRow.c}</div><div class="label">임시저장</div></div>
      <div class="stat-card"><div class="num">${catRow.c}</div><div class="label">카테고리</div></div>
    </div>
    <h2>최근 글</h2>
    <table>
      <thead><tr><th>제목</th><th>상태</th><th>작성일</th><th></th></tr></thead>
      <tbody>
        ${recent.results
          .map(
            (p) => `<tr>
              <td>${escapeHtml(p.title)}</td>
              <td>${p.status === "published" ? "🟢 발행" : "🟡 임시저장"}</td>
              <td class="muted">${p.created_at}</td>
              <td><a href="/admin/posts/${p.slug}/edit">편집</a></td>
            </tr>`
          )
          .join("")}
      </tbody>
    </table>
    <p style="margin-top:20px;"><a href="/admin/analyzer" class="btn secondary">→ 승인율 분석기 실행하기</a></p>
  `;
  return renderAdminLayout({ title: "대시보드", bodyHtml: body, active: "dashboard" });
}

export async function handlePostsList(request, env) {
  const { results } = await env.DB
    .prepare("SELECT id, title, slug, category, status, created_at FROM posts ORDER BY created_at DESC")
    .all();

  const body = `
    <div class="flex-between">
      <h1>게시물 관리</h1>
      <a href="/admin/posts/new" class="btn">+ 새 글 작성</a>
    </div>
    <table>
      <thead><tr><th>제목</th><th>카테고리</th><th>상태</th><th>작성일</th><th>액션</th></tr></thead>
      <tbody>
        ${results
          .map(
            (p) => `<tr>
              <td>${escapeHtml(p.title)}</td>
              <td><span class="badge">${escapeHtml(p.category)}</span></td>
              <td>${p.status === "published" ? "🟢 발행" : "🟡 임시저장"}</td>
              <td class="muted">${p.created_at}</td>
              <td>
                <a href="/admin/posts/${p.slug}/edit">편집</a> ·
                <a href="/post/${p.slug}" target="_blank">보기</a> ·
                <form method="POST" action="/admin/posts/${p.slug}/delete" style="display:inline" onsubmit="return confirm('정말 삭제할까요?')">
                  <button type="submit" style="background:none;border:none;color:#ff8a9a;cursor:pointer;padding:0;font-size:inherit;">삭제</button>
                </form>
              </td>
            </tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;
  return renderAdminLayout({ title: "게시물 관리", bodyHtml: body, active: "posts" });
}

function postForm(post = {}, { mode = "new", error = "" } = {}) {
  const isEdit = mode === "edit";
  return `
    <h1>${isEdit ? "글 편집" : "새 글 작성"}</h1>
    ${error ? `<p style="color:#ff8a9a">${escapeHtml(error)}</p>` : ""}
    <form method="POST" action="${isEdit ? `/admin/posts/${post.slug}/edit` : "/admin/posts/new"}">
      <label>제목</label>
      <input type="text" name="title" required value="${escapeHtml(post.title || "")}" />

      <div class="grid-2">
        <div>
          <label>카테고리</label>
          <input type="text" name="category" required value="${escapeHtml(post.category || "클라우드")}" />
        </div>
        <div>
          <label>커버 이모지</label>
          <input type="text" name="cover_emoji" value="${escapeHtml(post.cover_emoji || "☁️")}" maxlength="4" />
        </div>
      </div>

      <label>요약 (검색결과/목록에 노출)</label>
      <textarea name="excerpt" rows="2" required>${escapeHtml(post.excerpt || "")}</textarea>

      <label>본문 (HTML 허용: h2, h3, p, ul, li, pre, code, blockquote 등)</label>
      <textarea name="content" rows="18" required style="font-family:ui-monospace,monospace;font-size:0.85rem;">${escapeHtml(post.content || "")}</textarea>

      <label>상태</label>
      <select name="status">
        <option value="published" ${post.status === "published" || !post.status ? "selected" : ""}>발행</option>
        <option value="draft" ${post.status === "draft" ? "selected" : ""}>임시저장</option>
      </select>

      <div style="margin-top:20px;display:flex;gap:10px;">
        <button type="submit" class="btn">${isEdit ? "저장" : "발행하기"}</button>
        <a href="/admin/posts" class="btn secondary">취소</a>
      </div>
    </form>
  `;
}

export async function handleNewPostForm() {
  return renderAdminLayout({ title: "새 글 작성", bodyHtml: postForm({}, { mode: "new" }), active: "new" });
}

export async function handleNewPostSubmit(request, env) {
  const form = await request.formData();
  const title = (form.get("title") || "").toString().trim();
  const category = (form.get("category") || "").toString().trim();
  const excerpt = (form.get("excerpt") || "").toString().trim();
  const content = (form.get("content") || "").toString();
  const cover_emoji = (form.get("cover_emoji") || "☁️").toString();
  const status = (form.get("status") || "published").toString();

  if (!title || !category || !excerpt || !content) {
    return renderAdminLayout({
      title: "새 글 작성",
      bodyHtml: postForm(Object.fromEntries(form), { mode: "new", error: "모든 필수 항목을 입력해주세요." }),
      active: "new",
    });
  }

  const slug = slugify(title);
  await env.DB.prepare(
    `INSERT INTO posts (slug, title, category, excerpt, content, cover_emoji, status)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(slug, title, category, excerpt, content, cover_emoji, status)
    .run();

  return new Response(null, { status: 302, headers: { Location: "/admin/posts" } });
}

export async function handleEditPostForm(request, env, slug) {
  const post = await env.DB.prepare("SELECT * FROM posts WHERE slug = ?").bind(slug).first();
  if (!post) return new Response("Not found", { status: 404 });
  return renderAdminLayout({
    title: "글 편집",
    bodyHtml: postForm(post, { mode: "edit" }),
    active: "posts",
  });
}

export async function handleEditPostSubmit(request, env, slug) {
  const existing = await env.DB.prepare("SELECT * FROM posts WHERE slug = ?").bind(slug).first();
  if (!existing) return new Response("Not found", { status: 404 });

  const form = await request.formData();
  const title = (form.get("title") || "").toString().trim();
  const category = (form.get("category") || "").toString().trim();
  const excerpt = (form.get("excerpt") || "").toString().trim();
  const content = (form.get("content") || "").toString();
  const cover_emoji = (form.get("cover_emoji") || "☁️").toString();
  const status = (form.get("status") || "published").toString();

  if (!title || !category || !excerpt || !content) {
    return renderAdminLayout({
      title: "글 편집",
      bodyHtml: postForm({ ...existing, ...Object.fromEntries(form) }, { mode: "edit", error: "모든 필수 항목을 입력해주세요." }),
      active: "posts",
    });
  }

  await env.DB.prepare(
    `UPDATE posts SET title=?, category=?, excerpt=?, content=?, cover_emoji=?, status=?, updated_at=datetime('now')
     WHERE slug=?`
  )
    .bind(title, category, excerpt, content, cover_emoji, status, slug)
    .run();

  return new Response(null, { status: 302, headers: { Location: "/admin/posts" } });
}

export async function handleDeletePost(request, env, slug) {
  await env.DB.prepare("DELETE FROM posts WHERE slug = ?").bind(slug).run();
  return new Response(null, { status: 302, headers: { Location: "/admin/posts" } });
}
