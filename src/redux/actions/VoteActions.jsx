import { AxiosWithAuth } from '../../utils'

export const ADMIN_VOTE = "ADMIN_VOTE"
export const ADMIN_UNVOTE = "ADMIN_UNVOTE"
export const ADMIN_SUBMIT_VOTE = "ADMIN_SUBMIT_VOTE"
export const ADMIN_SUBMIT_VOTE_SUCCESS = "ADMIN_SUBMIT_SUCCESS"
export const ADMIN_SUBMIT_VOTE_FAIL = "ADMIN_SUBMIT_FAIL"

export const adminVote = (payload) => async (dispatch) => {
    dispatch({ type: ADMIN_VOTE, payload });
};

export const adminUnvote = (payload) => async (dispatch) => {
    dispatch({ type: ADMIN_UNVOTE, payload });
};

export const adminSubmitVote = (payload) => async (dispatch) => {
    console.log(payload.prompt_id)
    dispatch({ type: ADMIN_SUBMIT_VOTE });
    try{
        const response = await AxiosWithAuth().post(`/admin/setwinners/${payload.prompt_id}`, payload.votes)
        console.log(response.data)
        dispatch({ type: ADMIN_SUBMIT_VOTE_SUCCESS, payload: response.data })
    }
    catch(err){
        dispatch({ type: ADMIN_SUBMIT_VOTE_FAIL, payload: err })
    }
};