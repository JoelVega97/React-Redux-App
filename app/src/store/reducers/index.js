import {GET_DATA, GET_DATA_YES, GET_DATA_NO} from '../actions'

const initalstate = {
    info: [{
        name: '',
        sprites: {front_default: ''},
        types: ''
    }],
    loadingData: false,
}

export default (state = initalstate, action) => {
    switch (action.type){
        case GET_DATA:
            return {
                ...state,
                loadingData: true
            }
        case GET_DATA_YES:
            // console.log(state)
            return {
                ...state,
                state: 
                {
                    info: [{
                        name: action.payload1,
                        sprites: {front_default: action.payload2},
                        types: action.payload3
                    }]
                },
                loadingData: false
            }
        case GET_DATA_NO:
            return {
                ...state
            }
        default:
            return state
    }
}