import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <ProductGrid
          title="今週のおすすめ"
          subtitle="厳選されたプレミアムランジェリーコレクション"
        />
        <ProductGrid
          title="新着商品"
          subtitle="最新のトレンドを取り入れた美しいデザイン"
        />
      </main>
      <Footer />
    </>
  );
}
