import { DocumentationSection } from "@shared/schema";

export interface IStorage {
  getDocumentationSections(): Promise<DocumentationSection[]>;
  generateHTML(): Promise<string>;
}

export class MemStorage implements IStorage {
  private sections: DocumentationSection[] = [
    {
      id: "overview",
      title: "概要",
      content: "CaOPWa documentation overview",
      order: 1,
    },
    {
      id: "features", 
      title: "機能一覧",
      content: "Main features of CaOPWa",
      order: 2,
    },
    // Add more sections as needed
  ];

  async getDocumentationSections(): Promise<DocumentationSection[]> {
    return this.sections.sort((a, b) => a.order - b.order);
  }

  async generateHTML(): Promise<string> {
    // Generate complete HTML document for download
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CaOPWa Documentation - 便利ツールアプリドキュメント</title>
    <style>
        body { 
            font-family: 'Noto Sans JP', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 20px;
        }
        h1 { color: #1976D2; text-align: center; margin-bottom: 2rem; }
        h2 { color: #424242; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; }
        h3 { color: #666; }
        .app-image { text-align: center; margin: 2rem 0; }
        .app-image img { max-width: 400px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0; }
        .feature-card { padding: 1rem; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9; }
        .warning-box { background: #fff3cd; border: 1px solid #ffeaa7; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
        .tech-specs { background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
        .contact-info { background: #e3f2fd; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
        a { color: #1976D2; text-decoration: none; }
        a:hover { text-decoration: underline; }
        ul { padding-left: 2rem; }
        .footer { text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #eee; color: #666; }
    </style>
</head>
<body>
    <h1>CaOPWa Documentation</h1>
    <p style="text-align: center; font-size: 1.2rem; color: #666;">便利ツールアプリドキュメント</p>
    
    <div class="app-image">
        <img src="https://private-user-images.githubusercontent.com/216382990/474904171-6833f46b-a5d4-4313-b1bd-750b7e0224bc.png" alt="CaOPWa アプリケーション画面" />
    </div>

    <h2>概要</h2>
    <p>CaOPWaは、実用性を高めた使いやすさに重点を置いて開発された便利ツールアプリケーションです。日常業務や学習、コミュニケーションに必要な機能を統合し、ユーザーが効率的に作業できる環境を提供します。</p>
    <p>開発者が自身で使いたいアプリとして構想・開発されており、実際の利用シーンを想定した実用的な機能設計が特徴です。私が使いたいアプリだったので、作りました。</p>

    <h2>主要機能</h2>
    <div class="feature-grid">
        <div class="feature-card">
            <h3>📅 カレンダー</h3>
            <p>スケジュール管理とイベント追跡機能</p>
        </div>
        <div class="feature-card">
            <h3>💬 リアルタイムチャット</h3>
            <p>即座のコミュニケーション機能</p>
        </div>
        <div class="feature-card">
            <h3>🌐 翻訳</h3>
            <p>多言語翻訳サポート機能</p>
        </div>
        <div class="feature-card">
            <h3>🔧 その他ツール</h3>
            <p>各種便利ツールの集合</p>
        </div>
    </div>

    <h2>使いやすさについて</h2>
    <div class="warning-box">
        <h3>⚠️ ご利用時の注意</h3>
        <ul>
            <li>このアプリは使いやすいですが、保証はしません</li>
            <li>スマートフォンでの使用はお勧めしません</li>
            <li>デスクトップ環境での利用を推奨します</li>
        </ul>
    </div>

    <h2>技術仕様</h2>
    <div class="tech-specs">
        <h3>使用技術</h3>
        <ul>
            <li><strong>フロントエンド:</strong> TypeScript (98.2%), CSS (1.6%), React/Vite, Tailwind CSS</li>
            <li><strong>バックエンド:</strong> Node.js, Express, Drizzle ORM, WebSocket</li>
        </ul>
    </div>

    <h2>参考リポジトリ</h2>
    <ol>
        <li><a href="https://github.com/kairi003/utahiro-calendar-updater">カレンダー機能参考</a></li>
        <li><a href="https://github.com/insilicomab/translator_app">翻訳機能参考</a></li>
        <li><a href="https://github.com/mikancat-taki/MikanToolkit">関連プロジェクト</a></li>
    </ol>

    <h2>お問い合わせ</h2>
    <div class="contact-info">
        <p><strong>メールアドレス:</strong> <a href="mailto:mikancat.mk.taki@gmail.com">mikancat.mk.taki@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/mikancat-taki/mikancat-CaOPWa">https://github.com/mikancat-taki/mikancat-CaOPWa</a></p>
    </div>

    <div class="footer">
        <p>© 2025 CaOPWa - All rights reserved</p>
    </div>
</body>
</html>`;

    return htmlTemplate;
  }
}

export const storage = new MemStorage();
