import React, { useState, useEffect, createContext } from 'react';
import { useContext } from 'react';

const ImageContext =({galleryImages}) => {
    const [imageNumber, setImage] = useState(0)
    const [openPic, setPic] = useState(false)

    const handleopenPic = (index) => {
        setImage(index)
        setPic(true)
    }

    return (
        <div>

    
            <div className='gallery'>
                {
                    galleryImages && galleryImages.map((pic, index) => {
                        return(
                            <div className='first' key={index}>
                            <img src={pic.img}  /> 
                
                           
                            </div>

                        )
                    
                })
            };
                
            </div>

        </div>
       
    );
}
export default ImageContext