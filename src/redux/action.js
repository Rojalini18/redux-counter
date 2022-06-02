import {INCREASE_COUNTER,DECREASE_COUNTER} from './actionType'

export const increaseCounter=(payload)=>{
    return {
        type: INCREASE_COUNTER,
        payload:payload,
    }
}

export const decreaseCounter=(payload)=>{
    return {
        type: DECREASE_COUNTER,
        payload:payload,
    }
}
