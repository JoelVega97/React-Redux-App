import React from 'react'
import { connect } from 'react-redux'
import PokeCard from './PokeCard'

function Loader(props) {
    return (
        <>
          <h3>Choose your Pokemon</h3>
          {props.info.forEach(data => {
              return <PokeCard key = {data.id} info = {data} />
          })}
        </>
    )
}

function mapStateToProps(state){
    return {
        info: state.info
    }
}

export default connect(mapStateToProps, {})(Loader)