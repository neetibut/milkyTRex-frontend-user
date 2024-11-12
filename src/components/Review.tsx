import React from "react";

const Review = () => {
  return (
    <>
    <div className="bg-slate-300 pb-8">
      <div className="bg-slate-600 w-full h-[70px] flex items-center justify-center py-4 text-white text-xl font-semibold">
        รีวิวลูกค้า
      </div>
      
      <div className="mt-8 overflow-x-auto flex justify-center">
        <div className="flex space-x-6 justify-center items-center">
          
          {/* ส่วนของโปรไฟล์ 1 */}
          <div className="flex flex-col space-y-6 p-6 bg-gray-100 rounded-xl shadow-lg max-w-xs w-full">
            <div className="flex items-center space-x-6">
              <div className="border-4 border-red-400 rounded-full overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjT6GQmlhJbTxGAZJMqjF6OiK9wdRPskxMg&s"
                  className="w-20 h-20 object-cover"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <div className="font-bold text-lg text-gray-800">Name</div>
                <div className="flex items-center space-x-2">
                  <div className="text-gray-600 text-base font-bold">Rate</div>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.M0WPNerld3eAHZI5ojjmtgHaCt&pid=Api&P=0&h=220"
                    className="w-10 h-6 object-contain"
                    alt="rating"
                  />
                </div>
              </div>
            </div>
            <div className="text-gray-800 text-lg">
              "ลองให้ KOPH แนะนำกาแฟให้ ใช้เวลาไม่ถึง 1 นาทีก็ได้กาแฟที่ถูกใจ
              <br />
              ไม่ต้องเสียเวลาไปเดินเลือกซื้อเหมือนเมื่อก่อน"
            </div>
          </div>
          
          {/* ส่วนของโปรไฟล์ 2 */}
          <div className="flex flex-col space-y-6 p-6 bg-gray-100 rounded-xl shadow-lg max-w-xs w-full">
            <div className="flex items-center space-x-6">
              <div className="border-4 border-red-400 rounded-full overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjT6GQmlhJbTxGAZJMqjF6OiK9wdRPskxMg&s"
                  className="w-20 h-20 object-cover"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <div className="font-bold text-lg text-gray-800">Name</div>
                <div className="flex items-center space-x-2">
                  <div className="text-gray-600 text-base font-bold">Rate</div>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.M0WPNerld3eAHZI5ojjmtgHaCt&pid=Api&P=0&h=220"
                    className="w-10 h-6 object-contain"
                    alt="rating"
                  />
                </div>
              </div>
            </div>
            <div className="text-gray-800 text-lg">
              "ลองให้ KOPH แนะนำกาแฟให้ ใช้เวลาไม่ถึง 1 นาทีก็ได้กาแฟที่ถูกใจ
              <br />
              ไม่ต้องเสียเวลาไปเดินเลือกซื้อเหมือนเมื่อก่อน"
            </div>
          </div>
  
          {/* ส่วนของโปรไฟล์ 3 */}
          <div className="flex flex-col space-y-6 p-6 bg-gray-100 rounded-xl shadow-lg max-w-xs w-full">
            <div className="flex items-center space-x-6">
              <div className="border-4 border-red-400 rounded-full overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjT6GQmlhJbTxGAZJMqjF6OiK9wdRPskxMg&s"
                  className="w-20 h-20 object-cover"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <div className="font-bold text-lg text-gray-800">Name</div>
                <div className="flex items-center space-x-2">
                  <div className="text-gray-600 text-base font-bold">Rate</div>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.M0WPNerld3eAHZI5ojjmtgHaCt&pid=Api&P=0&h=220"
                    className="w-10 h-6 object-contain"
                    alt="rating"
                  />
                </div>
              </div>
            </div>
            <div className="text-gray-800 text-lg">
              "ลองให้ KOPH แนะนำกาแฟให้ ใช้เวลาไม่ถึง 1 นาทีก็ได้กาแฟที่ถูกใจ
              <br />
              ไม่ต้องเสียเวลาไปเดินเลือกซื้อเหมือนเมื่อก่อน"
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </>
  
  
  );
};

export default Review;
