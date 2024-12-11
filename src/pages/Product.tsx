// // src/pages/ProductListPage.tsx
// import React from 'react';
// import ProductCard from '../components/ProductCard';

// type Product = {
//   id: number;
//   name: string;
//   weight: string;
//   price: string;
//   imageUrl: string;
// };

// const products: Product[] = Array(16).fill({
//   id: 1,
//   name: "Tea Blend",
//   weight: "100g",
//   price: "฿125",
//   imageUrl: "./assets/im", 
// });

// const Product: React.FC = () => {
//   return (
//     <div className="flex pt-[81px]">

//       {/* Main Content */}
//       <main className="w-3/4 p-4">
//         <h1 className="mb-4 text-xl font-bold">75 รายการ</h1>
//         <div className="grid grid-cols-4 gap-4">
//           {products.map((product, index) => (
//             <ProductCard
//               key={index}
//               name={product.name}
//               weight={product.weight}
//               price={product.price}
//               imageUrl={product.imageUrl}
//             />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Product;
