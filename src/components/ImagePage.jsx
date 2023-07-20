import React, { useContext } from 'react'
import ImageContext  from '../contexts/ImageContext'

function ImagePage(props) {
    
    
    let {setGallery} = useContext(ImageContext)


  return (
    <div>ImagePage
        <div className='page'>
        <img src= {setGallery.img} />
        <div className='where'> 
        <h3> {setGallery.name}  </h3>
        <h4> {setGallery.location} </h4>
            
        </div>

        </div>






    </div>
  )
}

export default ImagePage;