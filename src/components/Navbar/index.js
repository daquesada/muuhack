import React, { Fragment, useState } from 'react'
import { Nav, Link, Div, Ul, Li } from './styles'
import { MdHome, MdInfoOutline } from 'react-icons/md'
import { Logo } from '../Logo'
import { HiUsers } from "react-icons/hi";
const SIZE = '35px'

export const Navbar = () => {
    const [state, setState] = useState(false)
    return (
        <Fragment>
            <Nav>
                <Div>
                    <Logo />
                </Div>
                <Div className='responsive' >
                    <Link to='/'>
                        <MdHome size={SIZE} />
                    </Link>
                    <Link to='/home'>
                        <MdInfoOutline size={SIZE} />
                    </Link>
                    <Link to='/acerca'>
                        <HiUsers size={SIZE} />
                    </Link>
                </Div>
            </Nav>
                <Ul>
                    <Li>
                        <Link to='/' onClick={() => setState(!state)}>
                            <MdHome size={SIZE} />
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/home'>
                            <MdInfoOutline size={SIZE} onClick={() => setState(!state)}/>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/acerca'>
                            <HiUsers size={SIZE} onClick={() => setState(!state)}/>
                        </Link>
                    </Li>
                </Ul>
 
        </Fragment>
    )
}