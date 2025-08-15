import './button.css'

const AcetButton = ({text}) => {
    text = "..."
    return (<>
    <div class="relative w-64 h-64 hover:w-100 acet-btn ">
        <div class="absolute inset-0 bg-accent z-[-1] clip-border"></div>
        <div class="absolute inset-1 bg-accent z-0 clip-inner flex items-center justify-center text-white text-button hover:text-accent hover:bg-[#F2F2F2]">
            {text}
        </div>
    </div>

    </>)
}

export default AcetButton