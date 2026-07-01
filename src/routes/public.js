import { renderLayout, escapeHtml } from "../templates/layout.js";

async function getSiteMeta(env) {
  const rows = await env.DB.prepare("SELECT key, value FROM site_meta").all();
  const meta = {};
  for (const r of rows.results) meta[r.key] = r.value;
  return meta;
}

function formatDate(iso) {
  try {
    return new Date(iso.replace(" ", "T") + "Z").toLocaleDateString("ko-KR", {
      year: "numeric", month: "long", day: "numeric",
    });
  } catch {
    return iso;
  }
}

export async function handleHome(request, env) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const meta = await getSiteMeta(env);

  let query = "SELECT * FROM posts WHERE status = 'published'";
  const binds = [];
  if (category) {
    query += " AND category = ?";
    binds.push(category);
  }
  query += " ORDER BY created_at DESC LIMIT 50";

  const stmt = binds.length ? env.DB.prepare(query).bind(...binds) : env.DB.prepare(query);
  const { results: posts } = await stmt.all();

  const catRows = await env.DB.prepare(
    "SELECT DISTINCT category FROM posts WHERE status='published' ORDER BY category"
  ).all();
  const categories = catRows.results.map((r) => r.category);

  const tagFilterHtml = `
    <div class="tag-filter">
      <a href="/" class="${!category ? "active" : ""}">전체</a>
      ${categories
        .map(
          (c) =>
            `<a href="/?category=${encodeURIComponent(c)}" class="${c === category ? "active" : ""}">${escapeHtml(c)}</a>`
        )
        .join("")}
    </div>`;

  const listHtml = posts.length
    ? `<div class="post-list">
        ${posts
          .map(
            (p, i) => `
          <a class="post-item" href="/post/${p.slug}">
            <span class="badge">${escapeHtml(p.category)}</span>
            <span class="meta">${formatDate(p.created_at)}</span>
            <h3><span class="emoji">${p.cover_emoji || "☁️"}</span>${escapeHtml(p.title)}</h3>
            <p class="excerpt">${escapeHtml(p.excerpt)}</p>
          </a>
          ${i === 2 ? `<div class="ad-slot">광고 영역 (Google AdSense)</div>` : ""}
        `
          )
          .join("")}
      </div>`
    : `<p class="muted">아직 게시된 글이 없습니다.</p>`;

  const body = `
    <h1>${escapeHtml(meta.site_name || "CloudDesk")}</h1>
    <p class="muted">${escapeHtml(meta.site_description || "")}</p>
    ${tagFilterHtml}
    ${listHtml}
  `;

  return renderLayout({
    title: `${meta.site_name || "CloudDesk"} — 클라우드 & 서버 기술 블로그`,
    description: meta.site_description,
    bodyHtml: body,
    activeNav: "home",
    siteName: meta.site_name,
  });
}

export async function handlePost(request, env, slug) {
  const meta = await getSiteMeta(env);
  const post = await env.DB.prepare(
    "SELECT * FROM posts WHERE slug = ? AND status = 'published'"
  )
    .bind(slug)
    .first();

  if (!post) {
    return null;
  }

  const related = await env.DB.prepare(
    "SELECT title, slug, cover_emoji FROM posts WHERE category = ? AND slug != ? AND status='published' ORDER BY created_at DESC LIMIT 3"
  )
    .bind(post.category, slug)
    .all();

  const relatedHtml = related.results.length
    ? `<h2>관련 글</h2><div class="post-list">
        ${related.results
          .map(
            (r) => `<a class="post-item" href="/post/${r.slug}">
              <h3><span class="emoji">${r.cover_emoji || "☁️"}</span>${escapeHtml(r.title)}</h3>
            </a>`
          )
          .join("")}
      </div>`
    : "";

  const body = `
    <p><a href="/" class="muted">&larr; 목록으로</a></p>
    <span class="badge">${escapeHtml(post.category)}</span>
    <h1>${escapeHtml(post.title)}</h1>
    <p class="muted">${formatDate(post.created_at)} · ${escapeHtml(post.author || "CloudDesk 편집팀")}</p>
    <div class="ad-slot">광고 영역 (Google AdSense)</div>
    <div class="article-body">${post.content}</div>
    <div class="ad-slot">광고 영역 (Google AdSense)</div>
    ${relatedHtml}
  `;

  return renderLayout({
    title: `${post.title} — ${meta.site_name || "CloudDesk"}`,
    description: post.excerpt,
    bodyHtml: body,
    siteName: meta.site_name,
  });
}

export async function handleAbout(request, env) {
  const meta = await getSiteMeta(env);
  const body = `
    <h1>소개</h1>
    <div class="card">
      <p>${escapeHtml(meta.about_text || "")}</p>
      <p class="muted">본 사이트의 모든 콘텐츠는 자체적으로 작성되었으며, 클라우드 인프라와 서버 운영 관련 실무 지식을 독자에게 전달하는 것을 목표로 합니다.</p>
    </div>
    <h2>다루는 주제</h2>
    <ul>
      <li>클라우드 플랫폼 (AWS, GCP, Azure, Cloudflare)</li>
      <li>서버 운영 및 리눅스 시스템 관리</li>
      <li>네트워크 및 보안 기초</li>
      <li>컨테이너 및 오케스트레이션 (Docker, Kubernetes)</li>
      <li>DevOps 및 자동화</li>
    </ul>
  `;
  return renderLayout({
    title: `소개 — ${meta.site_name || "CloudDesk"}`,
    description: "Cloudpress 소개",
    bodyHtml: body,
    activeNav: "about",
    siteName: meta.site_name,
  });
}

export async function handleContact(request, env) {
  const meta = await getSiteMeta(env);
  const body = `
    <h1>문의</h1>
    <div class="card">
      <p>사이트 운영 및 콘텐츠 관련 문의는 아래 이메일로 연락해 주세요.</p>
      <p><strong>${escapeHtml(meta.contact_email || "contact@example.com")}</strong></p>
      <p class="muted">광고 협업, 오탈자 신고, 콘텐츠 제안 등 모든 문의를 환영합니다.</p>
    </div>
  `;
  return renderLayout({
    title: `문의 — ${meta.site_name || "CloudDesk"}`,
    description: "문의하기",
    bodyHtml: body,
    activeNav: "contact",
    siteName: meta.site_name,
  });
}

export async function handlePrivacy(request, env) {
  const meta = await getSiteMeta(env);
  const body = `
    <h1>개인정보처리방침</h1>
    <div class="card">
      <p class="muted">시행일: 2026년 1월 1일</p>
      <h3>1. 수집하는 개인정보 항목</h3>
      <p>본 사이트는 별도의 회원가입 없이 이용 가능하며, 문의 시 자발적으로 제공한 이메일 주소 외의 개인정보는 수집하지 않습니다.</p>
      <h3>2. 쿠키 및 광고</h3>
      <p>본 사이트는 Google AdSense를 통해 광고를 게재할 수 있으며, Google을 포함한 제3자 광고 파트너는 쿠키를 사용하여 사용자의 이전 방문 및 다른 웹사이트 방문 기록을 기반으로 광고를 게재할 수 있습니다. 사용자는 Google 광고 설정 페이지에서 맞춤 광고를 비활성화할 수 있습니다.</p>
      <h3>3. 개인정보의 보유 및 이용 기간</h3>
      <p>문의를 통해 수집된 이메일은 문의 응대 목적으로만 사용되며, 목적 달성 후 지체 없이 파기합니다.</p>
      <h3>4. 문의</h3>
      <p>개인정보 관련 문의는 ${escapeHtml(meta.contact_email || "contact@example.com")} 로 연락해 주세요.</p>
    </div>
  `;
  return renderLayout({
    title: `개인정보처리방침 — ${meta.site_name || "CloudDesk"}`,
    description: "개인정보처리방침",
    bodyHtml: body,
    activeNav: "privacy",
    siteName: meta.site_name,
  });
}
