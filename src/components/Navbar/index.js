import React from 'react'
import { Nav,Link } from './styles'
import { MdHome, MdInfoOutline, MdPlace } from 'react-icons/md'
const SIZE= '35px'
export const Navbar = () => {
    return (
        <Nav>
            <Link to='/'>
                <MdHome size={SIZE}/>
            </Link>
            <Link to='/mapa'>
                <MdPlace size={SIZE}/>
            </Link>
            <Link to='/acerca'>
                <MdInfoOutline size={SIZE} />
            </Link>
        </Nav>
    )
}