import React, { Fragment, useState } from 'react'
import { Nav, Link, Div, Button, Ul, Li } from './styles'
import { MdHome, MdInfoOutline, MdPlace } from 'react-icons/md'
import { Logo } from '../Logo'
import { GiHamburgerMenu } from "react-icons/gi";
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
                        <MdPlace size={SIZE} />
                    </Link>
                    <Link to='/acerca'>
                        <MdInfoOutline size={SIZE} />
                    </Link>
                </Div>
                <Div className='sidebar'>
                    <Button onClick={() => setState(!state)}> <GiHamburgerMenu size={SIZE} /> </Button>
                </Div>
            </Nav>
            {
                state &&
                <Ul>
                    <Li>
                        <Link to='/' onClick={() => setState(!state)}>
                            <MdHome size={SIZE} />
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/home'>
                            <MdPlace size={SIZE} onClick={() => setState(!state)}/>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/acerca'>
                            <MdInfoOutline size={SIZE} onClick={() => setState(!state)}/>
                        </Link>
                    </Li>
                </Ul>
            }
        </Fragment>
    )
}