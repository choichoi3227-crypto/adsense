-- Cloud/Server Blog schema
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,       -- HTML content
  cover_emoji TEXT DEFAULT '☁️',
  status TEXT NOT NULL DEFAULT 'published', -- draft | published
  author TEXT DEFAULT 'CloudDesk 편집팀',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_created ON posts(created_at);

CREATE TABLE IF NOT EXISTS site_meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

INSERT OR IGNORE INTO site_meta (key, value) VALUES
  ('site_name', 'CloudDesk'),
  ('site_description', '클라우드와 서버 운영 실무를 다루는 기술 블로그'),
  ('about_text', 'CloudDesk는 클라우드 인프라, 서버 운영, 네트워크, 보안을 주제로 실무 경험과 학습 내용을 정리해 공유하는 개인 기술 블로그입니다.'),
  ('contact_email', 'contact@example.com');
