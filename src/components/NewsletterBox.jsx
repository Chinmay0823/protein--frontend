import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='text-center p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-3xl font-semibold text-gray-900'>Subscribe & Get 20% Off</h2>
      <p className='text-gray-500 mt-3 max-w-md mx-auto'>
        Stay updated with our latest high-quality protein products, exclusive discounts, and nutrition tips.
      </p>
      <form 
        onSubmit={onSubmitHandler} 
        className='w-full sm:w-2/3 lg:w-1/2 flex items-center gap-3 mx-auto mt-6 bg-white border rounded-lg overflow-hidden shadow-sm p-2'
      >
        <input 
          className='w-full flex-1 px-3 py-2 outline-none text-gray-700' 
          type='email' 
          placeholder='Enter your email' 
          required
        />
        <button 
          type='submit' 
          className='bg-black text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
