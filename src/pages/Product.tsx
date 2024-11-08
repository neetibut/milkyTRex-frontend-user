// src/pages/ProductListPage.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';

type Product = {
  id: number;
  name: string;
  weight: string;
  price: string;
  imageUrl: string;
};

const products: Product[] = Array(8).fill({
  id: 1,
  name: "Tea Blend",
  weight: "100g",
  price: "฿125",
  imageUrl: "./assets/im", // Replace with your actual image path
});

const ProductListPage: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="w-3/4 p-4">
        <h1 className="mb-4 text-xl font-bold">75 รายการ</h1>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              weight={product.weight}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListPage;
