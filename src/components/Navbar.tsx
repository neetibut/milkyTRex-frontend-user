import React, { useState } from 'react';
import AutoMate from '../pages/AutoMate';

const Navbar : React.FC = () => {
  const [showAutoMate, setShowAutoMate] = useState(false);

  const toggleAutoMate = () => {
    setShowAutoMate(!showAutoMate);
  };

  return (
    <div className='bg-black'> 
    {/* ส่วนของ Nav Bar */}
  
    <div className="flex justify-between items-center bg-white text-black px-6 py-2 rounded-b-xl shadow-lg">
      <div className='flex flex-row'>
        <p className="text-2xl font-bold">Milky-Tea-Rex</p>
        <div>
          <ul className="flex gap-6 text-lg px-4 py-1">
            <li className="hover:text-gray-400 cursor-pointer">SampleBox</li>
            <li className="hover:text-gray-400 cursor-pointer">Shop</li>
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
          </ul>
        </div>
      </div>

      {/* เมนูต่างๆ */}
      <div>
        <ul className="flex gap-6 text-lg">
          {/* ปุ่ม "กาแฟของฉัน" เป็นปุ่มสีแดง */}
          {/* <li className="hover:bg-red-600 cursor-pointer p-4 bg-red-500 text-white rounded-md transition-colors duration-300">
             กาแฟของฉัน
          </li> */}
          {/* ส่วนของ Sign In/Sign Up */}
        </ul>
        <ul className="flex justify-end gap-6 text-gray-900">
          <li className="font-semibold hover:text-gray-300 cursor-pointer">
          {/* เมื่อคลิกไอคอน Login/Signup จะแสดงหน้า AutoMate */}
            <img 
              src="https://icon-library.com/images/login-icon-images/login-icon-images-0.jpg" 
              className='w-8 h-8' 
              onClick={toggleAutoMate}
              alt="Login/Signup"
            />
          </li>
          <li className="font-semibold hover:text-gray-300 cursor-pointer">
            <i className="fa-solid fa-cart-shopping w-8 h-8 pt-2"></i>
          </li>
        </ul>
      </div>      
      <li className="hover:text-gray-400 cursor-pointer py-4">
        <img src="https://icon-library.com/images/login-icon-images/login-icon-images-0.jpg" className='w-8 h-8' />
      </li>
      <li className="hover:text-gray-400 cursor-pointer flex flex-row py-4">
      
        <i className="fa-solid fa-cart-shopping w-8 h-8 pt-2"></i>
      </li>
    </div>

    {/* การแสดงผล AutoMate เป็นโมดอลหรือหน้าต่าง overlay */}
    {showAutoMate && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
          <button 
            onClick={toggleAutoMate} 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
          <AutoMate
            onLogin={(credentials) => console.log("Logging in with:", credentials)}
            onSignUp={(userData) => console.log("Signing up with:", userData)}
          />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar

// https://tse3.mm.bing.net/th?id=OIP.Ww1Niq2gmBPFhF0h1wc4IQHaHa&pid=Api&P=0&h=220
// https://tse2.mm.bing.net/th?id=OIP.36W6g6n6PVVHU4tJDXm43AHaHK&pid=Api&P=0&h=220