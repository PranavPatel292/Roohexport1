import { ProductGrid } from "@/components/sections/ProductGrid";

// Assuming you have a button component, if not, standard <button> works too.

const productsData = [
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
          <ProductGrid products={productsData} />
        </div>
      </main>
    </div>
  );
}
