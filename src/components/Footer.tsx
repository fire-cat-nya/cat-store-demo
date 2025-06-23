"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { currentTheme } = useTheme();

  return (
    <footer
      className={`${currentTheme.colors.primary} ${currentTheme.colors.text} transition-colors duration-300 mt-auto`}
    >
      {/* Back to top */}
      <div
        className={`${currentTheme.colors.secondary} py-4 text-center hover:opacity-80 cursor-pointer transition-colors duration-300`}
      >
        <span className="text-sm">トップに戻る</span>
      </div>

      {/* Main footer content */}
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-4">CatNyaaについて</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    採用情報
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    CatNyaaについて
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    投資家向け情報
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    CatNyaaデバイス
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-4">お客様との関係</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    CatNyaaで売る
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    売上向上サービス
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    出品サービス
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    フルフィルメント by CatNyaa
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold mb-4">CatNyaaでのお支払い</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    CatNyaaポイント
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    CatNyaaギフト券
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    CatNyaaクレジットカード
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    コーポレートクレジットライン
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold mb-4">問題が発生しましたか？</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    CatNyaaと地球
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    CatNyaa Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    配送料とお届け日時
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    返品・交換
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo and language selector */}
          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="text-pink-400">Cat</span>
              <span className="text-purple-400">Nyaa</span>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <button className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-700">
                🌐 日本語
              </button>
              <button className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-700">
                ¥ JPY - 日本円
              </button>
              <button className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-700">
                🇯🇵 日本
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div
        className={`${currentTheme.colors.secondary} py-4 text-center text-sm transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-4 mb-2">
            <a href="#" className="hover:underline">
              利用規約
            </a>
            <a href="#" className="hover:underline">
              プライバシー規約
            </a>
            <a href="#" className="hover:underline">
              ヘルプ
            </a>
            <a href="#" className="hover:underline">
              クッキー設定
            </a>
            <a href="#" className="hover:underline">
              インターネット上の広告
            </a>
          </div>
          <p className="text-gray-400">
            © 1996-2024, CatNyaa.com, Inc. またはその関連会社
          </p>
        </div>
      </div>
    </footer>
  );
}
