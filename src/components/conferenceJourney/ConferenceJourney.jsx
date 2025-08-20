import ConfCard from './ConferenceJourneyCard'
import { useRef, useEffect, useState } from "react";

export default function ConferenceJourney() {

    const callForPaper = { Title:"Call For Paper", Detail:"researchers are invited to submit their papers in the areas of AI, Data Science, IoT, and NLP. Submissions will be reviewed for presentation at ACET conference and inclusion in the proceedings.", 
    Date:"19th May 2025"} 
    
    const paperDeadline = { Title:"Paper Submission Deadline ", Detail:"This is the last date for authors to submit their research papers for review. Submissions must follow the required format and be uploaded through the official submission portal before the deadline.", 
    Date:"15th September 2025"} 

    
    const NotifyAccept = { Title:"Notification of Accepted Paper", Detail:"On this date, authors will be informed whether their paper has been accepted, rejected, or recommended for revision. Feedback from reviewers may also be provided to help authors improve their work.", 
    Date:"06th October 2025"} 
    
    const cameraReady = { Title:"Camera-ready Paper Submission", Detail:"Accepted authors must submit the final version of their paper, formatted according to ACET conference's publication guidelines. This version will appear in the official conference proceedings.", 
    Date:"30th October 2025"} 
    
    const ConferenceRegistration = { Title:"Conference Registration Deadline", Detail:"All presenters and attendees must complete their registration by this date to secure participation in the event. Early registration is often recommended due to limited seats.", 
    Date:"31st October 2025"} 
    
    const ConferenceDate = { Title:"Conference Date", Detail:"The conference officially begins on this day, featuring keynote talks, paper presentations, panel discussions, and networking sessions. Authors of accepted papers will present their work during the scheduled sessions.", 
    Date:"13rd-14th November 2025"} 

    return (
    <div className='hidden md:block'>
        <h1 className="text-header-1 text-color-light pl-16 my-8 leading-[140%] ">Conference Journey</h1>
        
        {/* center indicator line */}
        <div className='relative'>

        
            <div className='absolute flex justify-center w-full top-35 h-auto'>

                <div className='w-0 border-1 h-[1650px] border-white absolute top-1'></div>
                <div className='w-0 border-1 h-[322px] border-accent absolute top-1'></div>

                <div className='circle w-10 h-10 rounded-full bg-primary absolute border-2 border-accent'>
                    <div className='w-7 h-7 bg-accent absolute rounded-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></div>
                </div>
                
                <div className='circle w-10 h-10 rounded-full bg-primary absolute top-[302px] border-2 border-white'>
                    <div className='w-7 h-7 bg-white absolute rounded-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></div>
                </div>

                <div className='circle w-10 h-10 rounded-full bg-primary absolute top-[624px] border-2 border-white'>
                    <div className='w-7 h-7 bg-white absolute rounded-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></div>
                </div>

                <div className='circle w-10 h-10 rounded-full bg-primary absolute top-[966px] border-2 border-white'>
                    <div className='w-7 h-7 bg-white absolute rounded-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></div>
                </div>

                <div className='circle w-10 h-10 rounded-full bg-primary absolute top-[1308px] border-2 border-white'>
                    <div className='w-7 h-7 bg-white absolute rounded-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></div>
                </div>

                <div className='circle w-10 h-10 rounded-full bg-primary absolute top-[1628px] border-2 border-white'>
                    <div className='w-7 h-7 bg-white absolute rounded-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></div>
                </div>

            </div>
        </div>
        {/* end of center indicator line */}

        <div className='card-collective '>
            {/* card 1 */}
            <div className='flex justify-start items-center w-full'>
                <div className='card-group'>
                    <div className='flex justify-center items-center w-xl '>

                        <ConfCard Title={callForPaper.Title}
                        Detail={callForPaper.Detail}
                        Date={callForPaper.Date}
                        />
                    </div>
                        {/* In progress bar indicator */}
                    <div className='absolute left-0 flex justify-start '>

            
                    <div className="indicator">
                        <div className='flex justify-center items-center  w-xl mt-4'>

                            <div className='relative flex items-center'>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                                <div className='indicator-line w-lg bg-accent h-[1px] '></div>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  w-xl'>
                            <p className='text-accent capitalize text-body-2 font-bold'>In Progress</p>
                        </div>
                    </div>
                    </div>
                </div>
            {/* end of in progess bar */}
            </div>
            {/* end of card 1 */}

            {/* card 2 */}
            <div className='flex justify-end items-center w-full'>
                <div className='card-group'>
                    <div className='flex justify-center items-center w-xl '>

                        <ConfCard Title={paperDeadline.Title}
                        Detail={paperDeadline.Detail}
                        Date={paperDeadline.Date}
                        />
                    </div>
                        {/* In progress bar indicator */}
                    <div className='flex justify-start w-full hidden'>

            
                    <div className="indicator">
                        <div className='flex justify-center items-center  w-xl mt-4'>

                            <div className='relative flex items-center'>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                                <div className='indicator-line w-lg bg-accent h-[1px] '></div>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  w-xl'>
                            <p className='text-accent capitalize text-body-2 font-bold'>In Progress</p>
                        </div>
                    </div>
                    </div>
                </div>
            {/* end of in progess bar */}
            </div>
            {/* end of card 2 */}

            {/* card 3 */}
            <div className='flex justify-start items-center w-full'>
                <div className='card-group'>
                    <div className='flex justify-center items-center w-xl '>

                        <ConfCard Title={NotifyAccept.Title}
                        Detail={NotifyAccept.Detail}
                        Date={NotifyAccept.Date}
                        />
                    </div>
                        {/* In progress bar indicator */}
                    <div className=' justify-start w-full hidden'>

            
                    <div className="indicator">
                        <div className='flex justify-center items-center  w-xl mt-4'>

                            <div className='relative flex items-center'>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                                <div className='indicator-line w-lg bg-accent h-[1px] '></div>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  w-xl'>
                            <p className='text-accent capitalize text-body-2 font-bold'>In Progress</p>
                        </div>
                    </div>
                    </div>
                </div>
            {/* end of in progess bar */}
            </div>
            {/* end of card 3 */}


            {/* card 4 */}
            <div className='flex justify-end items-center w-full'>
                <div className='card-group'>
                    <div className='flex justify-center items-center w-xl '>

                        <ConfCard Title={cameraReady.Title}
                        Detail={cameraReady.Detail}
                        Date={cameraReady.Date}
                        />
                    </div>
                        {/* In progress bar indicator */}
                    <div className=' justify-start w-full hidden'>

            
                    <div className="indicator">
                        <div className='flex justify-center items-center  w-xl mt-4'>

                            <div className='relative flex items-center'>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                                <div className='indicator-line w-lg bg-accent h-[1px] '></div>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  w-xl'>
                            <p className='text-accent capitalize text-body-2 font-bold'>In Progress</p>
                        </div>
                    </div>
                    </div>
                </div>
            {/* end of in progess bar */}
            </div>
            {/* end of card 4 */}

            {/* card 5 */}
            <div className='flex justify-start items-center w-full'>
                <div className='card-group'>
                    <div className='flex justify-center items-center w-xl '>

                        <ConfCard Title={ConferenceRegistration.Title}
                        Detail={ConferenceRegistration.Detail}
                        Date={ConferenceRegistration.Date}
                        />
                    </div>
                        {/* In progress bar indicator */}
                    <div className=' justify-start w-full hidden'>

            
                    <div className="indicator">
                        <div className='flex justify-center items-center  w-xl mt-4'>

                            <div className='relative flex items-center'>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                                <div className='indicator-line w-lg bg-accent h-[1px] '></div>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  w-xl'>
                            <p className='text-accent capitalize text-body-2 font-bold'>In Progress</p>
                        </div>
                    </div>
                    </div>
                </div>
            {/* end of in progess bar */}
            </div>
            {/* end of card 5 */}

            {/* card 6 */}
            <div className='flex justify-end items-center w-full'>
                <div className='card-group'>
                    <div className='flex justify-center items-center w-xl '>

                        <ConfCard Title={ConferenceDate.Title}
                        Detail={ConferenceDate.Detail}
                        Date={ConferenceDate.Date}
                        />
                    </div>
                        {/* In progress bar indicator */}
                    <div className='justify-start w-full hidden'>

            
                    <div className="indicator">
                        <div className='flex justify-center items-center  w-xl mt-4'>

                            <div className='relative flex items-center'>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                                <div className='indicator-line w-lg bg-accent h-[1px] '></div>
                                <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  w-xl'>
                            <p className='text-accent capitalize text-body-2 font-bold'>In Progress</p>
                        </div>
                    </div>
                    </div>
                </div>
            {/* end of in progess bar */}
            </div>
            {/* end of card 6 */}
        </div>
    </div>
    )
}
