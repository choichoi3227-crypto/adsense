import { renderAdminLayout } from "../templates/admin_layout.js";
import { escapeHtml } from "../templates/layout.js";

// ── 체크리스트 규칙 정의 ──────────────────────────────────────
// 각 규칙은 사이트 구조 데이터를 받아 pass/fail과 이유, 가중치를 반환한다.
const RULES = [
  {
    key: "min_posts",
    label: "게시물 수 (최소 15편 이상 권장)",
    weight: 20,
    check: (d) => d.publishedCount >= 15,
    detail: (d) => `발행된 글: ${d.publishedCount}편`,
  },
  {
    key: "good_posts",
    label: "충분한 게시물 수 (20편 이상 이상적)",
    weight: 10,
    check: (d) => d.publishedCount >= 20,
    detail: (d) => `발행된 글: ${d.publishedCount}편 (권장 20편+)`,
  },
  {
    key: "category_diversity",
    label: "카테고리 다양성 (2개 이상)",
    weight: 8,
    check: (d) => d.categoryCount >= 2,
    detail: (d) => `카테고리 수: ${d.categoryCount}개`,
  },
  {
    key: "avg_length",
    label: "글 평균 분량 (600자 이상 권장)",
    weight: 15,
    check: (d) => d.avgContentLength >= 600,
    detail: (d) => `평균 본문 길이: 약 ${d.avgContentLength}자`,
  },
  {
    key: "short_posts",
    label: "지나치게 짧은 글 없음 (300자 미만 글 0개)",
    weight: 10,
    check: (d) => d.shortPostCount === 0,
    detail: (d) => `300자 미만 글: ${d.shortPostCount}편`,
  },
  {
    key: "about_page",
    label: "소개(About) 페이지 존재",
    weight: 8,
    check: () => true,
    detail: () => "고정 페이지로 구현됨 (/about)",
  },
  {
    key: "privacy_page",
    label: "개인정보처리방침 페이지 존재",
    weight: 12,
    check: () => true,
    detail: () => "고정 페이지로 구현됨 (/privacy)",
  },
  {
    key: "contact_page",
    label: "문의(Contact) 페이지 존재",
    weight: 8,
    check: () => true,
    detail: () => "고정 페이지로 구현됨 (/contact)",
  },
  {
    key: "nav_consistency",
    label: "일관된 사이트 내비게이션",
    weight: 4,
    check: () => true,
    detail: () => "모든 페이지에 공통 헤더/푸터 적용됨",
  },
  {
    key: "duplicate_titles",
    label: "중복 제목 없음",
    weight: 5,
    check: (d) => d.duplicateTitleCount === 0,
    detail: (d) => `중복 제목: ${d.duplicateTitleCount}건`,
  },
];

async function collectSiteData(env) {
  const posts = await env.DB.prepare(
    "SELECT title, category, content, status FROM posts"
  ).all();
  const all = posts.results;
  const published = all.filter((p) => p.status === "published");

  const categories = new Set(published.map((p) => p.category));
  const lengths = published.map((p) => stripHtml(p.content).length);
  const avgContentLength = lengths.length
    ? Math.round(lengths.reduce((a, b) => a + b, 0) / lengths.length)
    : 0;
  const shortPostCount = lengths.filter((l) => l < 300).length;

  const titleCounts = {};
  for (const p of published) {
    titleCounts[p.title] = (titleCounts[p.title] || 0) + 1;
  }
  const duplicateTitleCount = Object.values(titleCounts).filter((c) => c > 1).length;

  return {
    publishedCount: published.length,
    totalCount: all.length,
    categoryCount: categories.size,
    avgContentLength,
    shortPostCount,
    duplicateTitleCount,
  };
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function scoreToVerdict(score) {
  if (score >= 85) return { label: "승인 가능성 높음", color: "#7fd7ff" };
  if (score >= 65) return { label: "보완 후 신청 권장", color: "#ffd76a" };
  return { label: "승인 가능성 낮음 — 개선 필요", color: "#ff8a9a" };
}

export async function handleAnalyzer(request, env) {
  const data = await collectSiteData(env);
  const totalWeight = RULES.reduce((s, r) => s + r.weight, 0);
  let earned = 0;
  const rows = RULES.map((rule) => {
    const passed = rule.check(data);
    if (passed) earned += rule.weight;
    return { ...rule, passed, detailText: rule.detail(data) };
  });
  const score = Math.round((earned / totalWeight) * 100);
  const verdict = scoreToVerdict(score);

  const rowsHtml = rows
    .map(
      (r) => `
      <div class="check-row">
        <div class="check-icon">${r.passed ? "✅" : "⚠️"}</div>
        <div>
          <div>${escapeHtml(r.label)} <span class="muted" style="font-size:0.78rem;">(가중치 ${r.weight})</span></div>
          <div class="muted" style="font-size:0.82rem;">${escapeHtml(r.detailText)}</div>
        </div>
      </div>`
    )
    .join("");

  const suggestions = rows
    .filter((r) => !r.passed)
    .map((r) => `<li>${escapeHtml(r.label)} — ${escapeHtml(r.detailText)}</li>`)
    .join("");

  const body = `
    <h1>📊 애드센스 승인율 분석기</h1>
    <p class="muted">사이트 구조(게시물 수, 카테고리, 필수 페이지, 글 분량 등)를 기준으로 승인 가능성을 점수화합니다. 실제 심사 결과를 보장하지는 않습니다.</p>

    <div class="card" style="margin-top:20px;">
      <div class="flex-between">
        <div>
          <div style="font-size:2.2rem;font-weight:700;color:${verdict.color};">${score}점</div>
          <div style="color:${verdict.color};font-weight:600;">${verdict.label}</div>
        </div>
        <div style="width:50%;">
          <div class="score-bar"><div class="score-bar-fill" style="width:${score}%;"></div></div>
        </div>
      </div>
    </div>

    <h2>체크리스트</h2>
    <div class="card">${rowsHtml}</div>

    ${
      suggestions
        ? `<h2>개선 제안</h2><div class="card"><ul>${suggestions}</ul></div>`
        : `<h2>🎉 모든 항목을 충족했습니다</h2>`
    }

    <p class="muted" style="margin-top:24px;font-size:0.8rem;">
      * 이 분석기는 사이트 내부 구조 기준의 참고용 점수이며, Google AdSense의 실제 심사는
      콘텐츠 품질, 원본성, 트래픽, 정책 준수 여부 등 공개되지 않은 다양한 기준으로 이루어집니다.
    </p>
  `;

  return renderAdminLayout({ title: "승인율 분석기", bodyHtml: body, active: "analyzer" });
}
