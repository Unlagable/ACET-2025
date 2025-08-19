import React, { useEffect, useState } from 'react';
import Faq from "react-faq-component";

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
    ],
};

const styles = {
    // bgColor: 'white',
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


    return (
        <div className="FAQ-Section px-4 bg-white">
            <h1 className='text-primary text-header-1 py-4'>frequently asked questions</h1>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />

        </div>
    )
}