import bgImg from '../../assets/image/vector/submission bg.svg'
import brandElements from '../../assets/image/webp/acet element.webp'
import brandElementsGroup from '../../assets/image/webp/acet group.webp'
import AcetButton from '../../components/button/button'

export default function ConferenceJourney() {
    return (<>
        <div id='Submission-Section ' className='h-screen md:h-auto relative overflow-hidden' style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center"}}>

            <div className='line-break h-0.5 w-full bg-white'/>

            <div className='absolute opacity-50 -left-15 w-75 md:w-50'>
                <img src={brandElementsGroup} alt="" />
            </div>
            <div className='absolute bottom-0 -right-15 rotate-180 opacity-50 w-75 md:w-50'>
                <img src={brandElementsGroup} alt="" className=''/>
        </div>

{/* 
            <h1 className="text-header-1 text-color-light my-8 leading-[140%] text-center">Submission</h1>

            <p className='text-color-light text-body-2 mx-auto capitalize text-center w-xs'>to submit your paper for review please follow steps below</p> */}
            
            <div className='absolute -translate-x-1/2 left-1/2 -translate-1/2 top-1/2 md:static md:translate-0'>
                <h1 className="text-header-1 text-color-light my-4 md:my-8 leading-[140%] text-center">Submission</h1>

                <p className='text-color-light-muted text-body-2 mx-auto capitalize text-center my-2 md:my-8 w-45 md:w-xs'>to submit your paper for review please follow steps below</p>


                <div className='flex flex-col md:flex-row mb-8 justify-center gap-4 md:gap-8'>

                    <div className='space-y-2'>
                        <h2 className='text-header-2 text-color-light font-bold'>
                            1. Download Templates
                        </h2>
                        <AcetButton text="GET TEMPLATE"/>
                    </div>

                    <div className='hidden md:block h-auto w-[2px] bg-white align-center'></div>

                    <div className='space-y-2'>
                        <h2 className='text-header-2 text-color-light font-bold'>
                            2. Submit The Form
                        </h2>
                        <AcetButton text="SUBMIT PAPER"/>
                    </div>

                </div>

            </div>
        
            <div className='line-break h-0.5 w-full bg-white absolute bottom-0'/>
        </div>
    </>)
}