import ACETLogo from '../../assets/image/vector/logo acet 2025 w title.svg'
import bgImg from '../../assets/image/webp/innovation center.webp'

export default function Footer() {
    return(
        <div className="Footer">
            <div className="grid grid-cols-1 grid-rows-4 text-color-light py-16 px-16 font-Niradei  gap-12
            md:grid-cols-4 md:grid-rows-1" style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition:'center', backgroundColor: '#12284CC0', backgroundBlendMode: "multiply"}}>
                <img src={ACETLogo} alt="Logo ACET" />
                <div>
                    <h1 className='text-header-1 text-accent uppercase md:text-xl mb-2'>IDRI</h1>
                    <ul>
                        <li><a href="" className='hover:text-accent'>Home</a></li>
                        <li><a href="" className='hover:text-accent'>About</a></li>
                        <li><a href="" className='hover:text-accent'>Research</a></li>
                        <li><a href="" className='hover:text-accent'>Innovation</a></li>
                        <li><a href="" className='hover:text-accent'>Events</a></li>
                    </ul>
                </div>
                
                <div>
                    <h1 className='text-header-1 text-accent uppercase md:text-xl mb-2'>ACET</h1>
                    <ul>
                        <li><a href="" className='hover:text-accent'>Home</a></li>
                        <li><a href="" className='hover:text-accent'>About</a></li>
                        <li><a href="" className='hover:text-accent'>Submission</a></li>
                        <li><a href="" className='hover:text-accent'>Publication</a></li>
                        <li><a href="" className='hover:text-accent'>Agenda</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-header-1 text-accent uppercase md:text-xl mb-2'>Contact</h1>
                    <ul>
                        <li><a href="mailto:acet@cadt.edu.kh" className='hover:text-accent'><span className='font-bold ' target="_blank">Email: </span>acet@cadt.edu.kh</a></li>
                        <li><a href="tel:+85510340000" target="_blank" className='hover:text-accent'><span className='font-bold '>Phone:</span> +855 10 340 000</a></li>
                        <li><a href="https://maps.app.goo.gl/6AgTktP5GkTLgsVJ7" target="_blank" className='hover:text-accent'><span className='font-bold '>Address:</span> National Road 6A, Kthor, Prek Leap Chroy ​Changvar, Phnom Penh, Cambodia</a></li>
                    </ul>
                </div>
                
            </div>
            <div className='copyright p-4 bg-accent'>
                <h1 className='text-header-1 text-color-light md:text-xl md:mx-16'>IDRI @2025 All Rights Reserved</h1>
            </div>
        </div>  
    )
}