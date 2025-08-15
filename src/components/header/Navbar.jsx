import AcetLogo from '../../assets/image/vector/logo acet 2025.svg'
import './Navbar.css'


const NavBar = () =>  {    
    return(<>
        <div className='bg-white z-1 fixed w-full h-18'>
            <img src={AcetLogo} alt="Logo Acet 2025" className='md:absolute md:h-14 md:ml-8 md:my-2'/>
            <ol className='md:flex md:space-x-4 md:justify-end md:mr-8  md:items-center md:h-18 md:text-xl font-Niradei font-bold uppercase text-primary '>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Submission</a></li>
                <li><a href="">Agenda</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Contact</a></li>
            </ol>
        </div>
    

    </>)}

export default NavBar