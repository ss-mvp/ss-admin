import { AxiosWithAuth } from '../../utils'

export const GET_SUBMISSIONS_START = "GET_SUBMISSIONS_START"
export const GET_SUBMISSIONS_SUCCESS = "GET_SUBMISSIONS_SUCCESS"
export const GET_SUBMISSIONS_FAIL = "GET_SUBMISSIONS_FAIL"

export const getSubmissions = () => async (dispatch) => {
    dispatch({ type: GET_SUBMISSIONS_START });
    try {
      const users = await AxiosWithAuth().get("admin/users");
      const submissions = await AxiosWithAuth().get("admin/winners");
      dispatch({ type: GET_SUBMISSIONS_SUCCESS, users, submissions })
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SUBMISSIONS_FAIL, payload: error });
    }
};