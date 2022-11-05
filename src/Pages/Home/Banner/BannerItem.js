import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img h-[550px] w-full'>
                <img src={image} alt="" className="h-full w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-rose-600">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-rose-600">❯</a>
            </div>
            <div className="absolute flex justify-end transform w-9/11 md:w-2/5 -translate-y-1/2 left-8 md:left-24 top-2/4">
                <div>
                    <h1 className='text-3xl md:text-6xl font-bold mb-6 text-white'>Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                    <p className='mb-5 text-white'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                    <button className="btn btn-secondary mr-5 inline">Discover More</button>
                    <button className="btn btn-outline btn-info inline">Latest Project</button>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;