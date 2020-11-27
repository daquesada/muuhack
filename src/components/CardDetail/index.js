import React, { useEffect, useState } from 'react'
import { Article, Img, ImgWrapper, Div, Title, Span, P } from './styles'
import { providers } from '../../providers.json'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SIZE = 30;
export const CardDetail = ({ id }) => {
    const [data, setData] = useState([{ avatar: '', nombre: '' }])

    useEffect(() => {
        setData(() => providers.filter(provider => provider.id === parseInt(id)));
    }, [id])
    return (
        <Article id={id} >
            <ImgWrapper>
                <Img src={data[0].avatar}></Img>
            </ImgWrapper>
            <Div>
                <Title>{data[0].nombre}</Title>
                <Span>
                    <P>Litros: {(Math.random() * 100).toFixed(2)} </P>
                    <P>Ubicación: {data[0].ubicacion}</P>
                    <P>Transporte: {data[0].transporte}</P>
                    <P >
                        {
                            [1, 2, 3, 4].map((v) =>
                                <AiFillStar size={SIZE} key={v} />
                            )
                        }
                        <AiOutlineStar size={SIZE} />
                    </P>
                    <P className="frase">"{data[0].frase}" </P>
                </Span>

            </Div>
        </Article>
    )
}