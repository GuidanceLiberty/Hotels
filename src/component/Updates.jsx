import { RiArrowRightLine, RiRestaurantFill } from '@remixicon/react'
import update_1 from '../assets/images/update-3.jpg'
import update_2 from '../assets/images/update-4.jpg'
import update_3 from '../assets/images/update-5.jpg'

const Updates = () => {
  return (
    <section className='steps mt-10 relative z-20 bg-white'>

        <div className="">
            <h1 className=' flex items-center justify-center font-bold text-sm  text-accent'>STAY UPDATED</h1>
            <h2 className=' flex items-center justify-center font-semibold text-4xl'>Latest News</h2>
        </div> 


    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">

            <div className="w-full h-[600] relative overflow-hidden rounded-2xl shadow-lg">
                <div className="">
                    <img src={update_1} alt="holiday escape" className='w-full h-full object-cover' />
                </div>

                <h1 className=' font-semibold mt-2 ml-4'>Transforming Common Spaces in Modern Hotels</h1>
                <h2 className='mt-3 ml-4 text-gray-600 text-sm mb-4'>With style and grace, hotels redefine, Shared spaces that feel warm, not just fine. From lobbies to lounges, modern and bright, Where comfort and community both unite.</h2>
            </div>


            <div className="w-full h-[600] relative overflow-hidden rounded-2xl shadow-lg">
                <div className="mb-0 pb-0">
                    <img src={update_2} alt="holiday escape" className='w-full h-full object-cover' />
                </div>

                <h1 className=' font-semibold mt-2 ml-4'>Innovative Marketing Strategies for Boutique Hotels</h1>
                <h2 className='mt-3 ml-4 text-gray-600 text-sm mb-6'>Crafting stories that guests adore, Beyond the stay, they offer more. With charm and voice that truly sells, Boutique hotels weave magic well.</h2>
            </div>


            <div className="w-full h-[600] relative overflow-hidden rounded-2xl shadow-lg">
                <div className="mb-0 pb-0">
                    <img src={update_3} alt="holiday escape" className='w-full h-full object-cover' />
                </div>

                <h1 className=' font-semibold mt-2 ml-4'>Hotels are Adapting to Modern Traveler Preferences</h1>
                <h2 className='mt-3 ml-4 text-gray-600 text-sm mb-8'>From smart tech rooms to eco flair, Hotels now show they truly care. Personal touches, flexible stays, Shaping journeys in thoughtful ways</h2>
            </div>

        </div>

        
    
                    
        
    </section>
  )
}

export default Updates
