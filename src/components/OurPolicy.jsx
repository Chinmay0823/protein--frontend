import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-4 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Quality Assurance" />
        <p className='font-semibold'>Authenticity Guarantee</p>
        <p className='text-gray-400'>100% genuine, lab-tested protein supplements.</p>
      </div>

      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Freshness & Quality" />
        <p className='font-semibold'>Freshness & Quality Assurance</p>
        <p className='text-gray-400'>Premium-quality ingredients with strict quality control.</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Expert Support" />
        <p className='font-semibold'>Expert Support & Guidance</p>
        <p className='text-gray-400'>Certified nutritionists available for personalized support.</p>
      </div>

    </div>
  );
}

export default OurPolicy;
