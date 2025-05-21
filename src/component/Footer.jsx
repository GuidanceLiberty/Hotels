import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinFill, RiStarFill, RiTwitterXFill, RiYoutubeFill } from '@remixicon/react'

const Footer = () => {
  return (
    <section className='footer bg-zinc-900 z-20  lg:mt-[10px]' id='services'>
        <div className="container mx-auto px-0">
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-[100x] lg:mb-[150px]">
                <div className="footer__item">

                        <div className='mb-2 text-lg text-center ml-16 m'>
                            <h2 className='font-bold text-white'>NEW-GUIDANCE</h2>
                            <p className='flex justify-between size-12 text-accent mx-auto'>
                              <RiStarFill/>
                              <RiStarFill/>
                              <RiStarFill/>
                              <RiStarFill/>
                              <RiStarFill/>
                            </p>
                       </div>

                       <ul className="text-white flex gap-[50px] justify-center lg:justify-start">
                        <li><a href='#'>
                            <RiFacebookCircleFill size={25} />
                        </a>
                        </li>

                        <li><a href='#'>
                            <RiYoutubeFill size={25} />
                        </a>
                        </li>

                        <li><a href='#'>
                            <RiLinkedinFill size={25} />
                        </a>
                        </li>

                        <li><a href='#'>
                            <RiInstagramFill size={25}/>
                        </a>
                        </li>

                        <li><a href='#'>
                            <RiTwitterXFill size={25}/>
                        </a>
                        </li>
                       
                        
                    </ul>
                </div>

                <div className="flex-1 flex flex-col lg:flex-row text-center lg:text-right gap-8 lg:gap-[100px] justify-end text-white">
                    <div className="footer__item mx-auto">
                        <h3 className='text-3xl mb-3'>Pages</h3>
                        <ul>
                            
                            <li>
                                <a href='#' className='!text-[16px]'>About Us</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Testimonials</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Our Works</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Blog</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__item mx-auto">
                        <h3 className='text-3xl mb-3'>Services</h3>
                        <ul>
                            
                            <li>
                                <a href='#' className='!text-[16px]'>Kitchen</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>BedRoom</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Livin Room</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>BathRoom</a>
                            </li>

                            <li>
                                <a href='#' className='!text-[16px]'>Others</a>
                            </li>   
                        </ul>
                    </div>

                    <div className="footer__item mx-w-[260px] mx-auto lg:mx-0 text-xl mb-3">
                        <h3 className='text-3xl mb-3'>Address</h3>
                        <div className="flex flex-col gap-2">
                            <p className='text-center ml-5'>
                                742 Evergreen Terrace Brooklyn, NY 11201
                            </p>
                            <p>Contact@interno.com</p>
                            <p>+234 911 252 4812</p>
                        </div>
                    </div>

                </div>

                
            </div>
        </div>
      
    </section>
  )
}

export default Footer
