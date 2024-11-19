import React from "react";

const Homebanner = () => {
  return (
    <div className="h-full w-full flex flex-col px-[45px] py-[25px] gap-5 md:flex-row  text-xl space-y-2.5 md:space-y-0 md:space-x-2.5 ">
      {/* Left Section */}
      <div className="w-full h-full flex flex-col gap-5  md:w-2/3  space-y-2.5 ">
        <div className="grid grid-cols-2 gap-5 h-full">
          {/* Box 1 */}
          <div className="h-full bg-green-300   p-4 pr-0 pb-0 flex flex-col justify-between shadow-md ">
            <p className="text-white font-semibold">ชิมชาใน ขนาดทดลอง 40 ก.</p>
            <img
              src="src/assets/green-tea.png"
              className="h-[230px] ml-auto"
              alt="Sample tea 40g"
            />
          </div>
          {/* Box 2 */}
          <div className=" h-full bg-green-300   p-4 pr-0 pb-0 flex flex-col justify-between shadow-md ">
            <p className="text-white font-semibold">
              คัดสรรชาใหม่ๆ ให้คุณชิมไม่มีเบื่อ
            </p>
            <img
              src="/src/assets/glass.png"
              className=" ml-auto mt-auto"
              alt="Curated tea selection"
            />
          </div>
        </div>
        {/* Bottom Row */}
        <div className=" h-full bg-green-300 flex-1  p-4 pb-0 flex flex-col justify-between shadow-md ">
          <p className="text-white font-semibold">4 โรงอบในกล่องเดียว</p>
          <img
            src="/src/assets/tea.png"
            className="ml-auto mt-auto"
            alt="4 tea packages"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col  w-full h-auto md:w-1/3  bg-green-300  p-0  justify-between shadow-md  ">
        <p className="text-white font-semibold">
          แนะนำชาให้ คุณโดยเฉพาะ ใน 1 นาที
        </p>
        <img
          src="/src/assets/phone.png"
          className=" ml-auto mt-auto"
          alt="Personalized tea recommendation"
        />
      </div>
    </div>
  );
};

export default Homebanner;
