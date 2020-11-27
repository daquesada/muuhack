import styled from 'styled-components'
import {FadeIn} from '../../styles/animations'


export const Article = styled.article`
min-height:200px;
margin:6%;
background:#fefefe;
border-radius:20px;
box-shadow: 0 10px 14px rgba(0,0,0,.7);
`

export const Img = styled.img`
${FadeIn({time:'0.5s'})}
height: 100%;
width: 100%;
object-fit: cover;
position: absolute;
top:0;
border-radius:20px;
`

export const ImgWrapper = styled.div`
border-radius:20px;
display:block;
min-height:300px;
padding: 56.25% 0 0 0;
position: relative;
width: 100%;
@media(min-width:720px){
    height:1080px;
}
`