import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
    {
        link: "https://www.idri.edu.kh/wp-content/uploads/2025/05/DSC05171-copy-scaled.webp",
        alt: "image 1"
    },
    {
        link: "https://www.idri.edu.kh/wp-content/uploads/2025/05/DSC05171-copy-scaled.webp",
        alt: ""
    },
    {
        link: "https://www.idri.edu.kh/wp-content/uploads/2025/05/DSC05171-copy-scaled.webp",
        alt: "s"
    },
    {
        link: "https://www.idri.edu.kh/wp-content/uploads/2025/05/DSC05171-copy-scaled.webp",
        alt: ""
    },
    {
        link: "https://www.idri.edu.kh/wp-content/uploads/2025/05/DSC05171-copy-scaled.webp",
        alt: ""
    },
    {
        link: "https://www.idri.edu.kh/wp-content/uploads/2025/05/DSC05171-copy-scaled.webp",
        alt: ""
    },
    {
        link: "https://www.idri.edu.kh/wp-content/uploads/2025/05/DSC05171-copy-scaled.webp",
        alt: ""
    },
    {
        link: "https://www.idri.edu.kh/wp-content/uploads/2025/05/DSC05171-copy-scaled.webp",
        alt: ""
    },

]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 3
  }
};

export default function Gallery (){
    return (
        <div className="Gallery px-4 my-4">
            <h1 className="text-color-light text-header-1">GALLERY</h1>
            <PhotoProvider>
            <Carousel responsive={responsive} 
                itemClass="m-1 carousel-item-padding-40-px"
                dotListClass="custom-dot-list-style"
                infinite={true}
                autoplay={true}
                transitionDuration={500}
                autoPlaySpeed={1000}    
                removeArrowOnDeviceType={["tablet", "mobile"]}
                draggable={true}
                swipeable={true}
                showDots={true}
                arrows={false}
                className='pb-8 text-accent'
            >

                {images.map((image) => (
                    <PhotoView src={image.link}>
                        <img src={image.link} alt={image.alt} />
                    </PhotoView>
                ))}


            </Carousel>
            </PhotoProvider>
        </div>
    )
}