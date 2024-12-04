import React, { useState } from 'react';
import ButtonSelect from './ButtonSelect';

// Define types for option values and display information
type OptionValue = 'option1' | 'option2' | 'option3' | '';
interface OptionInfo {
  label: string;
  price: number;
  weight: number;
}

// Mapping of option values to their details
const OPTION_DETAILS: Record<OptionValue, OptionInfo> = {
  'option1': { label: '100 g', price: 125, weight: 100 },
  'option2': { label: '200 g', price: 250, weight: 200 },
  'option3': { label: '300 g', price: 375, weight: 300 },
  '': { label: 'กรุณาเลือก', price: 0, weight: 0 }
};

const Shopchoice: React.FC = () => {
  // Typed state for selected option
  const [selectedOption, setSelectedOption] = useState<OptionValue>('option1');
  
  // Typed state for quantity
  const [quantity, setQuantity] = useState<number>(0);

  // Handle option selection with explicit typing
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as OptionValue);
  };

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Decrement quantity (prevent negative values)
  const decrementQuantity = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  // Get current option details
  const currentOption = OPTION_DETAILS[selectedOption];

  return (
    <div className='flex flex-row justify-center'>
      {/* Product Image */}
      <div className='border-2 w-[300px]'>
        <img 
          src='https://neramitcha.com/wp-content/uploads/2023/09/07-768x768.jpg'
          alt='Product'
          className='w-full h-auto'
        />
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-col border-2 w-[300px] p-4'>
          {/* Product Name */}
          <h2 className='text-lg font-bold pl-4 mb-2'>Product Name</h2>

          {/* Price and Weight Display */}
          <p className='pl-4 mb-2'>
            {currentOption.price}฿ | {currentOption.weight}g
          </p>

          {/* Option Selector */}
          <select 
            className="w-[calc(100%-2rem)] py-2 px-4 mt-2 mb-2 ml-4 border-2 border-black rounded-lg"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {Object.entries(OPTION_DETAILS)
              .filter(([key]) => key !== '')
              .map(([key, option]) => (
                <option key={key} value={key}>
                  {option.label}
                </option>
              ))
            }
          </select>

          {/* Quantity Control */}
          <div className='flex flex-row justify-center items-center space-x-4 mt-2'>
            <button 
              onClick={decrementQuantity}
              className="w-8 h-8 bg-white text-black border-2 border-black rounded-full"
            >
              -
            </button>
            <span className='text-lg'>{quantity}</span>
            <button 
              onClick={incrementQuantity}
              className="w-8 h-8 bg-white text-black border-2 border-black rounded-full"
            >
              +
            </button>
          </div>

          {/* Add to Basket Button */}
          <div className='ml-14 mt-4'>
            <ButtonSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopchoice;