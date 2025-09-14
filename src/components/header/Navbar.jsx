import { motion, AnimatePresence } from  "motion/react"
import AcetLogo from '../../assets/image/vector/logo acet 2025.svg'
import { useState } from 'react';

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

const NavBar = () =>  {    
    const [open, setOpen] = useState(false);

    return(<>
        <div className='bg-white z-1 w-full fixed md:h-18 h-14 '>
            <img src={AcetLogo} alt="Logo Acet 2025" className='absolute h-10 ml-4 my-2 md:h-14 md:ml-8 md:my-2'/>

            {/* destop nav */}
            <ul className='hidden md:flex md:space-x-2 lg:space-x-8 md:justify-end md:mr-8 md:items-center md:h-18 md:text-xl font-Niradei font-bold uppercase text-primary '>
                <li><a onClick={() => handleScroll("Home")}>Home</a></li>
                <li><a onClick={() => handleScroll("About")}>About</a></li>
                <li><a onClick={() => handleScroll("Submission")}>Submission</a></li>
                <li><a onClick={() => handleScroll("Agenda")}>Agenda</a></li>
                <li><a onClick={() => handleScroll("FAQ")}>FAQ</a></li>
                <li><a onClick={() => handleScroll("Contact")}>Contact</a></li>
            </ul>

            {/* burger menu */}
            <div className="md:hidden flex justify-end items-center mt-5 mr-4">
                <button onClick={() => setOpen(!open)} className="focus:outline-none">
                {/* 3 bars */}
                    <div className="w-8 h-1 bg-primary mb-1"></div>
                    <div className="w-8 h-1 bg-primary mb-1"></div>
                    <div className="w-8 h-1 bg-primary"></div>
                </button>
            </div>

            {/* mobile nav */}
            <AnimatePresence>
            {open && (
                <motion.div               
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: '600%'}}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="menudrop bg-white md:hidden border-t-1 mt-4">

                    <ul className="mt-0 md:hidden mx-8  [&>*]:h-14 [&>*]:items-center [&>*]:flex [&>*]:text-md font-Niradei font-bold text-primary uppercase">
                        <li><a onClick={() => handleScroll("Home")}>Home</a></li>
                        <li><a onClick={() => handleScroll("About")}>About</a></li>
                        <li><a onClick={() => handleScroll("Submission")}>Submission</a></li>
                        <li><a onClick={() => handleScroll("Agenda")}>Agenda</a></li>
                        <li><a onClick={() => handleScroll("FAQ")}>FAQ</a></li>
                        <li><a onClick={() => handleScroll("Contact")}>Contact</a></li>
                    </ul>
                </motion.div>
            )}
            </AnimatePresence>
            
        </div>
    

    </>)}

export default NavBar