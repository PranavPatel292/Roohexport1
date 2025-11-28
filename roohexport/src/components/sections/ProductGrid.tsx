import { ProductCard } from "./ProductCard";

// Define the shape of a product object
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: string | null;
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          tag={product.tag}
        />
      ))}
    </div>
  );
};
