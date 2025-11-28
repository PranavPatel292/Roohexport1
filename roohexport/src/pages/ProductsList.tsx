import { ArrowRight, Menu, Phone, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";

// Assuming you have a button component, if not, standard <button> works too.

const products = [
  {
    id: 1,
    name: "The Royal Silk Kaftan",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Bohemian Summer Dress",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 3,
    name: "Azure Linen Robe",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=800&auto=format&fit=crop",
    tag: "Sale",
  },
  {
    id: 4,
    name: "Midnight Velvet",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=800&auto=format&fit=crop",
    tag: null,
  },
  {
    id: 5,
    name: "Moroccan Print Tunic",
    price: "$75",
    image:
      "https://images.unsplash.com/photo-1589810264340-0ce27bfbf751?q=80&w=800&auto=format&fit=crop",
    tag: "Limited",
  },
  {
    id: 6,
    name: "Desert Sand Wrap",
    price: "$110",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    tag: null,
  },
];

export default function ProductListingPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-stone-50 font-sans text-stone-800">
      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col">
        {/* Header Section */}
        <header className="px-8 py-10 md:py-14 bg-stone-50">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">
            Our Products
          </h2>
          <p className="text-stone-500 max-w-md">
            Handcrafted elegance for the modern soul. Explore our latest
            collection of premium fabrics.
          </p>
        </header>

        {/* --- PRODUCT GRID --- */}
        <div className="flex-1 px-8 pb-12">
          {/* Responsive Grid Logic:
            - grid-cols-1: Mobile (1 column)
            - sm:grid-cols-2: Tablet (2 columns)
            - lg:grid-cols-3: Desktop (3 columns) 
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-stone-200 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag Overlay */}
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                      {product.tag}
                    </span>
                  )}
                  {/* Hover Add to Cart Button */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="w-full bg-white text-black py-3 font-medium shadow-lg hover:bg-stone-900 hover:text-white transition-colors">
                      More information
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 group-hover:underline decoration-stone-400 underline-offset-4">
                      {product.name}
                    </h3>
                    <p className="text-stone-500 mt-1">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
