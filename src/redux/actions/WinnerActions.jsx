import {AxiosWithAuth} from '../../utils'

export const GET_WINNERS_START = "GET_WINNERS_START"
export const GET_WINNERS_SUCCESS = "GET_WINNERS_SUCCESS"
export const GET_WINNERS_FAIL = "GET_WINNERS_FAIL"

export const getWinners = () => async (dispatch) => {
    dispatch({type: GET_WINNERS_START});
    try{
        const winners = await AxiosWithAuth().get("/ranking/winner");
        console.log('winners from actions', winners)
        dispatch({type: GET_WINNERS_SUCCESS, payload: winners.data})

    } catch (err){
        console.log(err);
        dispatch({type: GET_WINNERS_FAIL, payload: err})
    }
}