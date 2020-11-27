import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import { Footer as FooterApp, Anchor,Code } from './styles'
export const Footer = () => {
    return (
        <FooterApp>
            <Code>
                <div>Iconos diseñados por <Anchor href="https://www.flaticon.es/autores/good-ware" title="Good Ware">Good Ware</Anchor> from <Anchor href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</Anchor></div>  
            </Code>
            <div>Imagenes tomadas de <Anchor href="http://asoleche.org/">Asoleche</Anchor></div>
            <div>Los datos utilizados no son reales</div>
            <Anchor className="logo" href="https://github.com/daquesada/muuhack">
                <GoMarkGithub size={20} style={{marginTop:'10px', marginBottom:'30px'}}/>
            </Anchor>
        </FooterApp>
    )
}

