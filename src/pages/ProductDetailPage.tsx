import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Shopchoice from "../components/Shopchoice"; // Ensure correct import path

type Product = {
  id: number;
  name: string;
  weight: string;
  price: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Green Tea Blend",
    weight: "100g",
    price: "฿125",
    imageUrl: "/path/to/green-tea-image.jpg",
    description: "A delightful blend of premium green tea leaves.",
    ingredients: ["Green Tea Leaves", "Natural Herbs"],
  },
  // Add more products...
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Back to Products
      </button>
      <Shopchoice
        initialImageUrl={product.imageUrl}
        initialProductName={product.name}
      />
    </div>
  );
};

export default ProductDetailPage;
