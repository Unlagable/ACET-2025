import ReactCaroussel from 'react-caroussel';
import "react-caroussel/dist/index.css";

const books = [
    {
        title: "ACET 2025 Proceedings",
        description: "This is the proceedings of the ACET 2025 conference, which includes all the papers presented during the event.",
        image: "https://www.idri.edu.kh/wp-content/uploads/2025/04/Book-Mockup.png",
        descriptionDown: "This publication contains the research papers presented at the conference, showcasing the latest advancements in technology and education."
    },
    {
        title: "ACET 2025 Proceedings",
        description: "This is the proceedings of the ACET 2025 conference, which includes all the papers presented during the event.",
        image: "https://www.idri.edu.kh/wp-content/uploads/2025/04/Book-Mockup.png",
        descriptionDown: "This publication contains the research papers presented at the conference, showcasing the latest advancements in technology and education."
    },
    {
        title: "ACET 2025 Proceedings",
        description: "This is the proceedings of the ACET 2025 conference, which includes all the papers presented during the event.",
        image: "https://www.idri.edu.kh/wp-content/uploads/2025/04/Book-Mockup.png",
        descriptionDown: "This publication contains the research papers presented at the conference, showcasing the latest advancements in technology and education."
    },
]

function Card({title, description, image, descriptionDown}) {
    return (
        <div className="card px-4">
            <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-4 '>
                <div className='space-y-4'>
                    <h2 className='text-header-2 text-color-light'>{title}</h2>
                    <p className='text-color-light-muted text-body-2 md:w-[90%]'>{description}</p>

                </div>
                <img src={image} alt="Publication Image" className='w-full h-auto scale-80 md:scale-110'/>
                <div className='flex flex-col justify-end items-start'>
                    <p className='text-color-light-muted text-body-2'>{descriptionDown}</p>
                    <button className='bg-accent'>Download</button>
                    
                </div>
            </div>
        </div>
    )
}

export default function Publication() {
    return (
        <div className="Publication px-4 my-8">
            <h1 className='text-color-light text-header-1 mb-8'>Publication</h1>
            <ReactCaroussel infinite={true}
            autoplay={true}
            speed={4} // in seconds
            display={{
            dots: false, arrows:true}}>

                {books.map((book, index) => (
                    <Card
                        key={index}
                        title={book.title}
                        description={book.description}
                        image={book.image}
                        descriptionDown={book.descriptionDown}
                    />
                ))}
                
            </ReactCaroussel>
        </div>
    )
}

