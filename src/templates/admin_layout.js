import { baseStyles, escapeHtml } from "./layout.js";

export function renderAdminLayout({ title, bodyHtml, active = "" }) {
  const nav = [
    { href: "/admin", label: "대시보드", key: "dashboard" },
    { href: "/admin/posts", label: "게시물 관리", key: "posts" },
    { href: "/admin/posts/new", label: "새 글 작성", key: "new" },
    { href: "/admin/analyzer", label: "승인율 분석기", key: "analyzer" },
    { href: "/admin/settings", label: "사이트 설정", key: "settings" },
  ];
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(title)} — 관리자</title>
<meta name="robots" content="noindex, nofollow" />
<style>
${baseStyles()}
.admin-shell { display: flex; min-height: 100vh; }
.admin-sidebar {
  width: 220px; flex-shrink: 0; background: var(--bg-soft);
  border-right: 1px solid var(--border); padding: 20px 0;
  position: sticky; top: 0; height: 100vh;
}
.admin-sidebar .brand { padding: 0 20px 20px; font-weight: 700; font-size: 1.1rem; }
.admin-sidebar .brand span { color: var(--accent); }
.admin-sidebar a {
  display: block; padding: 10px 20px; color: var(--text-dim); font-size: 0.9rem;
}
.admin-sidebar a.active { color: #fff; background: var(--accent-soft); border-right: 2px solid var(--accent); }
.admin-sidebar a:hover { text-decoration: none; color: #fff; }
.admin-main { flex: 1; padding: 32px 36px; max-width: 1000px; }
.admin-topbar { display:flex; justify-content: flex-end; padding: 12px 20px; }
.stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; margin: 20px 0; }
.stat-card { background: var(--panel); border: 1px solid var(--border); border-radius: 12px; padding: 18px; }
.stat-card .num { font-size: 1.8rem; font-weight: 700; }
.stat-card .label { color: var(--text-dim); font-size: 0.82rem; margin-top: 4px; }
</style>
</head>
<body>
<div class="admin-shell">
  <aside class="admin-sidebar">
    <div class="brand">CloudDesk<span>.</span> Admin</div>
    ${nav
      .map(
        (n) =>
          `<a href="${n.href}" class="${active === n.key ? "active" : ""}">${n.label}</a>`
      )
      .join("")}
    <a href="/admin/logout" style="color:#ff8a9a;margin-top:20px;">로그아웃</a>
    <a href="/" target="_blank" style="margin-top:6px;">↗ 사이트 보기</a>
  </aside>
  <div class="admin-main">
    ${bodyHtml}
  </div>
</div>
</body>
</html>`;
}
