import React from 'react';
import { Link } from 'react-router-dom';

const Selecct = () => {
  const experSelecct = [
    {
      id: 'Refreshing',
      icon: '🍋',
      title: 'Refreshing & Acidity',
      description: 'ความเข้มข้นของชาเบลนด์ ให้ความสดชื่น และกำลังหาสิ่งที่ใช่สำหรับฉัน',
      link: '/Refreshing',
    },
    {
      id: 'Clean',
      icon: '🍯',
      title: 'Clean & Sweet',
      description: 'ชาเบลนด์รสชาติสะอาด หวานละมุนบางๆ',
      link: '/Clean',
    },
    {
      id: 'Balanced',
      icon: '⚖️',
      title: 'Balanced',
      description: 'ชาเบลนด์รสชาติกำลังดี ทั้งเปรี้ยว หวาน เข้ม ในแก้วเดียว',
      link: '/Balanced',
    },
    {
      id: 'Relax',
      icon: '🍵',
      title: 'Relax',
      description: 'ชาเบลนด์ที่มีกลิ่น หอม ผ่อนคลาย',
      link: '/Relax',
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center bg-fixed bg-cover bg-center min-h-screen min-w-screen"
      style={{ backgroundImage: 'url(/api/placeholder/1920/1080)' }}
    >
      <div className="bg-gray-100 bg-opacity-90 p-10 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-center text-3xl font-bold mb-8">
          เริ่มง่ายๆ กับ ลักษณะชาที่คุณชอบ
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">ลักษณะชา</h2>
          <div className="grid grid-cols-2 gap-6">
            {experSelecct.map((option) => (
              <Link
                key={option.id}
                to={option.link}
                className="bg-white p-8 rounded shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 text-left"
              >
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-[220px] h-[120px] object-cover rounded mb-4"
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{option.icon}</span>
                  <h3 className="font-semibold text-lg">{option.title}</h3>
                </div>
                <p className="text-base text-gray-600">{option.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="flex justify-center items-center gap-80 mt-20">
          <button className="px-6 py-3 text-lg bg-gray-200 rounded-md hover:bg-gray-400 hover:scale-110 transition-transform duration-200">
            ย้อนกลับ
          </button>
          <button className="px-6 py-3 text-lg bg-gray-800 text-white rounded-md hover:bg-gray-700 hover:scale-110 transition-transform duration-200">
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selecct;
