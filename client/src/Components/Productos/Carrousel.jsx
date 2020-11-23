import React from 'react';
import { Slide } from 'react-slideshow-image';

const properties = [

];

export default function SlideShow ({prods}) {



    console.log(prods)
    return (
        <div className="containerSlide">
            <Slide {...properties}>
                <div className="each-slide">
                    <div>
                        <img src="" alt=""/>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

