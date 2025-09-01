import acet2022 from '../../assets/image/webp/previous acet/2022.webp'
import acet2023 from '../../assets/image/webp/previous acet/2023.webp'
import acet2024 from '../../assets/image/webp/previous acet/2024.webp'

function ACETCard ({text, img}) {
    return(
        <div className='flex items-center flex-col justify-start p-4 gap-4 bg-white  shadow-[0_6px_8px_6px_rgba(0,0,0,0.1)] drop-shadow-md hover:shadow-[0_12px_18px_12px_rgba(255,0,0,0.2)] hover:deop-shadow-lg '>
            <img src={img} alt="" style={{height: '250px', width: '100%', objectFit:'cover'}}/>
            <h2 className='text-header-2 text-accent uppercase'>{text}</h2>
        </div>
    )
}

export default function ExploreACET () {
    return (
        <div className="Explore-Previous-ACET-Section px-4 bg-color-light pb-4">
            <h1 className="text-header-1 py-4 text-primary">Explore Previous ACET</h1>
            <div className="grid grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
                <ACETCard text="ACET 2024" img={acet2024}/>
                <ACETCard text="ACET 2023" img={acet2023}/>
                <ACETCard text="ACET 2022" img={acet2022}/>
            </div>
        </div>
    )
}