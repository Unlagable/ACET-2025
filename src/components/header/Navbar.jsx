import AcetLogo from '../../assets/image/vector/logo acet 2025.svg'
import './Navbar.css'
import { useState } from 'react';

const NavBar = () =>  {    
    const [open, setOpen] = useState(false);

    return(<>
        <div className='bg-white z-1 fixed w-full md:h-18 h-14'>
            <img src={AcetLogo} alt="Logo Acet 2025" className='absolute h-10 ml-4 my-2 md:h-14 md:ml-8 md:my-2'/>
            <ul className='hidden md:flex md:space-x-8 md:justify-end md:mr-8  md:items-center md:h-18 md:text-xl font-Niradei font-bold uppercase text-primary '>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Submission</a></li>
                <li><a href="">Agenda</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <div className="md:hidden flex justify-end items-center mt-5 mr-4">
                <button onClick={() => setOpen(!open)} className="focus:outline-none">
                {/* 3 bars */}
                    <div className="w-8 h-1 bg-primary mb-1"></div>
                    <div className="w-8 h-1 bg-primary mb-1"></div>
                    <div className="w-8 h-1 bg-primary"></div>
                </button>
            </div>

            {open && (
                <div className="menudrop bg-white md:hidden border-t-1 mt-4">

                    <ul className="mt-0 md:hidden mx-8  [&>*]:h-14 [&>*]:items-center [&>*]:flex [&>*]:text-md font-Niradei font-bold text-primary uppercase">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Submission</a></li>
                        <li><a href="">Agenda</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            )}


        </div>
    

    </>)}

export default NavBar