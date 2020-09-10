import axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const GET_DATA_YES = 'GET_DATA_YES'
export const GET_DATA_NO = 'GET_DATA_NO'

export const getData = () => {
    return (dispatch) => {
        axios.get( 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0' )
        .then(res => {
            res.data.results.map(r => {
                return axios.get(r.url)
                          .then(res => {
                             dispatch({
                                 type: GET_DATA_YES,
                                 payload1: res.data.name,
                                 payload2: res.data.sprites.front_default,
                                 payload3: res.data.types
                                })                        
                    })
                })
            })
        .catch(err => {
            console.error(err)
            dispatch({ type: GET_DATA_NO, payload: 'Uh Oh seems like all the pokemon are running away...'})
        })
    }
}