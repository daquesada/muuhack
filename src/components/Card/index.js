import React, { Fragment } from 'react'
import { ImgWrapper, Article, Img, Div } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'

export const Card = ({ id, avatar, nombre }) => {
    const [show, element] = useNearScreen();

    return (
        <Article id={id} ref={element}>
            {
                show &&
                <Fragment>
                    <ImgWrapper>
                        <Img src={avatar}></Img>
                    </ImgWrapper>
                    <Div>{nombre}</Div>
                </Fragment>
            }
        </Article>
    )
}