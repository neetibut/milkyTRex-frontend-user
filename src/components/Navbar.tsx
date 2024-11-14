

const Navbar = () => {
    return (
        <div className='bg-black fixed w-full'> 
          {/* ส่วนของ Sign In/Sign Up */}
          {/* <div className="px-4 py-2">
            <ul className="flex justify-end gap-6 text-gray-900">
              <li className="font-semibold hover:text-gray-300 cursor-pointer">Sign in</li>
              <li className="font-semibold hover:text-gray-300 cursor-pointer">Sign up</li>
            </ul>
          </div> */}

          {/* ส่วนของ Nav Bar */}
          
          <div className="flex justify-between items-center bg-white text-black px-6 py-2 shadow-lg">
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
                <li className="hover:text-gray-400 cursor-pointer py-4">
                  <img src="https://icon-library.com/images/login-icon-images/login-icon-images-0.jpg" className='w-8 h-8' />
                </li>
                <li className="hover:text-gray-400 cursor-pointer flex flex-row py-4">
                
                  <i className="fa-solid fa-cart-shopping w-8 h-8 pt-2"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default Navbar

// https://tse3.mm.bing.net/th?id=OIP.Ww1Niq2gmBPFhF0h1wc4IQHaHa&pid=Api&P=0&h=220
// https://tse2.mm.bing.net/th?id=OIP.36W6g6n6PVVHU4tJDXm43AHaHK&pid=Api&P=0&h=220