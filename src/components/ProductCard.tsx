// src/components/ProductCard.tsx
import React from 'react';
import rainbow from '../assets/rainbow.jpg'


type ProductCardProps = {
  name: string;
  weight: string;
  price: string;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, weight, price, imageUrl }) => {
  return (
    <div className="border p-4 rounded-lg ">
      <img src="https://monsoontea.co.th/cdn/shop/files/RainbowBlend50gtinWeb_1024x1024@2x.jpg?v=1695122791" alt={name} className="w-full h-auto mb-2" />
      <h2 className="text-md font-semibold">{name}</h2>
      <p className="text-sm">{weight}</p>
      <p className="text-md font-bold">{price}</p>
    </div>
  );
};

export default ProductCard;