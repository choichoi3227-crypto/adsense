# CloudDesk — 클라우드/서버 기술 블로그 (애드센스 승인용)

Cloudflare Workers + D1 기반의 정적/서버 렌더링 블로그입니다.
주제: **클라우드 · 서버 운영**. 애드센스 승인에 필요한 구조(충분한 글 수, 카테고리 다양성,
About/Contact/Privacy 페이지, sitemap, robots.txt)를 기본으로 갖추고 시작합니다.

## 포함된 기능

- 공개 사이트: 홈(카테고리 필터), 글 상세, 소개, 문의, 개인정보처리방침
- 기본 제공 글 **20편** (클라우드 기초, 서버 운영, 컨테이너, 네트워크, 보안, DevOps 5개 카테고리)
- 어드민 페이지 (`/admin`): Secret 토큰 로그인 → 대시보드, 글 작성/수정/삭제, 사이트 설정
- **승인율 분석기** (`/admin/analyzer`): 게시물 수·분량·카테고리 다양성·필수 페이지 등을
  체크리스트로 점수화 (Cloudflare Workers AI 바인딩 포함, 현재는 구조 기반 점수 로직)
- 외부 자동화용 REST API (`/api/posts`): Secret 토큰(`Authorization: Bearer`)으로 글 발행/수정/삭제
- `robots.txt`, `sitemap.xml` 자동 생성
- `ads.txt` 플레이스홀더 (승인 후 퍼블리셔 ID로 교체)

## 사전 준비물

- Cloudflare 계정
- Node.js 18+ / npm
- `npm install -g wrangler` 또는 프로젝트에 devDependency로 포함됨 (`npx wrangler`)

## 1) 설치

```bash
npm install
```

## 2) D1 데이터베이스 생성

```bash
npx wrangler d1 create clouddesk-db
```

출력된 `database_id`를 `wrangler.toml`의 `REPLACE_WITH_YOUR_D1_DATABASE_ID` 자리에 붙여넣으세요.

## 3) 어드민 로그인용 Secret 토큰 등록

로컬 개발 환경:
`.dev.vars` 파일을 만들고 아래처럼 작성합니다 (이 파일은 git에 커밋하지 마세요).

```
ADMIN_TOKEN=원하는-임의의-긴-비밀-토큰
```

배포 환경(Cloudflare):

```bash
npx wrangler secret put ADMIN_TOKEN
# 프롬프트가 뜨면 비밀 토큰 값을 입력
```

## 4) 데이터베이스 마이그레이션 + 기본 글 20개 시드

로컬 개발용:
```bash
npm run db:migrate:local
```

실제 배포된 원격 D1에 적용:
```bash
npm run db:migrate:remote
```

## 5) 로컬 개발 서버 실행

```bash
npm run dev
```

`http://localhost:8787` 에서 확인, 어드민은 `http://localhost:8787/admin` (Secret 토큰으로 로그인).

## 6) 배포

```bash
npm run deploy
```

배포 후 Cloudflare 대시보드에서 커스텀 도메인을 연결하세요.

## 외부에서 Secret 토큰으로 글 발행/수정하기 (요구사항 #2)

이 API를 이용하면 CI 파이프라인, 외부 스크립트, GPT 자동화 등에서
Secret 토큰만으로 글을 발행/업데이트할 수 있습니다.

### 새 글 발행
```bash
curl -X POST https://your-domain.com/api/posts \
  -H "Authorization: Bearer <ADMIN_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AWS Lambda 콜드 스타트 최적화하기",
    "category": "클라우드 기초",
    "excerpt": "Lambda 콜드 스타트를 줄이는 5가지 방법을 정리합니다.",
    "content": "<p>본문 HTML...</p>",
    "cover_emoji": "⚡",
    "status": "published"
  }'
```

### 기존 글 업데이트 (슬러그 기준)
```bash
curl -X PUT https://your-domain.com/api/posts/<slug> \
  -H "Authorization: Bearer <ADMIN_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "content": "<p>수정된 본문...</p>" }'
```

### 글 삭제
```bash
curl -X DELETE https://your-domain.com/api/posts/<slug> \
  -H "Authorization: Bearer <ADMIN_TOKEN>"
```

### 글 목록 조회
```bash
curl https://your-domain.com/api/posts \
  -H "Authorization: Bearer <ADMIN_TOKEN>"
```

## 애드센스 신청 전 체크리스트

1. `/admin/analyzer`에서 승인율 점수를 확인하고 부족한 항목을 보완하세요.
2. `public/ads.txt`를 실제 발급받은 AdSense 퍼블리셔 ID로 교체하세요 (승인 후 필요).
3. `/admin/settings`에서 사이트 이름, 설명, 소개 문구, 문의 이메일을 실제 정보로 채우세요.
4. 최소 2-3주간 실제 트래픽과 추가 콘텐츠를 쌓은 뒤 신청하는 것을 권장합니다 (승인 확률에
   가장 큰 영향을 주는 것은 콘텐츠 품질과 사이트의 실사용 흔적입니다).
5. 애드센스 광고 코드는 승인 후 `src/templates/layout.js`의 `.ad-slot` 영역에 삽입하세요.

## 주의사항

- 이 프로젝트는 승인 "가능성을 높이기 위한 구조적 기반"을 제공하는 것이며, Google의 실제 심사는
  콘텐츠 원본성, 트래픽, 정책 준수 등 공개되지 않은 기준을 포함하므로 승인을 보장하지 않습니다.
- 기본 제공된 20개 글은 초안입니다. 애드센스는 독자적이고 가치 있는 콘텐츠를 중요하게 평가하므로,
  운영자가 직접 검수하거나 자신의 경험을 더해 보강하는 것을 권장합니다.
