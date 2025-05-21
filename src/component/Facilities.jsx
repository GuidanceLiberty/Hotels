import { RiArrowRightLine, RiBodyScanLine, RiBubbleChartLine, RiBuildingLine, RiCompasses2Line, RiDiscussLine, RiDoorOpenLine, RiEmotionHappyLine, RiFlowerLine, RiGroupLine, RiHeartPulseLine, RiLifebuoyLine, RiMagicLine, RiMegaphoneLine, RiMistLine, RiPresentationLine, RiRestaurant2Fill, RiRestaurant2Line, RiRestaurantFill, RiRunLine, RiShirtLine, RiToolsLine, RiTShirtLine, RiWaterFlashLine, RiWeightLine, RiWindyLine } from '@remixicon/react'
import React from 'react'


const Facilities = () => {
  return (
    <section className='steps mt-10 relative z-20 bg-zinc-600'> 
    <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-28">
          
            <div className="step_step text-center text-gray-300">
                <div className="flex justify-center mb-4 ">
                    <button className='btn_item btn-accent mx-auto'>
                        <RiRestaurantFill size={70} className='text-5xl text-white spinXY'  />
                    </button>
                </div>
                <h2 className='text-3xl mb-5 font-bold text-white'>Restaurant</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    Savor delicious moments at our Restaurant, your go-to spot for fresh, flavorful dishes all day long. Dine in or order to your room.
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </div>


            <div className="step_step text-center text-gray-300">
                <div className="flex justify-center mb-4 ">
                    <button className='btn_item btn-accent mx-auto'>
                        <RiLifebuoyLine size={70} className='text-5xl text-white spinZ'  />
                    </button>
                </div>
                <h2 className='text-3xl mb-5 font-bold text-white'>Swimming Pool</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    Dive into relaxation at our sparkling swimming pool — perfect for a refreshing dip, sun-soaked lounging, or just soaking up the good vibes!
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </div>


            <div className="step_step text-center text-gray-300">
                <div className="flex justify-center mb-4 ">
                    <button className='btn_item btn-accent mx-auto'>
                        <RiRunLine size={70} className='text-5xl text-white spinX'  />
                    </button>
                </div>
                <h2 className='text-3xl mb-5 font-bold text-white'>Fitness Center</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    Stay on track while you travel! Our fully equipped fitness center is open daily — perfect for a quick workout, a full session, or just getting your heart pumping.
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </div>


             <div className="step_step text-center text-gray-300">
                <div className="flex justify-center mb-4 ">
                    <button className='btn_item btn-accent mx-auto'>
                        <RiFlowerLine size={70} className='text-5xl text-white spinZ'  />
                    </button>
                </div>
                <h2 className='text-3xl mb-5 font-bold text-white'>Spa & Massage</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    Unwind, relax, and recharge at our spa — with calming massages and rejuvenating treatments designed to melt your stress away..
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </div>


            <div className="step_step text-center text-gray-300">
                <div className="flex justify-center mb-4 ">
                    <button className='btn_item btn-accent mx-auto'>
                        <RiPresentationLine size={70} className='text-5xl text-white spinX'  />
                    </button>
                </div>
                <h2 className='text-3xl mb-5 font-bold text-white'>Meeting Room</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    Host with confidence in our fully equipped meeting room — perfect for business gatherings, presentations, and private events, all in a comfortable and stylish setting.
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </div>


            <div className="step_step text-center text-gray-300 mb-44">
                <div className="flex justify-center mb-4 ">
                    <button className='btn_item btn-accent mx-auto'>
                        <RiShirtLine size={70} className='text-5xl text-white spinXY'  />
                    </button>
                </div>
                <h2 className='text-3xl mb-5 font-bold text-white'>Laundary Service</h2>
                <p className='mb-5 max-w-md mx-auto text-[1.1rem]'>
                    Need fresh clothes in a hurry? Our laundry service is fast, reliable, and ready to keep you looking your best during your stay!
                </p>
                <a href='#' className='font-medium text-[1rem] flex justify-center gap-x-2'>
                    Read more
                    <RiArrowRightLine size={15} className='text-accent' />
                </a>
            </div>
            
                      
        </div>
    </div> 
    </section>
  )
}

export default Facilities
