// src/components/ProductCard.tsx
import React from 'react';


type ProductCardProps = {
  name: string;
  weight: string;
  price: string;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, weight, price, imageUrl }) => {
  return (
    <div className="border p-4 rounded-lg ">
      <img src={imageUrl} alt={name} className="w-full h-auto mb-2" />
      <h2 className="text-md font-semibold">{name}</h2>
      <p className="text-sm">{weight}</p>
      <p className="text-md font-bold">{price}</p>
    </div>
  );
};

export default ProductCard;