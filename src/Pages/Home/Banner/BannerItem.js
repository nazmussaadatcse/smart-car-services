import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    
    const {image,id,prev,next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-lg" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-25 top-1/4 pl-10">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br />
                        Price for car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2 left-25 top-1/2 pl-10">
                    <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum exercitationem saepe magnam error rem iste quod labore ab officia.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-1/2 left-25 top-3/4 pl-10">

                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`}className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;