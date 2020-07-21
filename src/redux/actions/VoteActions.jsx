import { AxiosWithAuth } from '../../utils'

export const ADMIN_VOTE = "ADMIN_VOTE"
export const ADMIN_UNVOTE = "ADMIN_UNVOTE"
export const ADMIN_SUBMIT_VOTE = "ADMIN_SUBMIT_VOTE"

export const adminVote = (id) => async (dispatch) => {
    dispatch({ type: ADMIN_VOTE, payload: id });
    
};

export const adminUnvote = (id) => async (dispatch) => {
    dispatch({ type: ADMIN_UNVOTE, payload: id });
    
};

export const adminSubmitVote = (payload) => async (dispatch) => {
    dispatch({ type: ADMIN_SUBMIT_VOTE });
    try{
        
    }
    catch(err){

    }
};