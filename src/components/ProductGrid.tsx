"use client";

import ProductCard from "./ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "プレミアム ブラセット",
    price: 8900,
    originalPrice: 12000,
    rating: 4.5,
    reviewCount: 234,
    imageUrl: "/shorts-shop-parts/BRA1.jpg",
    badge: "ベストセラー",
    colors: ["#FFB6C1", "#DDA0DD", "#F0F8FF"],
  },
  {
    id: 2,
    name: "セクシーランジェリー１",
    price: 4800,
    rating: 4.8,
    reviewCount: 189,
    imageUrl: "/shorts-shop-parts/sexy lingerie1.png",
    colors: ["#FFE4E1", "#E6E6FA", "#F5F5DC"],
  },
  {
    id: 3,
    name: "エレガント ランジェリーセット",
    price: 15400,
    originalPrice: 18200,
    rating: 4.3,
    reviewCount: 456,
    imageUrl: "/shorts-shop-parts/woman(1).jpg?v=20241220",
    badge: "新商品",
    colors: ["#FFFFFF", "#F8F8FF", "#FFF0F5"],
  },
  {
    id: 4,
    name: "デラックス ブラコレクション",
    price: 11200,
    rating: 4.6,
    reviewCount: 167,
    imageUrl: "/shorts-shop-parts/BRA2.jpg",
    colors: ["#FFB6C1", "#DDA0DD"],
  },
  {
    id: 5,
    name: "10代ショーツx3",
    price: 6200,
    originalPrice: 8800,
    rating: 4.2,
    reviewCount: 789,
    imageUrl: "/shorts-shop-parts/3 patterns of shorts.jpg",
    badge: "セール",
    colors: ["#000000", "#FFFFFF", "#FFB6C1", "#DDA0DD"],
  },
  {
    id: 6,
    name: "セクシーランジェリーＡ",
    price: 22000,
    rating: 4.9,
    reviewCount: 45,
    imageUrl: "/shorts-shop-parts/sexy lingerie1.png",
    colors: ["#8B0000", "#000000", "#FFB6C1"],
  },
  {
    id: 7,
    name: "セクシーランジェリーＢ",
    price: 7500,
    originalPrice: 9000,
    rating: 4.4,
    reviewCount: 321,
    imageUrl: "/shorts-shop-parts/sexy lingerie2.png",
    badge: "人気",
    colors: ["#000000", "#808080", "#FFB6C1", "#DDA0DD"],
  },
  {
    id: 8,
    name: "ラグジュアリー ランジェリーセット",
    price: 18500,
    rating: 4.7,
    reviewCount: 123,
    imageUrl: "/shorts-shop-parts/woman(3).png?v=20241220",
    colors: ["#F5F5DC", "#DDA0DD", "#FFB6C1"],
  },
];

interface ProductGridProps {
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({
  title = "おすすめ商品",
  subtitle = "あなたにぴったりのランジェリーを見つけよう",
}: ProductGridProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
            もっと見る
          </button>
        </div>
      </div>
    </section>
  );
}
