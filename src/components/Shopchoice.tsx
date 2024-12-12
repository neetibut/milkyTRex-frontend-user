import React, { useState } from "react";
import ButtonSelect from "./ButtonSelect";
import ProductCart, { CartItem } from "./ProductCart";
import { Product } from "../database/teaProducts";
interface ShopchoiceProps {
  product: Product;
}

const Shopchoice: React.FC<ShopchoiceProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      imageUrl: product.imageUrl,
    };
    addToCart(newItem);
    setIsCartOpen(true);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="border-2 w-[300px]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col border-2 w-[300px] p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="mt-2">ราคา: ฿{product.price}</p>
        <div className="flex items-center mt-4">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-8 h-8 bg-white text-black border-2 border-black rounded-full"
          >
            -
          </button>
          <span className="mx-4 text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-8 h-8 bg-white text-black border-2 border-black rounded-full"
          >
            +
          </button>
        </div>
        <ButtonSelect onClick={handleAddToCart} />
      </div>
      <ProductCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
};

export default Shopchoice;
