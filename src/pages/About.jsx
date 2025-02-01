import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At <strong>protien<sup>+</sup></strong>, we believe that proper nutrition is the cornerstone of a healthy and active lifestyle. 
                We’re a passionate team of fitness enthusiasts, nutrition experts, and innovators dedicated to creating premium 
                protein products that empower you to achieve your health and fitness goals..</p>

              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is simple: to provide high-quality, science-backed protein solutions 
              that fit seamlessly into your lifestyle. Whether you're an athlete pushing limits, 
              a gym-goer striving for progress, or someone seeking a healthier routine,
               we’re here to support your journey every step of the way.</p>

                <p>Our Vision
                To create a world where achieving your health and fitness goals is not just a dream but a sustainable lifestyle.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>Premium Ingredients: We source only the finest, cleanest ingredients to ensure optimal performance and taste.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Variety for Every Goal:</b>
            <p className=' text-gray-600'>From whey and plant-based proteins to ready-to-drink shakes and snacks, we’ve got something for everyone.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Commitment to Quality:</b>
            <p className=' text-gray-600'>Our products are rigorously tested for safety, purity, and efficacy.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
