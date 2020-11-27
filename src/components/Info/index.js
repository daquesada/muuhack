import React from 'react'
import {Article, Img, ImgWrapper} from './styles'
const src="https://asoleche.org/wp-content/uploads/2016/12/infogra1.png";

export const Info =()=>{
    return(
        <Article>
            <ImgWrapper>
                <Img src={src}></Img>
            </ImgWrapper>
        </Article>
    )
}