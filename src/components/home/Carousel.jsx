import React, { useEffect, useState } from 'react';
import img1 from '../../images/slider-1.jpg';
import img2 from '../../images/slider-2.jpg';
import img3 from '../../images/slider-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousel() {

    const imgArray = [img1, img2, img3];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        const isLastSlide = currentSlide === imgArray.length - 1;
        const nextSlideIndex = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(nextSlideIndex);
    };

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            nextSlide();
        }, 4000);

        // Cleanup interval.
        return () => clearInterval(sliderInterval);
    }, [currentSlide]);

    return (
        <div className="w-[100vw] h-[780px] max-h-[40vh] md:max-h-[90vh] m-auto mb-4 relative group">
            <div
                style={{ backgroundImage: `url(${imgArray[currentSlide]})` }}
                className="absolute inset-0 w-full h-full bg-center bg-cover duration-500"
            ></div>

            <div
                className="absolute bottom-5 left-1/2 flex flex-row gap-4"
            >

                {
                    Array.from({ length: 3 }, (_, index) => (
                        <button
                            key={index}
                            className={`rounded-full p-[6px] bg-black outline outline-white cursor-pointer duration-300 ${currentSlide === index ? 'outline-2' : 'outline-1'}`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))
                }
            </div>
        </div>
    );
};
