import confChair from '../../assets/image/webp/commitees/sopheap seng.webp'
import progChair from '../../assets/image/webp/commitees/rottana ly.webp'
import AcetButton from '../button/button'


export default function Committees () {
    return (
        <div className="Committees-Section overflow-clip ">
            <h1 className='text-header-1 text-color-light my-8 mx-4'>Meet the Committees</h1>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col items-center space-y-4'>
                        <h2 className='text-header-2 text-color-light mx-auto uppercase'>Conference Chair</h2>
                        <img src={confChair} alt="" className='w-30 md:45'/>
                        <p className='text-color-light text-body-1 mx-auto'>Dr. Sopheap Seng</p>
                </div>
                <div className='flex flex-col items-center space-y-4'>
                        <h2 className='text-header-2 text-color-light mx-auto uppercase'>Program Chair</h2>
                        <img src={progChair} alt="" className='w-30 md:45'/>
                        <p className='text-color-light text-body-1 mx-auto'>Dr. Rottana Ly</p>
                </div>
            </div>
            <div className='grid grid-cols-2 my-4'>
                <div className=''>
                    <p className='text-color-light-muted justify-center flex items-center h-full'>And More!</p>
                </div>
                <AcetButton text="View All"/>
            </div>
        </div>
    )
}