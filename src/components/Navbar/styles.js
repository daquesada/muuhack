import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
background:#343a40;
align-items: center;
box-shadow: 0 10px 14px rgba(0, 0, 0, .5);
height: 50px;
display: flex;
top: 0;
left: 0;
right: 0;
width: 100%;
margin-bottom: 20px;
justify-content: space-around;
`

export const Link = styled(LinkRouter)`
align-items: center;
color: #888;
display: inline-flex;
height: 100%;
justify-content: center;
text-decoration: none;
width: 100%;
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