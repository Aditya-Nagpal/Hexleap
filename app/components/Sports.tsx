import React from 'react'
import LVA1 from '../Assets/Images/Las Vegas Aviators.png'
import SRC1 from '../Assets/Images/Sacrimento River Cats.png'
import NJD1 from '../Assets/Images/New Jersey Devils.png'
import AD from '../Assets/Images/Advertisement.png'
import Image from 'next/image'

export default function Sports() {
  return (
    <main className='w-4/5 flex flex-col justify-center mb-32'>
      <div>
        <h2 className='text-2xl font-bold w-fit border-b-4 border-b-blue-400'>Sports</h2>
      </div>
      <div className='flex justify-between sports-cards-container mt-6 mb-12'>

        <div>
          <div className='max-h-96'>
            <Image layout='string' src={SRC1} alt='Sacremento River Cats' className='h-full w-full' />
          </div>
          <div className='pt-2'>
            <p className='text-base font-medium pb-4'>Sacremento River Cats</p>
            <ul>
              <li>
                <p>Total Events</p>
                <p>48 Events</p>
              </li>
              <li>
                <p>Sport</p>
                <p>Baseball</p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className='max-h-96'>
            <Image layout='string' src={LVA1} alt='Sacremento River Cats' className='h-full w-full' />
          </div>
          <div className='pt-2'>
            <p className='text-base font-medium pb-4'>Las Vegas Aviatars</p>
            <ul>
              <li>
                <p>Total Events</p>
                <p>48 Events</p>
              </li>
              <li>
                <p>Sport</p>
                <p>Baseball</p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className='max-h-96'>
            <Image layout='string' src={NJD1} alt='Sacremento River Cats' className='h-full w-full' />
          </div>
          <div className='pt-2'>
            <p className='text-base font-medium pb-4'>New Jersey Devils</p>
            <ul>
              <li>
                <p>Total Events</p>
                <p>48 Events</p>
              </li>
              <li>
                <p>Sport</p>
                <p>Baseball</p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className='max-h-96'>
            <Image layout='string' src={LVA1} alt='Sacremento River Cats' className='h-full w-full' />
          </div>
          <div className='pt-2'>
            <p className='text-base font-medium pb-4'>Las Vegas Aviatars</p>
            <ul>
              <li>
                <p>Total Events</p>
                <p>48 Events</p>
              </li>
              <li>
                <p>Sport</p>
                <p>Baseball</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='advertisement'>
            <div>
              <div className='max-h-48 relative'>
                <span className='absolute right-0 text-xs leading-5 text-white bg-black font-bold px-4 py-1'>Ad</span>
                <Image layout='string' src={AD} alt='Sacremento River Cats' className='h-full w-full' />
              </div>
              <div className='px-2 py-4'>
                <p className='font-semibold text-xl mb-2'>Advertisement title</p>
                <p className='font-normal text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
        </div>
      </div>
      <button id='see-more-button' className='text-white font-semibold text-sm mx-auto py-2.5 px-7 rounded'>See More</button>
    </main>
  )
}
