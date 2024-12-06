interface Product {
    id: number;
    name: string;
    weight: string;
    price: string;
    imageUrl: string;
    category: string;
};
  
const products: Product[] = [
    { id: 1, name: "Green Tea Blend", weight: "100g", price: "฿125", imageUrl: "/path/to/green-tea-image.jpg", category: "ชาเขียว" },
    { id: 2, name: "Black Tea Classic", weight: "100g", price: "฿150", imageUrl: "/path/to/black-tea-image.jpg", category: "ชาดำ" },
    { id: 3, name: "Oolong Tea Premium", weight: "100g", price: "฿175", imageUrl: "/path/to/oolong-tea-image.jpg", category: "ชาอู่หลง" },
    { id: 4, name: "White Tea Blossom", weight: "100g", price: "฿200", imageUrl: "/path/to/white-tea-image.jpg", category: "ชาขาว" },
];

export default products;