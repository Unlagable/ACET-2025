import { useState } from 'react'
import './ResearchTrack.css'
import { motion,AnimatePresence } from "motion/react"

const ClickableComponent = ({image, title, description}) =>  {
    const [openDetail, setOpenDetail] = useState(false);
    const toggleOpenDetail = () => {
        setOpenDetail(!openDetail)
    };


    return (<>
        <div className="research-track relative ">
        
                <div className={`${openDetail && "md:py-16"} ${!openDetail ? "justify-start" : "justify-center"} relative flex px-4 md:px-24 items-center w-auto space-x-4 md:space-x-8 py-4  hover:cursor-pointer `} onClick={toggleOpenDetail} style={{transition: "width 0.8s, height 0.8s",}}>
                    <motion.img           initial={{ scale: 0, opacity: 0 }} animate={{ scale: openDetail ? 1.1  : 1, opacity: 1 }} transition={{ duration: 0.5 }}
                    src={image} alt="Nutrual Language Process" className={`${!openDetail ? "w-10 md:w-16" : "w-20 md:w-65"} `}/>

                    <AnimatePresence> 
                        ${openDetail && (<motion.div initial={{opacity: 0, y:-50}} animate={{opacity:1, y:0}} translate={{duration:0.3, ease: "easeInOut"}}
                        className={`${!openDetail && "hidden"} h-30 md:h-60 w-[0.5px] md:w-[1px] bg-white `} ></motion.div>)}
                    </AnimatePresence>

                    <motion.div initial={{y:-50, opacity:0}} animate={{y: 0, x: openDetail ? 0 : 0, opacity:1}} transition={{ duration:0.5}} className={`${openDetail && "space-y-2 md:space-y-16"} relative w-120 transition-transform duration-700 `}>
                        <motion.h2 

                        initial={{y:-50, opacity:0}} animate={{y: 0, x: openDetail ? 0 : 0, opacity:1}} transition={{ duration:0.5}} exit={{ x: -50, opacity: 0 }}  key="details"

                        className="text-header-2 uppercase text-color-light ">{title}
                        
                        </motion.h2>


                    <AnimatePresence>
                        ${openDetail && (<motion.p
                            initial={{ opacity: 0 ,y:-50}}
                            animate={{ opacity: 1 ,y:0}}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            exit={{ opacity: 0 }} className={`${!openDetail && 'hidden'} text-body-1 text-color-light`}>{description}</motion.p>)}
                    </AnimatePresence>
                    </motion.div>
                </div>

            <div className='research-Track-line h-[0.5px] w-full bg-white'></div>
        </div>
        

    </>)

}
export default ClickableComponent