import { useState, useEffect } from 'react'
import './ResearchTrack.css'
import ClickableComponent from './clickableComponent'
import NLP from '../../assets/image/webp/research track/NLP.webp'
import AI from '../../assets/image/webp/research track/AI.webp'
import DS from '../../assets/image/webp/research track/Data-Science.webp'
import IoT from '../../assets/image/webp/research track/IoT.webp'

const ResearchTrack = () =>  {
    // const [openDetail, setOpenDetail] = useState(false);
    // const toggleOpenDetail = () => {
    //     setOpenDetail(!openDetail)
    // };


    return (<>
        <div className="research-track relative">
            <h1 className="text-header-1 text-color-light pl-16 my-8 leading-[140%] ">4 Specifics Research Track</h1>
            <div className='research-Track-line h-[1px] w-full bg-white'></div>
        
                {/* <div className={`${openDetail && "py-16"} ${!openDetail ? "justify-start" : "justify-center"} relative flex px-24 items-center w-auto space-x-16 py-4  hover:cursor-pointer `} onClick={toggleOpenDetail}>
                    <img src={NLP} alt="Nutrual Language Process" className={`${!openDetail ? "w-16" : "w-65"} `}/>
                    <div className={`${!openDetail && "hidden"} h-50 md:w-[1px] bg-white `} ></div>

                    <div className={`${openDetail && "space-y-16"} relative w-120 transition-transform duration-700 `}>
                        <h2 className="text-header-2 uppercase text-color-light ">Natural language process</h2>
                        <p className={` ${!openDetail && "hidden"} text-body-1 text-color-light `}>Natural Language Processing, is a field of computer science and artificial intelligence focused on enabling computers to understand, interpret, and generate human language.</p>
                    </div>
                </div>
                <div className='research-Track-line h-[1px] w-full bg-red-400'></div> */}

                <ClickableComponent
                    image={NLP}
                    title="NATURAL LANGUAGE PROCESS"
                    description="Natural Language Processing, is a field of computer science and artificial intelligence focused on enabling computers to understand, interpret, and generate human language."
                    />
                <ClickableComponent
                    image={AI}
                    title="DATA SCIENCE"
                    description="Artificial Intelligence (AI) refers to the capability of computers to perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making."
                    />
                <ClickableComponent
                    image={DS}
                    title="DATA SCIENCE"
                    description="Data science is a multidisciplinary field that uses mathematical, statistical, and computational methods to extract insights and knowledge from data."
                    />
                <ClickableComponent
                    image={IoT}
                    title="IoT and NETWORKING"
                    description="IoT (Internet of Things) and networking are fundamentally intertwined, forming the backbone of connected devices."
                />
                    </div>


        

    </>)

}
export default ResearchTrack