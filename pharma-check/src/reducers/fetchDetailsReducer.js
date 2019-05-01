import { FETCH_DETAILS } from '../actions/types'

const initialState = {
    detail: {}
  };


export default function(state = initialState, action){
    switch (action.type){
        case FETCH_DETAILS:
            return{
                ...state,
                detail: action.payload
            }
        default:
            return state;
    }
}