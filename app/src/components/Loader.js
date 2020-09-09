import React from 'react'
import { connect } from 'react-redux'
import PokeCard from './PokeCard'

function Loader(props) {
    return (
        <>
          <h3>Choose your Pokemon</h3>
          {props.data.map(info => {
              return <PokeCard info = {info} />
          })}
        </>
    )
}

function mapStateToProps(state){
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {})(Loader)