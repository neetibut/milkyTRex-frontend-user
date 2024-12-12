
import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import { CartItem } from './ProductCart'; // นำเข้า CartItem เพื่อใช้ในการกำหนด type ของ cartItems

interface NavbarProps {
  cartItems: CartItem[]; // ประกาศว่า Navbar รับ prop ชื่อ cartItems
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>; // และ setCartItems
}

const Navbar: React.FC<NavbarProps> = ({ cartItems, setCartItems }) => {
    return (
        <div className='bg-black fixed w-full z-50'>
            <div className="flex justify-between items-center bg-white text-black px-6 py-2 shadow-lg">
                <div className='flex flex-row items-center'>
                    <Link to="/" className="text-2xl font-bold">Milky-Tea-Rex</Link>
                    <div>
                        <ul className="flex gap-6 text-lg px-4 py-1">
                            <li>
                                <Link
                                    to="/sample-box"
                                    className="hover:text-gray-400 cursor-pointer"
                                >
                                    SampleBox
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="hover:text-gray-400 cursor-pointer"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="hover:text-gray-400 cursor-pointer"
                                >
                                    Blog
                                </Link>
                            </li>
                            </ul>
                    </div>
                </div>

                <div>
                    <ul className="flex gap-6 text-lg items-center">
                        <li>
                            <Link
                                to="/login"
                                className="hover:text-gray-400 cursor-pointer py-4"
                            >
                                <img
                                    src="https://icon-library.com/images/login-icon-images/login-icon-images-0.jpg"
                                    alt="Login"
                                    className='w-8 h-8'
                                />
                            </Link>
                        </li>
                        <li>
                            {/* ส่ง cartItems และ setCartItems ไปที่ CartButton */}
                            <CartButton cartItems={cartItems} setCartItems={setCartItems} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
