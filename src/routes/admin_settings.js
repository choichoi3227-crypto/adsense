import { renderAdminLayout } from "../templates/admin_layout.js";
import { escapeHtml } from "../templates/layout.js";

async function getMeta(env) {
  const rows = await env.DB.prepare("SELECT key, value FROM site_meta").all();
  const meta = {};
  for (const r of rows.results) meta[r.key] = r.value;
  return meta;
}

export async function handleSettingsForm(request, env) {
  const meta = await getMeta(env);
  const body = `
    <h1>사이트 설정</h1>
    <form method="POST" action="/admin/settings">
      <label>사이트 이름</label>
      <input type="text" name="site_name" value="${escapeHtml(meta.site_name || "")}" />
      <label>사이트 설명</label>
      <input type="text" name="site_description" value="${escapeHtml(meta.site_description || "")}" />
      <label>소개 문구 (About 페이지)</label>
      <textarea name="about_text" rows="3">${escapeHtml(meta.about_text || "")}</textarea>
      <label>문의 이메일</label>
      <input type="email" name="contact_email" value="${escapeHtml(meta.contact_email || "")}" />
      <div style="margin-top:20px;">
        <button type="submit" class="btn">저장</button>
      </div>
    </form>
  `;
  return renderAdminLayout({ title: "사이트 설정", bodyHtml: body, active: "settings" });
}

export async function handleSettingsSubmit(request, env) {
  const form = await request.formData();
  const keys = ["site_name", "site_description", "about_text", "contact_email"];
  for (const key of keys) {
    const val = (form.get(key) || "").toString();
    await env.DB.prepare(
      "INSERT INTO site_meta (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value"
    )
      .bind(key, val)
      .run();
  }
  return new Response(null, { status: 302, headers: { Location: "/admin/settings" } });
}
