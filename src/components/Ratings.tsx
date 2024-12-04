import React, { useState } from "react";

const RatingPage = () => {
  const [ratings, setRatings] = useState({
    healthy: 0,
    sweetness: 0,
    body: 0,
  });

  const handleRating = (category, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-fixed bg-cover bg-center min-h-screen min-w-screen"
      style={{ backgroundImage: 'url(/api/placeholder/1920/1080)' }} // เปลี่ยน URL ให้เป็นภาพที่ต้องการ
    >
      <div className="bg-gray-100 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-center text-2xl font-bold mb-10">
          เริ่มง่ายๆ กับ ลักษณะชาเบลนด์ที่คุณชอบ
        </h1>

        <div className="grid grid-cols-1 gap-8 mb-12">
          {[
            { label: "สุขภาพ", category: "healthy", translation: "Healthy" },
            { label: "ความหวาน", category: "sweetness", translation: "Sweetness" },
            { label: "ความเข้ม", category: "body", translation: "Body" },
          ].map(({ label, category, translation }) => (
            <div key={category} className="flex items-center justify-between">
              <div className="text-left w-36">
                <p className="text-lg font-medium">{label}</p>
                <p className="text-sm text-gray-500">{translation}</p>
              </div>
              <div className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    className={`w-12 h-12 text-3xl flex justify-center items-center rounded-full ${
                      ratings[category] >= value
                        ? "bg-yellow-400 text-white"
                        : "bg-gray-200 text-gray-400"
                    } hover:bg-yellow-500 hover:scale-105 transition-transform duration-200`}
                    onClick={() => handleRating(category, value)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8">
          <button className="px-6 py-3 bg-gray-300 rounded-md text-lg font-semibold hover:bg-gray-400 hover:scale-105 transition-transform duration-200">
            ย้อนกลับ
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-md text-lg font-semibold hover:bg-gray-700 hover:scale-105 transition-transform duration-200">
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
