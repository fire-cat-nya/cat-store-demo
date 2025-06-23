"use client";

import { Star, Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  badge?: string;
  colors?: string[];
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  imageUrl,
  badge,
  colors = [],
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      {/* Image container */}
      <div className="relative overflow-hidden">
        {badge && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded z-10">
            {badge}
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 text-xs font-bold rounded z-10">
            -{discount}%
          </div>
        )}

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
          style={{ right: discount > 0 ? "60px" : "8px" }}
        >
          <Heart
            className={`w-4 h-4 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Product image */}
        <div className="h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Quick add to cart overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 font-medium hover:bg-gray-100 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>カートに追加</span>
          </motion.button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        {/* Color options */}
        {colors.length > 0 && (
          <div className="flex space-x-2 mb-3">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === index
                    ? "border-gray-800"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Product name */}
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 hover:text-pink-600 cursor-pointer transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-800">
            ¥{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ¥{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Prime badge */}
        <div className="mt-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Prime配送
          </span>
        </div>
      </div>
    </motion.div>
  );
}
