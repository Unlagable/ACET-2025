import grBgBoxSm from '../../assets/image/vector/gradient bg sm.svg'
import grBgBoxLg from '../../assets/image/vector/gradient bg big.svg'
import AcetLogo from '../../assets/image/vector/logo acet 2025 w title.svg'
import brandElem from '../../assets/image/acet element.png'
import calendarLogo from '../../assets/image/webp/Calendar.webp'


const Hero = () =>  {  
    return (
        
        <div className='bg-primary md:h-screen font-Niradei relative '>

            <img src={grBgBoxSm} alt="" className='absolute h-sm bottom-0'/>
            <img src={grBgBoxLg} alt=""  className='absolute h-screen right-0 bottom-0' />
            
            {/* top brand elements */}
            {/* <img src={brandElem} alt="" className='absolute w-64 top-18'/>
            <img src={brandElem} alt="" className='absolute w-42 left-28 top-18'/>
            <img src={brandElem} alt="" className='absolute w-30 left-48 top-18'/> */}
            <img src={brandElem} alt="" className='absolute w-48 top-18'/>
            <img src={brandElem} alt="" className='absolute w-30 left-22 top-18'/>
            <img src={brandElem} alt="" className='absolute w-20 left-37 top-18'/>
            
            {/* bottom brand elements */}
            <img src={brandElem} alt="" className='absolute w-64 right-0 bottom-0 rotate-180'/>
            <img src={brandElem} alt="" className='absolute w-42 right-28  bottom-0 rotate-180'/>
            <img src={brandElem} alt="" className='absolute w-30 right-48 bottom-0 rotate-180'/>
        
            {/* brand Logo */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>

                <div className='relative flex items-center justify-center w-auto'>
                    <img src={AcetLogo} alt="ACET 2025 Logo" className='w-90 h-100'/>
                    <div className='h-50 md:w-[2px]  bg-white' ></div>
                    <div>
                        <p className='text-white md:ml-4 font-Niradei font-bold text-4xl md:w-94 leading-[120%]' >Connecting <span className='text-accent'>ASEAN</span> Researchers for Digital Research</p>
                        <div className='relative flex space-x-2 h-auto mt-4'>
                            <img src={calendarLogo} alt="" className='w-8 h-full ml-4' />
                            <p className='text-accent flex font-bold items-center text-2xl'>November 13-14, 2025</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero