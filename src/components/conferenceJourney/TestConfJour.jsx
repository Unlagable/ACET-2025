import ConfCard from "./ConferenceJourneyCard";

function ProgressIndicator() {
    return (
            <div className="indicator w-lg">
                <div className='flex flex-col justify-center items-center pt-4 '>

                    <div className=' flex items-center'>
                        <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                        <div className='indicator-line w-lg bg-accent h-[1px] '></div>
                        <div className='circle-indicator w-4 bg-white h-4 rounded-full border-2 border-accent'></div>
                    </div>
                    <p className='text-accent capitalize text-body-2 font-bold'>In Progress</p>
                </div>
            </div>
    )
}

function TestConfJour() {
    return (
        <div className='bg-green-500'>
            <h2>Conference Journey Test Component</h2>
            <p>This is a placeholder for the Conference Journey component.</p>
            <ConfCard Title="Call for Paper" Detail="Submit your research paper for consideration in our conference." Date="Submission Deadline: August 31, 2024" />
            <ProgressIndicator />
        </div>
    );
}

export default TestConfJour;