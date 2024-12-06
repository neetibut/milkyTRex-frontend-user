// src/components/ProductCard.tsx
import React from 'react';
import rainbow from '../assets/rainbow.jpg'


type ProductCardProps = {
  name: string;
  weight: string;
  price: string;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  weight, 
  price
  
}) => {
  return (
    <div className="border p-4 rounded-lg transition-transform hover:scale-105 hover:shadow-lg">
      <div className="relative aspect-square mb-2">
        <img 
          src={rainbow} 
          alt={name} 
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.jpg'; // ใส่รูป placeholder กรณีโหลดรูปไม่สำเร็จ
          }}
        />
      </div>
      <h2 className="text-md font-semibold truncate">{name}</h2>
      <p className="text-sm text-gray-600">{weight}</p>
      <p className="text-md font-bold text-green-600">{price}</p>
    </div>
  );
};

export default ProductCard;