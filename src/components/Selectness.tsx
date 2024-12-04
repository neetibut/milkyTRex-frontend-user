import React from 'react';
import { Link } from 'react-router-dom';

const Selecctness = () => {
  const experSelecctness = [
    {
      id: 'beginner',
      icon: '👉',
      title: 'มือใหม่',
      description: 'ฉันพึ่งเริ่มดื่มชาไม่นาน และกำลังหาสิ่งที่ใช่สำหรับฉัน',
      link: '/beginner'
    },
    {
      id: 'intermediate',
      icon: '✌️',
      title: 'มือสมัครเล่น',
      description: 'ฉันเคยดื่มมาบ้าง และมีกลิ่นที่ชอบ',
      link: '/intermediate'
    },
    {
      id: 'advanced',
      icon: '👍',
      title: 'มือดี',
      description: 'ฉันเริ่มดื่มชามาสักพักแล้ว และมีรส , กลิ่น ประจำอยู่แล้ว',
      link: '/advanced'
    },
    {
      id: 'expert',
      icon: '🤘',
      title: 'มือโปร',
      description: 'ฉันดื่มชา และเบลนด์ชาเป็นประจำ',
      link: '/expert'
    }
  ];

  return (
    <div 
      className="flex flex-col justify-center items-center bg-fixed bg-cover bg-center min-h-screen min-w-screen"
      style={{ backgroundImage: 'url(/api/placeholder/1920/1080)' }}
    >
      <div className="bg-gray-100 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-center text-2xl font-bold mb-6">
          คุณมีประสบการณ์ในระดับไหน?
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">ระดับประสบการณ์</h2>
          <div className="grid grid-cols-2 gap-4">
            {experSelecctness.map((option) => (
              <Link 
                key={option.id}
                to={option.link}
                className="bg-white p-6 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-200 text-left"
              >
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-[185px] h-[96.39px] object-cover rounded mb-2"
                />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{option.icon}</span>
                  <h3 className="font-semibold">{option.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{option.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="text-center">
          <button
            onClick={() => console.log('Selected option: skip')}
            className="inline-block px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
          >
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selecctness;