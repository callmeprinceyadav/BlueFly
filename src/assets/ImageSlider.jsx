import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Fade,Zoom, Slide } from "react-slideshow-image";


const slideImages = [
    {
        url: 'https://bluefly.com/cdn/shop/files/1160098975_RLLZ_4_1800x1800.jpg?v=1710309685',
        caption:'First SLideshow'
    },
    {
        url: 'https://bluefly.com/cdn/shop/files/1160098975_RLLZ_1_1800x1800.jpg?v=1710309680',
        caption:'Second SLideshow'
    },
    {
        url: 'https://bluefly.com/cdn/shop/files/1160098975_RLLZ_4_1800x1800.jpg?v=1710309685',
        caption:'Third SLideshow'
    }
]



const divStyle ={
    border  : '1px solid red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '',
    width: '100vh',
    // backgroundSize: 'cover'  
}

const spanStyle = {
    fontSize: "20px",
    color:"#FFFFFF",
    background:"#efefef"
}

function ImageSlider(){
    return (
        <div className='slide-container' style={{border:'2px solid red', width:"99%",height:"100%"}}>
            <Fade>

                {
                    slideImages.map((image,index)=> (
                        <div key={index}>
                            <div style={{...divStyle, backgroundImage: `url(${image.url})`}}>
                                <span style={{spanStyle}}>{image.caption}</span>
                            </div>
                            
                        </div>
                    ))
                }
            </Fade>
        </div>
    )
}


export default ImageSlider;