import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, Languages, Wrench, Info, AlertTriangle, Mail, Github, CheckCircle, MinusCircle } from "lucide-react";

const appImageUrl = "https://private-user-images.githubusercontent.com/216382990/474904171-6833f46b-a5d4-4313-b1bd-750b7e0224bc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ1MDkwMjIsIm5iZiI6MTc1NDUwODcyMiwicGF0aCI6Ii8yMTYzODI5OTAvNDc0OTA0MTcxLTY4MzNmNDZiLWE1ZDQtNDMxMy1iMWJkLTc1MGI3ZTAyMjRiYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwNlQxOTMyMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ODRlMTFjYWQxMDJhYmZiZjlhOGU3MTk1Y2Q5MDk5NTdhMThkNTRhNjBlMzk5MTdmOTZjYWIxYWZhNDM5MDkyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pDGWFKdWngiIb-Cu8DSea8C7KfaNBiGM5JbmT23rn24";

export function DocumentationContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
      
      {/* Overview Section */}
      <section id="overview" data-testid="section-overview">
        <Card>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="mb-6">
                <img 
                  src={appImageUrl}
                  alt="CaOPWa アプリケーション画面" 
                  className="rounded-xl shadow-lg mx-auto max-w-md w-full h-auto"
                  data-testid="img-app-screenshot"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-app-title">CaOPWa</h1>
              <p className="text-xl text-gray-600 mb-6" data-testid="text-app-subtitle">便利ツールアプリ</p>
              <Badge className="bg-blue-50 text-blue-700 px-4 py-2" data-testid="badge-version">
                <Info className="h-4 w-4 mr-2" />
                Version 1.0
              </Badge>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">アプリケーション概要</h2>
              <p className="text-gray-700 leading-relaxed mb-4" data-testid="text-app-description">
                CaOPWaは、実用性を高めた使いやすさに重点を置いて開発された便利ツールアプリケーションです。
                日常業務や学習、コミュニケーションに必要な機能を統合し、ユーザーが効率的に作業できる環境を提供します。
              </p>
              <p className="text-gray-700 leading-relaxed" data-testid="text-development-reason">
                開発者が自身で使いたいアプリとして構想・開発されており、実際の利用シーンを想定した
                実用的な機能設計が特徴です。私が使いたいアプリだったので、作りました。
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section id="features" className="print-break" data-testid="section-features">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">主要機能一覧</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg" data-testid="feature-calendar">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">カレンダー</h3>
                  <p className="text-gray-600 text-sm">スケジュール管理とイベント追跡機能</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg" data-testid="feature-chat">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">リアルタイムチャット</h3>
                  <p className="text-gray-600 text-sm">即座のコミュニケーション機能</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg" data-testid="feature-translation">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Languages className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">翻訳</h3>
                  <p className="text-gray-600 text-sm">多言語翻訳サポート機能</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg" data-testid="feature-tools">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">その他ツール</h3>
                  <p className="text-gray-600 text-sm">各種便利ツールの集合</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Calendar Feature */}
      <section id="calendar" data-testid="section-calendar">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-semibold">カレンダー機能</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">主要機能</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1" data-testid="list-calendar-features">
                <li>月次・週次・日次表示の切り替え</li>
                <li>イベントの追加・編集・削除</li>
                <li>繰り返しイベントの設定</li>
                <li>リマインダー通知機能</li>
                <li>カレンダーの共有機能</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">技術仕様</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm" data-testid="text-calendar-reference">
                  参考リポジトリ: <a href="https://github.com/kairi003/utahiro-calendar-updater" 
                  className="text-primary hover:underline">utahiro-calendar-updater</a>を基に開発
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Chat Feature */}
      <section id="chat" data-testid="section-chat">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-semibold">リアルタイムチャット</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">チャット機能</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1" data-testid="list-chat-features">
                <li>即時メッセージング</li>
                <li>グループチャット対応</li>
                <li>ファイル共有機能</li>
                <li>メッセージ履歴の保存</li>
                <li>オンライン状態表示</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">特徴</h3>
              <p className="text-gray-700" data-testid="text-chat-description">
                WebSocketを使用したリアルタイム通信により、遅延のない快適なチャット体験を提供します。
                シンプルで直感的なインターフェースにより、誰でも簡単に利用できます。
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Translation Feature */}
      <section id="translation" data-testid="section-translation">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-semibold">翻訳機能</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">翻訳サポート</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1" data-testid="list-translation-features">
                <li>多言語対応翻訳</li>
                <li>リアルタイム翻訳</li>
                <li>テキスト翻訳</li>
                <li>翻訳履歴の保存</li>
                <li>言語自動検出機能</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">技術情報</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm" data-testid="text-translation-reference">
                  参考リポジトリ: <a href="https://github.com/insilicomab/translator_app" 
                  className="text-primary hover:underline">translator_app</a>のアーキテクチャを参考に実装
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Tools */}
      <section id="tools" className="print-break" data-testid="section-tools">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-semibold">その他ツール</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">便利ツール集</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4" data-testid="tool-text-editor">
                  <h4 className="font-medium text-gray-900 mb-2">テキストエディタ</h4>
                  <p className="text-gray-600 text-sm">シンプルなテキスト編集機能</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4" data-testid="tool-calculator">
                  <h4 className="font-medium text-gray-900 mb-2">計算機</h4>
                  <p className="text-gray-600 text-sm">基本的な計算機能</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4" data-testid="tool-notepad">
                  <h4 className="font-medium text-gray-900 mb-2">メモ帳</h4>
                  <p className="text-gray-600 text-sm">クイックメモ機能</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4" data-testid="tool-timer">
                  <h4 className="font-medium text-gray-900 mb-2">タイマー</h4>
                  <p className="text-gray-600 text-sm">カウントダウンタイマー</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">関連プロジェクト</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm" data-testid="text-related-project">
                  開発者の他のプロジェクト: <a href="https://github.com/mikancat-taki/MikanToolkit" 
                  className="text-primary hover:underline">MikanToolkit</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Usability */}
      <section id="usability" data-testid="section-usability">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">使いやすさについて</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4" data-testid="warning-usability">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-yellow-800 mb-2">ご利用時の注意</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• このアプリは使いやすいですが、保証はしません</li>
                    <li>• スマートフォンでの使用はお勧めしません</li>
                    <li>• デスクトップ環境での利用を推奨します</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">設計思想</h3>
              <p className="text-gray-700 leading-relaxed" data-testid="text-design-philosophy">
                CaOPWaは実用性と使いやすさを重視して設計されています。開発者が実際に使いたいアプリとして
                構想されたため、日常的な作業フローに自然に組み込めるような機能配置とインターフェースを心がけています。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">推奨環境</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="text-gray-700 space-y-2" data-testid="list-recommended-environment">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    デスクトップブラウザ（Chrome, Firefox, Safari）
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    画面解像度 1280x720 以上
                  </li>
                  <li className="flex items-center">
                    <MinusCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                    モバイルデバイス（推奨しません）
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Technical Specifications */}
      <section id="technical" data-testid="section-technical">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">技術仕様</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">使用技術</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">フロントエンド</h4>
                  <ul className="text-gray-600 text-sm space-y-1" data-testid="list-frontend-tech">
                    <li>• TypeScript (98.2%)</li>
                    <li>• CSS (1.6%)</li>
                    <li>• React/Vite</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">バックエンド</h4>
                  <ul className="text-gray-600 text-sm space-y-1" data-testid="list-backend-tech">
                    <li>• Node.js</li>
                    <li>• Express</li>
                    <li>• Drizzle ORM</li>
                    <li>• WebSocket</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">プロジェクト構成</h3>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <pre className="text-gray-700" data-testid="code-project-structure">
{`mikancat-CaOPWa/
├── client/          # クライアントサイドコード
├── server/          # サーバーサイドコード
├── shared/          # 共通ライブラリ
├── components.json  # UI コンポーネント設定
├── drizzle.config.ts # データベース設定
└── package.json     # プロジェクト設定`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* References */}
      <section id="references" data-testid="section-references">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">参考リポジトリ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4" data-testid="reference-calendar">
              <h3 className="font-medium text-gray-900 mb-2">1. カレンダー機能</h3>
              <a href="https://github.com/kairi003/utahiro-calendar-updater" 
                 className="text-primary hover:underline text-sm">
                https://github.com/kairi003/utahiro-calendar-updater
              </a>
              <p className="text-gray-600 text-sm mt-1">カレンダー更新機能の実装参考</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4" data-testid="reference-translation">
              <h3 className="font-medium text-gray-900 mb-2">2. 翻訳機能</h3>
              <a href="https://github.com/insilicomab/translator_app" 
                 className="text-primary hover:underline text-sm">
                https://github.com/insilicomab/translator_app
              </a>
              <p className="text-gray-600 text-sm mt-1">翻訳アプリのアーキテクチャ参考</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4" data-testid="reference-toolkit">
              <h3 className="font-medium text-gray-900 mb-2">3. ツール集</h3>
              <a href="https://github.com/mikancat-taki/MikanToolkit" 
                 className="text-primary hover:underline text-sm">
                https://github.com/mikancat-taki/MikanToolkit
              </a>
              <p className="text-gray-600 text-sm mt-1">開発者の関連プロジェクト</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section id="contact" data-testid="section-contact">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">お問い合わせ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3" data-testid="contact-email">
              <Mail className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-gray-700 font-medium">メールアドレス</p>
                <a href="mailto:mikancat.mk.taki@gmail.com" 
                   className="text-primary hover:underline">mikancat.mk.taki@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3" data-testid="contact-github">
              <Github className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-gray-700 font-medium">GitHub リポジトリ</p>
                <a href="https://github.com/mikancat-taki/mikancat-CaOPWa" 
                   className="text-primary hover:underline">https://github.com/mikancat-taki/mikancat-CaOPWa</a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm text-center" data-testid="text-copyright">
                © 2025 CaOPWa - All rights reserved
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
