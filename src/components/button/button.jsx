import './button.css'

const AcetButton = ({text}) => {
    
    return (<>
    <div class="relative max-w-auto min-w-12 w-32 h-10 md:w-52 md:h-16 acet-btn">
        {/* <div class="absolute inset-0  z-[-1] clip-border"></div> */}
        <div class="absolute inset-0 border-2 border-accent px-1 w-auto z-0 clip-inner flex items-center justify-center text-white text-button bg-accent hover:bg-transparent hover:text-accent ">
            <div className='corner-border bg-accent absolute top-0 right-0 w-5 h-5 md:w-8 md:h-8 rotate-45 -translate-y-[50%] translate-x-[50%] '></div>
            <p className='text-button'>{text}</p>
        </div>
    </div>

    </>)
}

export default AcetButton