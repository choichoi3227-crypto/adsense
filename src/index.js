import { handleHome, handlePost, handleAbout, handleContact, handlePrivacy } from "./routes/public.js";
import { renderLoginPage, handleLoginSubmit, handleLogout } from "./routes/admin_auth.js";
import {
  handleDashboard,
  handlePostsList,
  handleNewPostForm,
  handleNewPostSubmit,
  handleEditPostForm,
  handleEditPostSubmit,
  handleDeletePost,
} from "./routes/admin_posts.js";
import { handleAnalyzer } from "./routes/admin_analyzer.js";
import { handleSettingsForm, handleSettingsSubmit } from "./routes/admin_settings.js";
import { apiCreatePost, apiUpdatePost, apiDeletePost, apiListPosts } from "./routes/api.js";
import { isAuthenticated } from "./auth.js";

function html(body, status = 200) {
  return new Response(body, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

async function requireAuth(request, env) {
  const ok = await isAuthenticated(request, env);
  if (!ok) {
    return new Response(null, { status: 302, headers: { Location: "/admin/login" } });
  }
  return null;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    try {
      // ── 공개 사이트 ─────────────────────────────
      if (pathname === "/" && method === "GET") {
        return html(await handleHome(request, env));
      }
      if (pathname === "/about" && method === "GET") {
        return html(await handleAbout(request, env));
      }
      if (pathname === "/contact" && method === "GET") {
        return html(await handleContact(request, env));
      }
      if (pathname === "/privacy" && method === "GET") {
        return html(await handlePrivacy(request, env));
      }
      const decodedPathname = decodeURIComponent(pathname);
      const postMatch = decodedPathname.match(/^\/post\/([a-zA-Z0-9\-가-힣]+)$/);
      if (postMatch && method === "GET") {
        const result = await handlePost(request, env, postMatch[1]);
        if (!result) return html("<h1>404 - 글을 찾을 수 없습니다</h1>", 404);
        return html(result);
      }

      // ── robots.txt / sitemap.xml ─────────────────
      if (pathname === "/robots.txt" && method === "GET") {
        return new Response(`User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${url.origin}/sitemap.xml\n`, {
          headers: { "Content-Type": "text/plain" },
        });
      }
      if (pathname === "/sitemap.xml" && method === "GET") {
        const { results } = await env.DB.prepare("SELECT slug, updated_at FROM posts WHERE status='published'").all();
        const urls = [
          `${url.origin}/`,
          `${url.origin}/about`,
          `${url.origin}/contact`,
          `${url.origin}/privacy`,
          ...results.map((p) => `${url.origin}/post/${p.slug}`),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map((u) => `  <url><loc>${u}</loc></url>`)
          .join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      }

      // ── 어드민: 로그인 ─────────────────────────────
      if (pathname === "/admin/login" && method === "GET") {
        return html(renderLoginPage());
      }
      if (pathname === "/admin/login" && method === "POST") {
        return handleLoginSubmit(request, env);
      }
      if (pathname === "/admin/logout" && method === "GET") {
        return handleLogout();
      }

      // ── 어드민: 인증 필요 라우트 ─────────────────────
      if (pathname.startsWith("/admin")) {
        const authRedirect = await requireAuth(request, env);
        if (authRedirect) return authRedirect;

        if (pathname === "/admin" && method === "GET") {
          return html(await handleDashboard(request, env));
        }
        if (pathname === "/admin/posts" && method === "GET") {
          return html(await handlePostsList(request, env));
        }
        if (pathname === "/admin/posts/new" && method === "GET") {
          return html(await handleNewPostForm());
        }
        if (pathname === "/admin/posts/new" && method === "POST") {
          return handleNewPostSubmit(request, env);
        }
        const editMatch = decodedPathname.match(/^\/admin\/posts\/([^/]+)\/edit$/);
        if (editMatch && method === "GET") {
          return html(await handleEditPostForm(request, env, editMatch[1]));
        }
        if (editMatch && method === "POST") {
          return handleEditPostSubmit(request, env, editMatch[1]);
        }
        const deleteMatch = decodedPathname.match(/^\/admin\/posts\/([^/]+)\/delete$/);
        if (deleteMatch && method === "POST") {
          return handleDeletePost(request, env, deleteMatch[1]);
        }
        if (pathname === "/admin/analyzer" && method === "GET") {
          return html(await handleAnalyzer(request, env));
        }
        if (pathname === "/admin/settings" && method === "GET") {
          return html(await handleSettingsForm(request, env));
        }
        if (pathname === "/admin/settings" && method === "POST") {
          return handleSettingsSubmit(request, env);
        }

        return html("<h1>404</h1>", 404);
      }

      // ── 외부 자동화용 REST API (Secret 토큰 인증) ──────
      if (pathname === "/api/posts" && method === "GET") {
        return apiListPosts(request, env);
      }
      if (pathname === "/api/posts" && method === "POST") {
        return apiCreatePost(request, env);
      }
      const apiSlugMatch = decodedPathname.match(/^\/api\/posts\/([^/]+)$/);
      if (apiSlugMatch && method === "PUT") {
        return apiUpdatePost(request, env, apiSlugMatch[1]);
      }
      if (apiSlugMatch && method === "DELETE") {
        return apiDeletePost(request, env, apiSlugMatch[1]);
      }

      return html("<h1>404 - 페이지를 찾을 수 없습니다</h1><p><a href='/'>홈으로</a></p>", 404);
    } catch (err) {
      console.error(err);
      return html(`<h1>500 - 서버 오류</h1><pre>${err.message}</pre>`, 500);
    }
  },
};
