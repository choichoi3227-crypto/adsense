export function baseStyles() {
  return `
  :root {
    --bg: #0b1220;
    --bg-soft: #111a2e;
    --panel: #16213a;
    --border: #223052;
    --text: #e7ecf6;
    --text-dim: #9fb0cf;
    --accent: #5b8cff;
    --accent-soft: #2a3a63;
    --radius: 12px;
    --maxw: 880px;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Pretendard", "Noto Sans KR", sans-serif;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
  .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 20px; }
  header.site {
    border-bottom: 1px solid var(--border);
    background: rgba(11,18,32,0.9);
    position: sticky; top: 0; z-index: 10;
    backdrop-filter: blur(6px);
  }
  header.site .wrap { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; }
  .brand { font-weight: 700; font-size: 1.25rem; color: var(--text); letter-spacing: -0.02em; }
  .brand span { color: var(--accent); }
  nav.site-nav a { color: var(--text-dim); margin-left: 20px; font-size: 0.95rem; }
  nav.site-nav a:hover { color: var(--text); text-decoration: none; }
  main { min-height: 60vh; padding: 40px 0 80px; }
  footer.site {
    border-top: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 0.85rem;
    padding: 32px 0;
    margin-top: 40px;
  }
  footer.site .wrap { display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: space-between; align-items: center;}
  footer.site .links a { margin-right: 16px; color: var(--text-dim); }
  h1 { font-size: 2rem; letter-spacing: -0.02em; margin: 0 0 12px; }
  h2 { font-size: 1.4rem; margin-top: 2em; letter-spacing: -0.01em; }
  h3 { font-size: 1.15rem; margin-top: 1.6em; }
  p { color: #cfd8ea; }
  .muted { color: var(--text-dim); }
  .badge {
    display: inline-block; font-size: 0.75rem; padding: 3px 10px;
    border-radius: 999px; background: var(--accent-soft); color: #b9c9ff;
    margin-right: 8px;
  }
  .card {
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
  }
  .post-list { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
  .post-item {
    display: block;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px 22px;
    transition: border-color .15s ease, transform .15s ease;
  }
  .post-item:hover { border-color: var(--accent); text-decoration: none; transform: translateY(-1px); }
  .post-item .emoji { font-size: 1.4rem; margin-right: 8px; }
  .post-item h3 { margin: 8px 0 6px; color: var(--text); font-size: 1.1rem; }
  .post-item .excerpt { color: var(--text-dim); font-size: 0.92rem; margin: 0; }
  .post-item .meta { font-size: 0.78rem; color: #7c8bad; margin-top: 10px; }
  .article-body img { max-width: 100%; border-radius: 8px; }
  .article-body pre {
    background: #0d1526; border: 1px solid var(--border); border-radius: 8px;
    padding: 14px 16px; overflow-x: auto; font-size: 0.85rem;
  }
  .article-body code { background: #0d1526; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  .article-body pre code { background: none; padding: 0; }
  .article-body ul, .article-body ol { color: #cfd8ea; padding-left: 1.3em; }
  .article-body blockquote {
    border-left: 3px solid var(--accent); margin: 1.2em 0; padding: 4px 16px;
    color: var(--text-dim); background: var(--bg-soft); border-radius: 0 8px 8px 0;
  }
  .ad-slot {
    border: 1px dashed var(--border);
    color: var(--text-dim);
    font-size: 0.8rem;
    text-align: center;
    padding: 18px;
    border-radius: var(--radius);
    margin: 28px 0;
  }
  .btn {
    display: inline-block; background: var(--accent); color: #fff;
    padding: 10px 18px; border-radius: 8px; font-weight: 600; font-size: 0.9rem;
    border: none; cursor: pointer;
  }
  .btn:hover { text-decoration: none; opacity: 0.9; }
  .btn.secondary { background: var(--panel); border: 1px solid var(--border); color: var(--text); }
  .btn.danger { background: #4a1f2b; color: #ffb4c2; border: 1px solid #6b2b3b; }
  input, textarea, select {
    width: 100%; background: var(--bg-soft); border: 1px solid var(--border);
    color: var(--text); padding: 10px 12px; border-radius: 8px; font-size: 0.92rem;
    font-family: inherit;
  }
  label { font-size: 0.85rem; color: var(--text-dim); display: block; margin: 14px 0 6px; }
  table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
  th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--border); }
  th { color: var(--text-dim); font-weight: 600; font-size: 0.8rem; }
  .flex-between { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  @media (max-width: 640px) { .grid-2 { grid-template-columns: 1fr; } }
  .tag-filter { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 4px; }
  .tag-filter a {
    font-size: 0.82rem; padding: 5px 12px; border-radius: 999px;
    border: 1px solid var(--border); color: var(--text-dim);
  }
  .tag-filter a.active { background: var(--accent); border-color: var(--accent); color: #fff; }
  .score-bar { height: 10px; background: var(--bg-soft); border-radius: 999px; overflow: hidden; border: 1px solid var(--border); }
  .score-bar-fill { height: 100%; background: linear-gradient(90deg, #5b8cff, #7fd7ff); }
  .check-row { display: flex; align-items: flex-start; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--border); }
  .check-row:last-child { border-bottom: none; }
  .check-icon { font-size: 1.1rem; margin-top: 1px; }
  .toast {
    position: fixed; bottom: 20px; right: 20px; background: var(--panel);
    border: 1px solid var(--border); padding: 12px 18px; border-radius: 10px;
    font-size: 0.88rem; box-shadow: 0 6px 24px rgba(0,0,0,0.4);
  }
  `;
}

export function renderLayout({ title, description, bodyHtml, activeNav = "", siteName = "CloudDesk" }) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description || "")}" />
<meta name="robots" content="index, follow" />
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☁️</text></svg>" />
<style>${baseStyles()}</style>
</head>
<body>
<header class="site">
  <div class="wrap">
    <a href="/" class="brand">${escapeHtml(siteName)}<span>.</span></a>
    <nav class="site-nav">
      <a href="/" ${activeNav === "home" ? 'style="color:#fff"' : ""}>홈</a>
      <a href="/about" ${activeNav === "about" ? 'style="color:#fff"' : ""}>소개</a>
      <a href="/contact" ${activeNav === "contact" ? 'style="color:#fff"' : ""}>문의</a>
      <a href="/privacy" ${activeNav === "privacy" ? 'style="color:#fff"' : ""}>개인정보처리방침</a>
    </nav>
  </div>
</header>
<main>
  <div class="wrap">
    ${bodyHtml}
  </div>
</main>
<footer class="site">
  <div class="wrap">
    <div>© ${new Date().getFullYear()} ${escapeHtml(siteName)}. All rights reserved.</div>
    <div class="links">
      <a href="/about">소개</a>
      <a href="/privacy">개인정보처리방침</a>
      <a href="/contact">문의</a>
    </div>
  </div>
</footer>
</body>
</html>`;
}

export function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
