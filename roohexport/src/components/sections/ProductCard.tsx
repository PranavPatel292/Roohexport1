// components/ProductCard.tsx
import React from "react";

interface ProductProps {
  image: string;
  name: string;
  price: string;
  tag?: string | null;
}

export const ProductCard = ({ image, name, price, tag }: ProductProps) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-stone-200 mb-4">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Tag Overlay */}
        {tag && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {tag}
          </span>
        )}

        {/* Hover Add to Cart Button */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="w-full bg-white text-black py-3 font-medium shadow-lg hover:bg-stone-900 hover:text-white transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-auto">
        <h3 className="text-lg font-medium text-stone-900 group-hover:underline decoration-stone-400 underline-offset-4">
          {name}
        </h3>
        <p className="text-stone-500 mt-1">{price}</p>
      </div>
    </div>
  );
};
