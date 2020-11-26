import React from 'react'
import { providers } from '../../providers.json'
import { Card } from '../Card'

export const ListOfProviders = ()=>{
    return(
        <div >
            {
                providers.map((provider)=>
                <Card key={provider.id} {...provider} />
                )
            }
        </div>
    )
}