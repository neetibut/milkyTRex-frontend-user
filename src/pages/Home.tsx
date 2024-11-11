import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div
        className="flex flex-col justify-center pl-20 bg-fixed bg-cover bg-center   min-h-screen min-w-screen     "
        style={{ backgroundImage: `url('/src/assets/Rectangle 2.svg')` }}
      >
        <div className="me-8 flex flex-col text-left sm:justify-center">
          <h1 className="text-xl w-37 font-semibold  text-white ">
            อยากรู้ไหมว่าคุณเหมาะกับชาแบบไหน ?
          </h1>
          <br />
          <br />
          <h1 className="text-xl min-w-56 font-semibold  text-white ">
            ให้ MILKY TEA-REX แนะนำให้ คุณใช้เวลาเพียง 1 นาทีเท่านั้น
          </h1>
          <br />
          <Link to="/start">
            <button className="px-4 py-2 rounded-full bg-red-500 text-white w-28 h-10">
              เริ่มเลย
            </button>
          </Link>
          <br />
          <br />
          <div className="flex items-center text-white underline">
            <img
              src="/src/assets/ของขวัญ.svg"
              alt="gift icon"
              className="mr-2 w-6 h-6"
            />
            <a href='#'>แด่คนพิเศษในแบบคุณ</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home