// src/components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  const categories = ["ชาเขียว", "ชาดำ", "ชาขาว", "ชาผู่หลง"];

  return (
    <aside className="w-1/4 p-4 border-r">
      <h2 className="mb-4 text-lg font-semibold">ค้นหา</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <button className="w-full text-left p-2 border rounded-md">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
