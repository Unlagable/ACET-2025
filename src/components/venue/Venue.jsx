import IDRI from '../../assets/image/webp/innovation center.webp'
import AcetButton from '../button/button'
import brandElemGroup from '../../assets/image/webp/acet group.webp'


export default function Venue () {
    const openMap = () => {
    const url = "https://maps.app.goo.gl/6AgTktP5GkTLgsVJ7"; 
    window.open(url, "_blank"); // open in new tab
  };
    return (
        <div className="Venue-Section block md:grid-cols-3 md:grid md:mx-16 ">
            <img src={IDRI} alt="" className='w-full h-full object-cover px-4 md:pb-8 my-8 md:my-4 md:col-span-2'/>

            <div className='text-info text-color-light capitalize px-4 space-y-2 my-4 md:space-y-8'>
                <p className='text-body-1 font-bold'>the conference will be held at </p>
                <h1 className='text-header-1'>Cambodia Academy of Digital Technology, Phnom Penh</h1>
                <p className='text-color-light-muted text-body-1 capitalize'>CADT is a national flagship research and education institution for Digital Technology and Innovation, nurturing digital talent and innovators to drive Cambodia toward a digital society.</p>
                <div className='grid grid-cols-3 justify-center items-center md:block'>
                    <div className='col-span-2' onClick={openMap}> 
                        <AcetButton text="Get Direction"></AcetButton>
                    </div>
                    <div className='relative'>
                        <img src={brandElemGroup} alt="" className='rotate-180 opacity-50 w-full md:w-60 md:mt-3'/>
                    </div>
                </div>
            </div>
        </div>
    )
}