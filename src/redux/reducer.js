import {INCREASE_COUNTER,DECREASE_COUNTER} from './actionType'

const init = {
    counter:0,
    todos:[]
}

export const reducer =(state= init,{type,payload})=>{
    switch(type){
        case INCREASE_COUNTER:
        return {
            ...state,counter:state.counter+payload
        }

        case DECREASE_COUNTER:
        return {
            ...state,counter:state.counter-payload
        }

        default:
        return state
    }
}