"use client";

import { Search, ShoppingCart, MapPin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { currentTheme, switchTheme } = useTheme();

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleLanguageChange = () => {
    switchTheme();
  };

  return (
    <header
      className={`${currentTheme.colors.primary} ${currentTheme.colors.text} transition-colors duration-300`}
    >
      {/* Top bar */}
      <div className="px-4 py-2 text-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <span>配送先: 日本</span>
          </div>
          <div className="flex items-center space-x-4">
            {session ? (
              <button
                onClick={() => signOut()}
                className="hover:underline cursor-pointer"
              >
                ログアウト
              </button>
            ) : (
              <Link
                href="/auth/signup"
                className="hover:underline cursor-pointer"
              >
                こんにちは、サインイン
              </Link>
            )}
            <span>注文履歴</span>
            <span>カート</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`${currentTheme.colors.secondary} px-4 py-3 transition-colors duration-300`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-8">
              <span className="text-pink-400">Cat</span>
              <span className="text-purple-400">Nyaa</span>
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center mr-4">
            <MapPin className="w-5 h-5 mr-1" />
            <div className="text-sm">
              <div className="text-gray-300">お届け先</div>
              <div className="font-bold">日本</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex">
              <select className="bg-gray-200 text-black px-3 py-2 rounded-l-md border-r border-gray-300">
                <option>すべて</option>
                <option>ランジェリー</option>
                <option>下着</option>
                <option>ナイトウェア</option>
              </select>
              <input
                type="text"
                placeholder="CatNyaaで検索"
                className="flex-1 px-4 py-2 text-black"
              />
              <button
                className={`${currentTheme.colors.accent} px-4 py-2 rounded-r-md hover:opacity-80 transition-opacity`}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Language switcher */}
          <button
            onClick={handleLanguageChange}
            className="relative w-8 h-8 flex items-center justify-center mr-4"
            aria-label="言語切り替え"
          >
            {/* 外側の円 */}
            <div className="absolute inset-0 border-2 border-current rounded-full" />
            {/* 内側の4つの円 */}
            <div className="absolute inset-1 rounded-full overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* 右上（1） */}
                <circle cx="65" cy="35" r="18" fill="#facc15" />
                {/* 右下（2） */}
                <circle cx="65" cy="65" r="18" fill="#be123c" />
                {/* 左下（3） */}
                <circle cx="35" cy="65" r="18" fill="#ffffff" />
                {/* 左上（4） */}
                <circle cx="35" cy="35" r="18" fill="#047857" />
              </svg>
            </div>
          </button>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <div className="text-sm">
              <div className="text-gray-300">こんにちは</div>
              {session ? (
                <div className="font-bold">
                  {(() => {
                    const name =
                      session.user?.name || session.user?.email || "";
                    if (name === "YASUNORI NAKATA") {
                      return "Ｎ・YASUNORI さま";
                    }
                    // 全角・半角混在対応: 6文字まで取得
                    const sliced = Array.from(name).slice(0, 6).join("");
                    return `${sliced} さま`;
                  })()}
                </div>
              ) : (
                <Link
                  href="/auth/signin"
                  className="font-bold hover:underline cursor-pointer"
                >
                  ログイン
                </Link>
              )}
            </div>

            <div className="text-sm">
              <div className="text-gray-300">返品</div>
              <div className="font-bold">注文履歴</div>
            </div>

            <div className="flex items-center">
              <ShoppingCart className="w-8 h-8" />
              <span className="ml-1 font-bold">カート</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div
        className={`${currentTheme.colors.primary} px-4 py-2 transition-colors duration-300`}
      >
        <div className="flex items-center space-x-6 max-w-7xl mx-auto text-sm">
          <button className="hover:underline">すべて</button>
          <button className="hover:underline">今日のお得情報</button>
          <button className="hover:underline">カスタマーサービス</button>
          <button className="hover:underline">レジストリ</button>
          <button className="hover:underline">ギフトカード</button>
          <button className="hover:underline">売る</button>
        </div>
      </div>

      {/* Account menu */}
      <div className="relative">
        <button
          className="text-gray-700 hover:text-pink-600 focus:outline-none"
          onMouseEnter={() => setIsAccountMenuOpen(true)}
          onMouseLeave={() => setIsAccountMenuOpen(false)}
        >
          {session
            ? (() => {
                const name = session.user?.name || session.user?.email || "";
                if (name === "YASUNORI NAKATA") {
                  return "Ｎ・YASUNORI さま";
                }
                const sliced = Array.from(name).slice(0, 6).join("");
                return `${sliced} さま`;
              })()
            : "ログイン"}
        </button>

        {isAccountMenuOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
            onMouseEnter={() => setIsAccountMenuOpen(true)}
            onMouseLeave={() => setIsAccountMenuOpen(false)}
          >
            {session ? (
              <>
                <div className="px-4 py-2 text-sm text-gray-700 border-b">
                  {session.user?.name || session.user?.email}
                </div>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  注文履歴
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  プロフィール設定
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  サインアウト
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  サインイン
                </Link>
                <Link
                  href="/auth/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  新規登録
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
