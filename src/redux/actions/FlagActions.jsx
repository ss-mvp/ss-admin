import { AxiosWithAuth } from '../../utils'

export const ADMIN_FLAG = "ADMIN_FLAG"
export const ADMIN_UNFLAG = "ADMIN_UNFLAG"
export const ADMIN_SUBMIT_FLAG = "ADMIN_SUBMIT_FLAG"

export const adminFlag = (id) => async (dispatch) => {
    dispatch({ type: ADMIN_FLAG, payload: id });
    AxiosWithAuth().post(`http://localhost:5000/admin/flag/${id}`)
};

export const adminUnflag = (id) => async (dispatch) => {
    dispatch({ type: ADMIN_UNFLAG, payload: id });
    AxiosWithAuth().post(`http://localhost:5000/admin/flag/${id}`)
};

// export const adminSubmitFlag = (payload) => async (dispatch) => {
//     dispatch({ type: ADMIN_SUBMIT_FLAG });
//     try{
        
//     }
//     catch(err){

//     }
// };