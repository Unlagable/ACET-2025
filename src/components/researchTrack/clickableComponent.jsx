import { useState } from 'react'
import './ResearchTrack.css'

const ClickableComponent = ({image, title, description}) =>  {
    const [openDetail, setOpenDetail] = useState(false);
    const toggleOpenDetail = () => {
        setOpenDetail(!openDetail)
    };


    return (<>
        <div className="research-track relative ">
        
                <div className={`${openDetail && "py-16"} ${!openDetail ? "justify-start" : "justify-center"} relative flex px-24 items-center w-auto space-x-8 py-4  hover:cursor-pointer `} onClick={toggleOpenDetail} style={{transition: "width 0.8s, height 0.8s",}}>
                    <img src={image} alt="Nutrual Language Process" className={`${!openDetail ? "w-16" : "w-65"} `}/>
                    <div className={`${!openDetail && "hidden"} h-60 md:w-[1px] bg-white `} ></div>

                    <div className={`${openDetail && "space-y-16"} relative w-120 transition-transform duration-700 `}>
                        <h2 className="text-header-2 uppercase text-color-light ">{title}</h2>
                        <p className={` ${!openDetail && "hidden"} text-body-1 text-color-light `}>{description}</p>
                    </div>
                </div>

            <div className='research-Track-line h-[0.5px] w-full bg-white'></div>
        </div>
        

    </>)

}
export default ClickableComponent