import React from 'react'
import { useContext } from 'react'
import  ImageContext  from '../contexts/ImageContext'
import ImageListItem from './ImageListItem'

function ImageList(props) {
    let {pic, setImage} = useContext(ImageContext)




  return (
    <div>ImageList
        <div className='list'>
            {pic.map((gallery)=>{
                return <ImageListItem myData={galleryImage} />
            })}
        </div>



    </div>
  )
}

export default ImageList