import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

interface Product {
  id: string; // Ensure this maps to _id in the API
  name: string;
  weight: string;
  price: number;
  imageUrl: string;
  category: string;
}

const ProductListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("http://localhost:8000/api/product");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        // Map API response `_id` to `id` for consistency
        const mappedData = data.map((product: any) => ({
          id: product._id,
          name: product.name,
          weight: product.weight || "",
          price: product.price || 0,
          imageUrl: product.image || "",
          category: product.category || "",
        }));
        setProducts(mappedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ฟังก์ชันสำหรับเปลี่ยนหมวดหมู่
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const handleSearch = (query: string) => {
    setSelectedCategory("ทั้งหมด");
    setSearchQuery(query); // อัปเดตคำค้นหา
  };

  // กรองสินค้า
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "ทั้งหมด" ||
        product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex pt-24">
      <Sidebar
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
      />
      <main className="w-3/4 p-4">
        {loading ? (
          <p>กำลังโหลดสินค้า...</p>
        ) : error ? (
          <p className="text-red-500">เกิดข้อผิดพลาด: {error}</p>
        ) : (
          <>
            <h1 className="mb-4 text-xl font-bold">
              {filteredProducts.length} รายการในหมวดหมู่:{" "}
              {searchQuery ? searchQuery : selectedCategory}
            </h1>

            <div className="grid grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <Link
                  to={`/products/${product.id}`} // Corrected frontend route
                  key={product.id}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    weight={product.weight}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    category={product.category}
                  />
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ProductListPage;
