import { renderLayout } from "../templates/layout.js";
import { makeSessionValue, sessionCookieHeader } from "../auth.js";

export function renderLoginPage(error) {
  const body = `
    <div style="max-width:380px;margin:40px auto;">
      <h1 style="text-align:center;">🔐 관리자 로그인</h1>
      <div class="card">
        ${error ? `<p style="color:#ff8a9a;font-size:0.88rem;">${error}</p>` : ""}
        <form method="POST" action="/admin/login">
          <label>관리자 토큰</label>
          <input type="password" name="token" placeholder="Secret 토큰을 입력하세요" required autofocus />
          <button class="btn" style="width:100%;margin-top:18px;" type="submit">로그인</button>
        </form>
      </div>
      <p class="muted" style="text-align:center;font-size:0.8rem;margin-top:16px;">
        토큰은 Cloudflare Secret으로 안전하게 관리됩니다.
      </p>
    </div>
  `;
  return renderLayout({
    title: "관리자 로그인",
    description: "관리자 로그인",
    bodyHtml: body,
  });
}

export async function handleLoginSubmit(request, env) {
  const form = await request.formData();
  const token = (form.get("token") || "").toString();

  if (!env.ADMIN_TOKEN) {
    return new Response(renderLoginPage("서버에 ADMIN_TOKEN이 설정되지 않았습니다."), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  if (token !== env.ADMIN_TOKEN) {
    return new Response(renderLoginPage("토큰이 올바르지 않습니다."), {
      status: 401,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const sessionVal = await makeSessionValue(env.ADMIN_TOKEN);
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/admin",
      "Set-Cookie": sessionCookieHeader(sessionVal),
    },
  });
}

export function handleLogout() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/admin/login",
      "Set-Cookie": sessionCookieHeader("", { clear: true }),
    },
  });
}
