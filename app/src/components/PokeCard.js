import React from 'react'

function PokeCard({ info }){
    return (
        <>
          <div>
            <img src = {info.sprites.front_default} alt = {info.sprites.front_default} height = '150px'></img>
            <h4>{info.name}</h4>
            <div className = 'types'>
               Type:
               {info.types.map(t => {
                   return <li>{t.type.name}</li>
               })}
            </div>
          </div>
        </>
    )
}

export default PokeCard