// 외부 스크립트/자동화 도구에서 Secret 토큰으로 글을 발행/업데이트하기 위한 REST API.
// 인증: Authorization: Bearer <ADMIN_TOKEN> 헤더

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

function checkApiAuth(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  return !!env.ADMIN_TOKEN && token === env.ADMIN_TOKEN;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

// POST /api/posts  { title, category, excerpt, content, cover_emoji?, status? }
export async function apiCreatePost(request, env) {
  if (!checkApiAuth(request, env)) return json({ error: "Unauthorized" }, 401);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const { title, category, excerpt, content, cover_emoji = "☁️", status = "published" } = body;
  if (!title || !category || !excerpt || !content) {
    return json({ error: "title, category, excerpt, content are required" }, 400);
  }

  const slug = body.slug ? slugify(body.slug) : slugify(title);
  await env.DB.prepare(
    `INSERT INTO posts (slug, title, category, excerpt, content, cover_emoji, status)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(slug, title, category, excerpt, content, cover_emoji, status)
    .run();

  return json({ ok: true, slug, url: `/post/${slug}` }, 201);
}

// PUT /api/posts/:slug  { title?, category?, excerpt?, content?, cover_emoji?, status? }
export async function apiUpdatePost(request, env, slug) {
  if (!checkApiAuth(request, env)) return json({ error: "Unauthorized" }, 401);

  const existing = await env.DB.prepare("SELECT * FROM posts WHERE slug = ?").bind(slug).first();
  if (!existing) return json({ error: "Post not found" }, 404);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const merged = {
    title: body.title ?? existing.title,
    category: body.category ?? existing.category,
    excerpt: body.excerpt ?? existing.excerpt,
    content: body.content ?? existing.content,
    cover_emoji: body.cover_emoji ?? existing.cover_emoji,
    status: body.status ?? existing.status,
  };

  await env.DB.prepare(
    `UPDATE posts SET title=?, category=?, excerpt=?, content=?, cover_emoji=?, status=?, updated_at=datetime('now')
     WHERE slug=?`
  )
    .bind(merged.title, merged.category, merged.excerpt, merged.content, merged.cover_emoji, merged.status, slug)
    .run();

  return json({ ok: true, slug, url: `/post/${slug}` });
}

// DELETE /api/posts/:slug
export async function apiDeletePost(request, env, slug) {
  if (!checkApiAuth(request, env)) return json({ error: "Unauthorized" }, 401);
  await env.DB.prepare("DELETE FROM posts WHERE slug = ?").bind(slug).run();
  return json({ ok: true });
}

// GET /api/posts
export async function apiListPosts(request, env) {
  if (!checkApiAuth(request, env)) return json({ error: "Unauthorized" }, 401);
  const { results } = await env.DB
    .prepare("SELECT id, slug, title, category, status, created_at, updated_at FROM posts ORDER BY created_at DESC")
    .all();
  return json({ posts: results });
}
