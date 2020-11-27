import React, { Fragment } from 'react'
import { ImgWrapper, Article, Img, Div, Title } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import {Link} from '@reach/router'

export const Card = ({ id, avatar, nombre }) => {
    const [show, element] = useNearScreen();

    return (
        <Article id={id} ref={element}>
            {
                show &&
                <Fragment>
                    <Link to={`/detalle/${id}`} >
                        <ImgWrapper>
                            <Img src={avatar}></Img>
                        </ImgWrapper>
                    </Link>
                    <Div>
                       <Title>{nombre}</Title>
                       <Title className='proveedor' >Proveedor</Title>
                    </Div>
                </Fragment>
            }
        </Article>
    )
}