import React, { useEffect, useState } from 'react';
import Faq from "react-faq-component";
import AcetButton from '../button/button';
import { motion } from 'motion/react';


const data = {
    // title: "frequently asked questions",
    rows: [
        {
            title: "What is the dress code?",
            content: `We recommend business attire or a suit, but freestyle is welcome.`,
        },
        {
            title: "How do I pay for tickets?",
            content:
                "There is no need to pay for tickets as it is free.",
        },
        {
            title: "How do I register for the conference?",
            content: `You can register for the conference directly on our website. Please visit the Form and complete your registration. We encourage early registration to secure your spot and take advantage of the free entry.`,
        },
        {
            title: "What are the registration deadlines?",
            content: `registration deadlines: 31st October 2025. We recommend registering as soon as possible, as space may be limited.`,
        },
        {
            title: "Where will recordings or summaries of paper be available at?",
            content: `We recommend you get research papers from our publication Books directly on our website section publication.`,
        },
        {
            title: "Is there Wi-Fi available?",
            content: `Yes, Wi-Fi will be available throughout the conference venue for all attendees. Details for connecting (network name and password) will be provided at the registration desk upon check-in.`,
        },
        {
            title: "Is food and drink provided?",
            content: `We do have complimentary coffee for attendees.`,
        },
        {
            title: "Is the venue wheelchair accessible?",
            content: `Yes, our venue is fully wheelchair accessible, including Elevator, wheelchair ramp, all conference rooms, restrooms, and common areas. If you require any specific assistance or have further accessibility questions, please contact us in advance via our Email.`,
        },
        {
            title: "How do I submit my paper for a presentation?",
            content: `The call for paper is currently open. Please visit our submission section above for guidelines, topics, and the submission portal. The deadline for abstract submissions is 15th September 2025.`,
        },
        {
            title: "How do I share my screen during a presentation?",
            content: `Our technical support team will be available to assist you with screen sharing and connection to the present screen.`,
        },
        {
            title: "Will there be an opportunity to chat with presenters?",
            content: `Absolutely! We encourage interaction. There will be dedicated Q&A sessions after each presentation. Additionally, breaks and social events (e.g., welcome reception, lunch) are designed to facilitate informal discussions with presenters and other attendees.`,
        },
        
    ],
};

const styles = {
    bgColor: '#F2F2F2',
    titleTextColor: "#12284C",
    // rowTitleColor: "blue",
    // rowContentColor: 'grey',
    arrowColor: "#FF4438",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


export default function FAQ() {
    
const [viewmore, setViewmore] = useState(false);

    return (
        <div className="FAQ-Section px-4 bg-color-light md:mx-16 " id='FAQ'>
            <h1 className='text-primary text-header-1 py-4'>frequently asked questions</h1>
            <motion.div layout className={`h-58 overflow-hidden ${viewmore && "h-auto"} `}>
                
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />

            </motion.div>
            <div className='flex justify-center p-4'>
                <div onClick={() => setViewmore(!viewmore)} className='hover:cursor-pointer'>
                    <AcetButton text={viewmore ? "collapse" : "Show More"} />
                </div>
            </div>
        </div>
    )
}