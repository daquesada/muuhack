import styled from 'styled-components'
import {FadeIn} from '../../styles/animations'

export const Article = styled.article`
min-height:200px;
margin: 6%;
background:#fefefe;
border-radius:20px;
box-shadow: 0 10px 14px rgba(0,0,0,.7);
`
export const  Div = styled.div`
padding-top: 8px;
margin-bottom:20px;
align-items: center;
text-align: center;
font-size: 20px;
right:0;
left:0;
display:block;
padding-top: 8px;
& svg {
    margin-right:4px;
}
`

export const Img = styled.img`
${FadeIn({time:'0.5s'})}
box-shadow: 0 10px 14px rgba(0,0,0,.5);
height: 100%;
width: 100%;
object-fit: cover;
position: absolute;
top:0;
`

export const ImgWrapper = styled.div`
border-top-left-radius:20px;
border-top-right-radius:20px;
display:block;
height:0;
overflow:hidden;
padding: 56.25% 0 0 0;
position: relative;
width: 100%
`