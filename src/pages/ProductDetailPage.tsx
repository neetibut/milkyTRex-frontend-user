// src/pages/ProductDetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    ingredients: ["Green Tea Leaves", "Natural Herbs"]
  },
  // Add more products...
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find(p => p.id === Number(id));

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
      
      <div className="flex">
        <div className="w-1/2 pr-4">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 mb-4">{product.price}</p>
          
          <div className="mb-4">
            <h2 className="font-semibold">Description</h2>
            <p>{product.description}</p>
          </div>
          
          <div className="mb-4">
            <h2 className="font-semibold">Ingredients</h2>
            <ul className="list-disc pl-5">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;