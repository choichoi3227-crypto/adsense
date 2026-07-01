// 어드민 인증 헬퍼
// - 로그인: POST /admin/login (body: { token }) → 성공 시 HttpOnly 쿠키 발급
// - 이후 요청: 쿠키의 세션값을 ADMIN_TOKEN과 대조 (토큰 자체를 쿠키에 저장하지 않고,
//   토큰의 해시를 세션 쿠키 값으로 사용해 노출 위험을 줄인다)

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hashBuffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function makeSessionValue(adminToken) {
  // 세션 쿠키 값 = sha256(adminToken + ":session")
  // 원본 토큰이 쿠키에 그대로 노출되지 않도록 별도 해시를 사용
  return sha256Hex(adminToken + ":session");
}

export function getCookie(request, name) {
  const cookieHeader = request.headers.get("Cookie") || "";
  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(name + "="));
  if (!match) return null;
  return decodeURIComponent(match.split("=").slice(1).join("="));
}

export async function isAuthenticated(request, env) {
  if (!env.ADMIN_TOKEN) return false;
  const cookieVal = getCookie(request, "cd_session");
  if (!cookieVal) return false;
  const expected = await makeSessionValue(env.ADMIN_TOKEN);
  return timingSafeEqual(cookieVal, expected);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export function sessionCookieHeader(value, { clear = false } = {}) {
  const maxAge = clear ? 0 : 60 * 60 * 24 * 7; // 7일
  const val = clear ? "" : encodeURIComponent(value);
  return `cd_session=${val}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}
