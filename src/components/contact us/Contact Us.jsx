import brandElementsGroup from '../../assets/image/webp/acet group.webp'
import phoneIcon from '../../assets/image/webp/phone icon.webp'
import EnvelopeIcon from '../../assets/image/webp/envelope icon.webp'


export default function ContactUs () {

    const handleClick = (input) => {
        window.location.href = input
    }


    return(
        <div className="Contact Section bg-color-light px-4 py-8 md:mx-16 " id='Contact'>
            <div className='mobile-screen-size md:hidden'>
                <h1 className="text-primary text-header-1 uppercase">CONTACT US</h1>
                <div className="grid grid-cols-3 gap-0">
                    <div className="col-span-2 md:col-span-1 capitalize">
                        <p>For any addition information please contact us, We’ll try our best to resolve any question</p>

                    </div>
                    <div>
                        <img src={brandElementsGroup} alt="" style={{opacity: "50%"}}/>
                    </div>
                </div>

                <div className='card-number mt-8'>
                    <div className='grid grid-cols-2 gap-2 '>
                        <div className='border-1 border-neutral-800 flex items-center justify-center flex-col py-4 ' onClick={() => handleClick("tel:+88510340000")}>
                            <img src={phoneIcon} alt="Smart Phone Icon" className='h-20'/>
                            <h2 className='h-full' >NUMBER</h2>
                            <a href="tel:+88510340000" className='hover:text-blue-800'>+885 10 340 000</a>
                        </div>
                        <div className='border-1 border-neutral-800 flex items-center justify-center flex-col py-4' onClick={() => handleClick("mailto:acet@cadt.edu.kh")}>
                            <img src={EnvelopeIcon} alt="Envelope Icon" className='h-20'/>
                            <h2>EMAIL</h2>
                            <a href="mailto:acet@cadt.edu.kh">acet@cadt.edu.kh</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md-screen-up hidden md:block '>
                <h1 className="text-primary text-header-1 uppercase">CONTACT US</h1>
                <div className='grid grid-cols-4 gap-8'>
                    <div>
                        <img src={brandElementsGroup} alt="" style={{opacity: "50%"}} className='md:h-35 xl:h-50'/>
                    </div>
                    <p>For any addition information please contact us, We’ll try our best to resolve any question</p>
                    <div className='border-1 border-neutral-800 flex items-center justify-center flex-col py-4 group hover:cursor-pointer' onClick={() => handleClick("tel:+88510340000")}>
                            <img src={phoneIcon} alt="Smart Phone Icon" className='h-15 group-hover:h-20'/>
                            <h2 className='h-auto group-hover:text-accent font-bold' >NUMBER</h2>
                            <a href="tel:+88510340000" className='group-hover:text-blue-800'>+885 10 340 000</a>
                    </div>
                    <div className='border-1 border-neutral-800 flex items-center justify-center flex-col py-4 group hover:cursor-pointer' onClick={() => handleClick("mailto:acet@cadt.edu.kh")}>
                            <img src={EnvelopeIcon} alt="Envelope Icon" className='h-15 group-hover:h-20'/>
                            <h2 className='group-hover:text-accent font-bold'>EMAIL</h2>
                            <a href="mailto:acet@cadt.edu.kh" className='group-hover:text-blue-800'>acet@cadt.edu.kh</a>
                        </div>
                </div>
            </div>

        </div>
    )
}