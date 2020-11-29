import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router'
import {FadeIn} from '../../styles/animations'
//#008dc9
//#343a40
// border-bottom-left-radius: 10px;
// border-bottom-right-radius:10px;
export const Nav = styled.nav`
background:#008dc9;
margin-bottom:20px;
align-items: center;
box-shadow: 0 10px 14px rgba(0, 0, 0, .5);
height: 100px;
display: flex;
top: 0;
left: 0;
right: 0;
width: 100%;
justify-content: space-around;
@media(max-width:720px){
    .responsive{
        display:none;
    }
}
@media(min-width:720px){
    .sidebar{
        display:none;
    }
}
`

export const Link = styled(LinkRouter)`
align-items: center;
color: #888;
display: inline-flex;
height: 100%;
justify-content: center;
text-decoration: none;
width: 100%;
color:black;
margin-left:auto;
&:hover{
    color:white;
}
&[aria-current]{
    color:white;
    &::after{
        position:absolute;
        content: '_';
        font-size: 37px;
    }
}
`
export const Button = styled.button`
margin-left:auto;
color:white;
justify-content: center;
align-items:center;
display: inline-flex;
width:50%;
`

export const Div = styled.div`
align-items: center;
color: #888;
display: inline-flex;
height: 100%;
text-decoration: none;
width: 100%;
margin-right: auto;

`

export const Ul = styled.ul`
${FadeIn({time:'0.3s'})}
background:#008dc9;
margin-left:auto;
box-shadow: 0 10px 14px rgba(0, 0, 0, .5);
height: 50px;
display: flex;
left: 0;
right: 0;
width: 100%;
justify-content: space-around;
bottom:0;
position:fixed;
z-index:1000;
@media(min-width:720px){
        display:none;
}
`
export const Li = styled.li`
padding: 10px;
`