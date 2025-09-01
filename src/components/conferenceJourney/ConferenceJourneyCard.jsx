import CalendarIcon from '../../assets/image/webp/Calendar Icon.webp'

export default function ConfCard({Title, Detail, Date}){
    return (<>
        <div className="conference-Card bg-primary-l2 w-xs p-4 space-y-4 md:w-lg md:py-8 md:space-y-10 md:px-8 " style={{   clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",}}>
    
            <h2 className="text-header-2 text-color-light uppercase">{Title}</h2>
            <p className='text-body-2 text-color-light capitalize'>{Detail}</p>
            <div className='relative flex space-x-2 h-auto  items-center '>
                <img src={CalendarIcon} alt="calendar Icon" className='w-8 h-full'/>
                <span className='text-body-2 text-accent'>{Date}</span>
            </div>
        </div>
    </>)

}