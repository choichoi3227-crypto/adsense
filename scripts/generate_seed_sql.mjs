// 시드 글 데이터(JS)를 D1에 주입할 SQL 파일로 변환합니다.
// 사용법: node scripts/generate_seed_sql.mjs > migrations/0002_seed_posts.sql
import { seedPosts1 } from "../src/data/seed_posts_1.js";
import { seedPosts2 } from "../src/data/seed_posts_2.js";

const posts = [...seedPosts1, ...seedPosts2];

function slugify(title, idx) {
  const base = title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return `${base || "post"}-${idx + 1}`;
}

function sqlEscape(str) {
  return String(str).replace(/'/g, "''");
}

let sql = "-- Auto-generated seed data (20 initial posts)\n";
posts.forEach((p, idx) => {
  const slug = slugify(p.title, idx);
  sql += `INSERT OR IGNORE INTO posts (slug, title, category, excerpt, content, cover_emoji, status) VALUES ('${sqlEscape(
    slug
  )}', '${sqlEscape(p.title)}', '${sqlEscape(p.category)}', '${sqlEscape(p.excerpt)}', '${sqlEscape(
    p.content
  )}', '${sqlEscape(p.cover_emoji)}', 'published');\n`;
});

process.stdout.write(sql);
