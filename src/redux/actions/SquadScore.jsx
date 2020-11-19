import {AxiosWithAuth} from '../../utils'

export const GET_SQUADSCORE_START = "GET_SQUADSCORE_START"
export const GET_SQUADSCORE_SUCCESS = "GET_SQUADSCORE_SUCCESS"
export const GET_SQUADSCORE_FAIL = "GET_SQUADSCORE_FAIL"

export const getSquadScore = () => async (dispatch) => {
    dispatch({type: GET_SQUADSCORE_START});
    try{
        const winners = await AxiosWithAuth().get("/ranking/squadscore");
        console.log('winners from actions', winners)
        dispatch({type: GET_SQUADSCORE_SUCCESS, payload: winners.data})

    } catch (err){
        console.log(err);
        dispatch({type: GET_SQUADSCORE_FAIL, payload: err})
    }
}