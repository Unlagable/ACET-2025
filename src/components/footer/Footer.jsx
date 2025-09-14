import ACETLogo from '../../assets/image/vector/logo acet 2025 w title.svg'
import bgImg from '../../assets/image/webp/innovation center.webp'

export default function Footer() {
    const handleScroll = (id) => {
    const target = document.getElementById(id);
    // if (target) {
    //   target.scrollIntoView({ behavior: "smooth" });
    // }
    if (target) {
    const y = target.getBoundingClientRect().top + window.pageYOffset;
    const offset = -150; // adjust for header height
    window.scrollTo({ top: y + offset, behavior: "smooth" });
  }
  };
    return(
        <div className="Footer">
            <div className="grid grid-cols-1 grid-rows-4 text-color-light py-16 px-18 font-Niradei  gap-12
            md:grid-cols-4 md:grid-rows-1" style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition:'center', backgroundColor: '#12284CC0', backgroundBlendMode: "multiply"}}>
                <img src={ACETLogo} alt="Logo ACET" className='md:pl-2'/>
                <div>
                    <h1 className='text-header-1 text-accent uppercase md:text-xl mb-2'>IDRI</h1>
                    <ul>
                        <li><a href='https://www.idri.edu.kh/' className='hover:text-accent'>Home</a></li>
                        <li><a href='https://www.idri.edu.kh/about/' className='hover:text-accent'>About</a></li>
                        <li><a href='https://www.idri.edu.kh/research/' className='hover:text-accent'>Research</a></li>
                        <li><a href='https://www.idri.edu.kh/innovation/' className='hover:text-accent'>Innovation</a></li>
                        <li><a href='https://www.idri.edu.kh/events/' className='hover:text-accent'>Events</a></li>
                    </ul>
                </div>
                
                <div>
                    <h1 className='text-header-1 text-accent uppercase md:text-xl mb-2'>ACET</h1>
                    <ul>
                        <li><a className='hover:text-accent' onClick={() => handleScroll("Home")}>Home</a></li>
                        <li><a className='hover:text-accent' onClick={() => handleScroll("About")}>About</a></li>
                        <li><a className='hover:text-accent' onClick={() => handleScroll("Submission")}>Submission</a></li>
                        <li><a className='hover:text-accent' onClick={() => handleScroll("Publication")}>Publication</a></li>
                        <li><a className='hover:text-accent' onClick={() => handleScroll("Agenda")}>Agenda</a></li>
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
            <div className='copyright py-4 bg-accent'>
                <h1 className='text-header-1 text-color-light md:text-xl md:mx-16 md:pl-4'>IDRI @2025 All Rights Reserved</h1>
            </div>
        </div>  
    )
}