// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TEA_CATEGORIES = [
  { path: '/products', name: 'ทั้งหมด' },
  { path: '/green-tea', name: 'ชาเขียว' },
  { path: '/black-tea', name: 'ชาดำ' },
  { path: '/white-tea', name: 'ชาขาว' },
  { path: '/oolong-tea', name: 'ชาอู่หลง' }
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-1/4 p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">ค้นหา</h2>
      <ul>
        {TEA_CATEGORIES.map((category) => (
          <li key={category.path} className="mb-2">
            <Link 
              to={category.path} 
              className={`
                text-blue-500 
                hover:underline 
                ${location.pathname === category.path ? 'font-bold text-blue-700' : ''}
              `}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;