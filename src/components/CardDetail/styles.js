import styled from 'styled-components'
import {FadeIn} from '../../styles/animations'


export const Article = styled.article`
min-height:200px;
margin: 6% 15% 6%;
background:#fefefe;
border-radius:20px;
box-shadow: 0 10px 14px rgba(0,0,0,.7);
@media(max-width:720px){
    margin: 6% 6% 6%;
}
`
export const  Div = styled.div`
padding-top: 8px;
margin-bottom:20px;
font-size: 20px;
display:block;
`
// right:0;
// left:0;
// align-items: center;
// text-align: center;

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
width: 100%;
`
export const Title = styled.h2`
font-size: 30px;
margin:0;
text-align: center;
`

export const Span = styled.span`
font-size: 25px;
margin:10%;
`

export const P = styled.p`
margin:0 10%;
&.frase{
    font-size:30px;
    margin-top:40px;
    font-style:italic;
    text-align:center;
}
`