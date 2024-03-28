import Image from 'next/image'
import React from 'react'
import LVA2 from '../Assets/Images/LVA2.png'
import SRC2 from '../Assets/Images/SRC2.png'

export default function CollectionSpotlight() {
  return (
    <main className='cs-container w-4/5 flex flex-col items-center mb-12 dark:cs-container-dark py-12'>
      <h1 className='font-bold text-5xl text-center mb-6'>Collection Spotlight</h1>
      <p className='font-normal text-sm leading-6 text-center w-3/4 mb-12'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      <div className='w-full flex items-center justify-between'>

        <div className='shift-button ml-10'>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>

        <div className='flex justify-between w-4/6'>
          <div className='cs-card flex flex-col items-center'>
            <div>
                <Image src={LVA2} alt="Las Vegas Aviators" /> 
            </div>
            <div>
              <div>
                <p className='font-medium text-lg' style={{fontFamily: 'var(--font-poppins)'}}>Las Vegas Aviators</p>
                <p className='text-sm font-normal' style={{fontFamily: 'var(--font-poppins)'}}>OCT 15 | SUN | 4:30 PM</p>
                <p className='text-sm font-normal mx-auto' style={{color: '#525965'}}>Las Vegas Ballpark, Las Vegas, Nevada</p>
              </div>
            </div>
            <button>Take Flight Collection</button>
          </div>

          <div className='cs-card flex flex-col items-center'>
            <div>
                <Image src={SRC2} alt="Sacremento River Cats" /> 
            </div>
            <div>
              <div>
                <p className='font-medium text-lg' style={{fontFamily: 'var(--font-poppins)'}}>Sacremento River Cats</p>
                <p className='text-sm font-normal' style={{fontFamily: 'var(--font-poppins)'}}>OCT 15 | SUN | 4:30 PM</p>
                <p className='text-sm font-normal mx-auto' style={{color: '#525965'}}>Sutter Health Park, Sacremento, California</p>
              </div>
            </div>
            <button>Take Flight Collection</button>
          </div>

          <div className='cs-card flex flex-col items-center'>
            <div>
                <Image src={LVA2} alt="Las Vegas Aviators" /> 
            </div>
            <div>
              <div>
                <p className='font-medium text-lg' style={{fontFamily: 'var(--font-poppins)'}}>Las Vegas Aviators</p>
                <p className='text-sm font-normal' style={{fontFamily: 'var(--font-poppins)'}}>OCT 15 | SUN | 4:30 PM</p>
                <p className='text-sm font-normal mx-auto' style={{color: '#525965'}}>Las Vegas Ballpark, Las Vegas, Nevada</p>
              </div>
            </div>
            <button>Take Flight Collection</button>
          </div>
        </div>

        <div className='shift-button mr-10'>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>

      </div>
    </main>
  )
}
