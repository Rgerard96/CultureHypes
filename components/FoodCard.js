import React from 'react'

export default function FoodCard() {
    return (
        <div
        className='rounded-lg shadow-md cursor-pointer overflow-hidden'
        onClick={() => router.push('/food')}
      >
        <div
          className='h-64 sm:h-56 lg:h-48 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: 'url(' + '/images/img.jpg' + ')' }}
        ></div>
        <div className='p-3'>
          <div className='font-semibold text-lg mb-2'>Pork tenderloin sandwich</div>
          <div className='flex justify-between items-center'>
           <p className='font-semibold text-primary'>€ 15,00</p>
           <div className='p-1 rounded-lg border'>Afhalen en Bezorgen</div>
          </div>
        </div>
      </div>
    )
}
