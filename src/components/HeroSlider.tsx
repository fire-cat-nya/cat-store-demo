"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "エレガントコレクション",
    subtitle: "最高級シルクランジェリー",
    description: "上質な素材と洗練されたデザインで、特別な瞬間を演出します",
    imageUrl: "/shorts-shop-parts/new_face_ico.webp",
    buttonText: "今すぐ購入",
  },
  {
    id: 2,
    title: "ロマンティックライン",
    subtitle: "レースの美しさ",
    description: "繊細なレースが織りなす、女性らしさの極み",
    imageUrl: "/shorts-shop-parts/new_face_ico.webp",
    buttonText: "コレクションを見る",
  },
  {
    id: 3,
    title: "コンフォートシリーズ",
    subtitle: "日常の贅沢",
    description: "快適さとスタイルを両立した、毎日着たくなるランジェリー",
    imageUrl: "/shorts-shop-parts/new_face_ico.webp",
    buttonText: "詳細を見る",
  },
];

// 背景画像の配列
const backgroundImages = [
  "/shorts-shop-parts/slide.png",
  "/shorts-shop-parts/slide2.jpg",
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // スライドコンテンツの切り替え（5秒間隔）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // 背景画像の切り替え（3秒表示 + 1.5秒トランジション = 4.5秒サイクル）
  useEffect(() => {
    const backgroundTimer = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 1500); // 1.5秒のトランジション時間
    }, 3000); // 3秒表示

    return () => clearInterval(backgroundTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* 背景画像レイヤー */}
      <div className="absolute inset-0">
        {backgroundImages.map((bgImage, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentBackground
                ? isTransitioning
                  ? "opacity-0"
                  : "opacity-100"
                : index === (currentBackground + 1) % backgroundImages.length &&
                  isTransitioning
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center relative z-20"
        >
          <div className="container mx-auto px-8 flex items-center">
            {/* Content */}
            <div className="w-1/2 pr-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-pink-300 text-lg font-medium mb-2">
                  {slides[currentSlide].subtitle}
                </h3>
                <h1 className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-white/90 text-lg mb-8 leading-relaxed drop-shadow">
                  {slides[currentSlide].description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {slides[currentSlide].buttonText}
                </motion.button>
              </motion.div>
            </div>

            {/* Image */}
            <div className="w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative"
              >
                <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src={slides[currentSlide].imageUrl}
                    alt="ランジェリーコレクション"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-pink-300/60 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-300/60 rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-30"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-30"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-pink-500 scale-125"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
