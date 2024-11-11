import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-fixed bg-cover bg-center min-h-screen min-w-screen"
      style= {{ backgroundImage: `url('/src/assets/Rectangle 2.svg')` }}
    >
      <div className="bg-gray-100 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-center text-2xl font-bold mb-6">โปรดเลือกสินค้าที่คุณต้องการ</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">โปรดระบุใบชา</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/selectness" className="bg-white p-12 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-200">
            <img src="./src/assets/ชาเขียว.jpg" alt="ชาเขียว" className="w-[185px] h-[96.39px] object-cover rounded mb-2" />
              <p className="text-center font-medium">ชาเขียว</p>
            </Link>
            <Link to="/selectness" className="bg-white p-12 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-200">
            <img src="./src/assets/ชาดำ.jpg" alt="ชาดำ" className="w-[185px] h-[96.39px] object-cover rounded mb-2" />
              <p className="text-center font-medium">ชาดำ</p>
            </Link>
            <Link to="/selectness" className="bg-white p-12 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-200">
            <img src="./src/assets/ชาอู่หลง.jpg" alt="ชาอู่หลง" className="w-[185px] h-[96.39px] object-cover rounded mb-2" />
              <p className="text-center font-medium">ชาอู่หลง</p>
            </Link>
            <Link to="/selectness" className="bg-white p-12 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-200">
            <img src="./src/assets/ชาขาว.jpg" alt="ชาขาว" className="w-[185px] h-[96.39px] object-cover rounded mb-2" />
              <p className="text-center font-medium">ชาขาว</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">ผลิตภัณฑ์สำเร็จรูป</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/start" className="bg-white p-12 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-200">
            <img src="./src/assets/finishedProduct.webp" alt="ชาเบลนด์สำเร็จรูปแบบชง" className="w-[185px] h-[96.39px] object-cover rounded mb-2" />
              <p className="text-center font-medium">ชาเบลนด์สำเร็จรูปแบบชง</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Start;