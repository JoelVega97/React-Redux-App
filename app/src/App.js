import React, { useEffect } from 'react';
import './App.css';
import Loader from './components/Loader'
import {connect} from 'react-redux'
import {getData} from './store/actions'

function App({getData, loadingData}) {

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <h2>All 151 OG POKEMON</h2>
      {!loadingData ? <Loader /> : <div>Catching the pokemon...</div>}
    </div>
  );
}

function mapStateToProps(state){
  return {
    loadingData: state.loadingData
  }
}

export default connect( mapStateToProps ,{getData})(App);
