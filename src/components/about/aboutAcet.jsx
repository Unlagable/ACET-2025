import './aboutAcet.css'
import ImageBanner from '../../assets/image/webp/about us figma.webp'
import ImageResearch from '../../assets/image/webp/Research.webp'
import ImageShare from '../../assets/image/webp/Share.webp'
import ImageConnect from '../../assets/image/webp/Connect.webp'
import brandElem from '../../assets/image/acet element.png'

const About = () =>  {  
    return (<>
        {/* about acet banner */}
        <div className=' h-auto mt-16 px-8 relative font-Niradei'>
            <img src={ImageBanner} alt="image of participants of ACET" className='Branding-shape w-full'/>
            <div className='absolute top-[60%] left-[10%] w-[80%]  leading-[120%] space-y-5' >
                <h1 className=' text-white text-[32px] uppercase font-bold' >About ACET</h1>
                <p className=' text-white text-[20px] leading-[130%]'>ASEAN Conference on Emerging Technologies (ACET) focuses on the latest research and Development in digital technology but more specifically on Natural Language Processing (NLP), Data Science, Networking & IoT, Artificial Intelligence (AI). ACET conference aims to connect researchers’ knowledge and Building applications for smarter societies.</p>

            </div>
        </div>
        
        {/* acet slogen */}
        <div className='px-8 mt-8 mb-16 '>
            <div class="grid grid-cols-3 gap-8">
                {/* Research */}
                <div class="h-[187px] relative">
                    <img src={ImageResearch} alt="" className='w-full h-full object-cover about-us-card-words ' />
                    <div className='bg-[#0F213E99] w-full h-full absolute inset-0 about-us-card-words'></div>
                    <h1 className='text-white text-[32px] uppercase font-bold absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 '>Research</h1>
                </div>
                {/* Share */}
                <div class="h-[187px] relative">
                    <img src={ImageShare} alt="" className='w-full h-full object-cover about-us-card-words ' />
                    <div className='bg-[#0F213E99] w-full h-full absolute inset-0 about-us-card-words'></div>
                    <h1 className='text-white text-[32px] uppercase font-bold absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 '>Share</h1>
                </div>
                {/* Connect */}
                <div class="h-[187px] relative">
                    <img src={ImageConnect} alt="" className='w-full h-full object-cover about-us-card-words ' />
                    <div className='bg-[#0F213E99] w-full h-full absolute inset-0 about-us-card-words'></div>
                    <h1 className='text-white text-[32px] uppercase font-bold absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 '>Connect</h1>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-8">
                <div className='relative h-36 '>
                    <img src={brandElem} alt="" className='absolute w-16 right-46 bottom-0 rotate-180 opacity-60'/>
                    <img src={brandElem} alt="" className='absolute w-24 right-34  bottom-0 rotate-180 opacity-60'/>
                    <img src={brandElem} alt="" className='absolute w-36 right-17 bottom-0 rotate-180 opacity-60'/>
                </div>
                <div className='col-span-2 text-white justify-center items-center flex text-justify font-[20px] leading-[140%]'>
                    <p>
                        We Bringing together researchers from local and international communities through a forum for academicians, professionals, and researchers to discuss and exchange research results, innovative ideas, and experiences, fostering advancements in the field.
                    </p>
                </div>
            </div>
        </div>


    </>
)}

export default About