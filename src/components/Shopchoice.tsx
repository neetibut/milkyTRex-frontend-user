import React from 'react';
import { useState } from 'react';

function Shopchoice() {
  // กำหนด state สำหรับเลือก option
  const [selectedOption, setSelectedOption] = useState('option1');

  // ฟังก์ชันที่จัดการการเปลี่ยนแปลงค่าจาก select
  
  const handleChange = (event :any) => {
    setSelectedOption(event.target.value);
  };

  // ข้อความหรือข้อมูลที่จะแสดงขึ้นอยู่กับการเลือก
  let displayText;
  if (selectedOption === 'option1') {
    displayText = '125฿ | 100g';
  } else if (selectedOption === 'option2') {
    displayText = '250฿ | 200g';
  } else if (selectedOption === 'option3') {
    displayText = '375฿ | 300g';
  }

  const [point,setPoint]=useState(0)

  function increase(){
    
    let count = point +1
    setPoint(count)
  }
  function decrease(){

    let count = point-1
    if(count<0)
    {
        setPoint(0)
    }
    else {
        setPoint(count);  // ถ้าไม่, set ค่า point เป็น count ที่ลดลง
      }
  }

  return (
    <div className='flex justify-center'>
    <div className='flex flex-col  border-2 w-[300px] '>   
        
        <div className='flex pl-20'>
            Name
        </div>
        {/* แสดงผลข้อความเมื่อมีการเลือก */}
        <div>
      {  <p className='flex justify-start pl-20'>{displayText}</p>}    
      <select className="w-30 py-2 px-4 mt-4 mb-4 border-2 border-black rounded-lg text-lg"  onChange={handleChange} value={selectedOption}>
        <option value="">กรุณาเลือก</option>
        <option value="option1">100 g</option>
        <option value="option2">200 g</option>
        <option value="option3">300 g</option>
      </select>
      </div>
        <div className='flex flex-row justify-center'>
            <button onClick={increase}  className="w-8 h-8 px-2 bg-white text-black border-2 border-black font-bold rounded-full flex items-center justify-center">+</button>  
            <div className='px-8'> {point}</div>
            <button onClick={decrease}  className="w-8 h-8 bg-white text-black border-2 border-black font-bold rounded-full flex items-center justify-center">-</button>
        </div>
           
        
    </div>
    </div>
  );
}

export default Shopchoice;
