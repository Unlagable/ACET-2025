import idrilogo from '../../assets/image/webp/logo/Cadt idri.webp'
import cadtlogo from '../../assets/image/webp/logo/cadt.webp'
import ptclogo from '../../assets/image/webp/logo/mptc.webp'


export default function Sponsor()
{
    return (
        <div className="Sponsor-Section my-8 ">
            <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 text-color-light px-4 space-y-8">
                <div className='flex flex-col align-center md:items-start'>
                    <h1 className="text-header-1 uppercase">SPONSOR</h1>
                    <img src={cadtlogo} alt="CADT logo" className='w-10/12 my-auto'/>
                </div>
                <div className='flex flex-col align-center md:items-center'>
                    <h1 className="text-header-1 uppercase">SUPPORTER</h1>
                    <img src={ptclogo} alt="CADT logo" className='h-40 py-4 w-fit my-auto'/>
                </div>
                <div className='flex flex-col align-center md:items-end'>
                    <h1 className="text-header-1 uppercase">ORGANIZER</h1>
                    <img src={idrilogo} alt="CADT logo" className='w-10/12 my-auto'/>
                </div>
            </div>
        </div>
    )
}