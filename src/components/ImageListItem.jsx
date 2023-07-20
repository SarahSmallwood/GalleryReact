import React from 'react'
import { useContext } from 'react'
import  ImageContext  from '../contexts/ImageContext'

function ImageListItem(props) {
    let {setList}= useContext(ImageContext)


  return (
    <div>ImageListItem
        <div className='imageList' onClick={() => {
            setList(props.myData);
        }}
        >

            <img className='miniPic' src={props.myData.img} />
            <div className='miniText'> {props.myData.name} </div>
        </div>


    </div>
  )
}

export default ImageListItem