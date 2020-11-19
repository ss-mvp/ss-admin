import {AxiosWithAuth} from '../../utils'

export const GET_AGE_START = "GET_AGE_START"
export const GET_AGE_SUCCESS = "GET_AGE_SUCCESS"
export const GET_AGE_FAIL = "GET_AGE_FAIL"

export const getWinners = () => async (dispatch) => {
    dispatch({type: GET_AGE_START});
    try{
        const winners = await AxiosWithAuth().get("/ranking/age");
        console.log('winners from actions', winners)
        dispatch({type: GET_AGE_SUCCESS, payload: winners.data})

    } catch (err){
        console.log(err);
        dispatch({type: GET_AGE_FAIL, payload: err})
    }
}