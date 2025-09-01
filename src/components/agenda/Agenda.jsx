import React, { useState } from 'react';
import AcetButton from '../button/button';

const testagenda = [
    {
        topic: "Registration & Welcome Coffee",
        speaker: "N/A",
        detail: "test detail",
        time: "08:00 - 09:00"
    },
    {
        topic: "Registration & Welcome Coffee",
        speaker: "N/A",
        detail: "test detail",
        time: "08:00 - 09:00"
    }
]

function AgendaCard({topic, speaker, detail, time}) {
    return(
        <div className=' bg-primary-l1  flex gap-2 mx-4 text-color-light p-2'>
            <p className="text-body-2 p-2 ">{time}</p>
            <div className="detail-box bg-primary-l2 border-[1px] border-white p-2  ">
                <h2 className="text-header-2">{topic}</h2>
                <p className="text-body-1">{speaker}</p>
                <p className="text-body-2">{detail}</p>
            </div>
        </div>
    )
}

function ViewAgendaButton({text}) {
    return (    <div class="relative max-w-auto min-w-12 w-32 h-10 md:w-52 md:h-16 acet-btn">
        {/* <div class="absolute inset-0  z-[-1] clip-border"></div> */}
        <div class="absolute inset-0 border-2 border-white px-1 w-auto z-0 clip-inner flex items-center justify-center text-acent text-button text-accent bg-white hover:bg-transparent hover:text-white ">
            <div className='corner-border bg-white absolute top-0 right-0 w-5 h-5 md:w-8 md:h-8 rotate-45 -translate-y-[50%] translate-x-[50%] '></div>
            <p className='text-button'>{text}</p>
        </div>
    </div>)
}

function AgendaButton({text, active}) {
    return (
    <div class="relative max-w-auto min-w-12 w-32 h-10 md:w-52 md:h-16 hover:cursor-pointer">
        <div class={`absolute inset-0 px-1 w-auto z-0 clip-inner flex items-center justify-center text-button bg-primary-l1 hover:bg-primary-d1 text-accent ${active ? 'bg-primary-l1' : 'bg-primary-l2' }`}>
            {/* <div className='corner-border bg-accent absolute top-0 right-0 w-5 h-5 md:w-8 md:h-8 rotate-45 -translate-y-[50%] translate-x-[50%] '></div> */}
            <p className='text-button'>{text}</p>
        </div>
    </div>
    )
}

const Agenda = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="agenda">
            <h1 className="text-header-1 text-color-light mx-4">Event Agenda</h1>
            <div className="flex mx-4">
                <div onClick={() => setActive(true)}>
                    <AgendaButton text="Day 1" active={active} />
                </div>
                <div onClick={() => setActive(false)}>
                    <AgendaButton text="Day 2" active={!active}/>
                </div>
            </div>
            <div className='h-[1px] mx-4 bg-white'></div>
            {testagenda.map((item) => (
                <>
                <AgendaCard
                    topic={item.topic}
                    speaker={item.speaker}
                    detail={item.detail}
                    time={item.time} />
                <div className='h-[1px]  mx-4 bg-white '></div>
                </>
            
            ))}

            <div className='flex justify-center mx-4 py-4 gap-4 bg-primary-l1'>
                <ViewAgendaButton text="View Agenda"/>
                <AcetButton text="Download"/>
            </div>
            
        </div>
    );
};

export default Agenda;