import { 
    ADMIN_FLAG, ADMIN_UNFLAG, ADMIN_SUBMIT_FLAG, 
    ADMIN_VOTE, ADMIN_UNVOTE, ADMIN_SUBMIT_VOTE,
    GET_SUBMISSIONS_START, GET_SUBMISSIONS_SUCCESS, GET_SUBMISSIONS_FAIL
} from '../actions'

export const initialState = {
    submissions: [],
    votes: [],
    flagged: [],
    isFetching: false,
    isFetched: true,
    hasAdminVoted: false,
    hasAdminFlagged: false
}

export const rootReducers = (state = initialState, action) => {
    switch(action.type){
        //type, users, submissions
        //added flagged and voted
        case GET_SUBMISSIONS_SUCCESS:
            console.log(action)
            return {
                ...state,
                submissions: action.submissions.data.subs.map(el => {
                    return {
                        ...el,
                        user: action.users.data.users.filter(user => parseInt(user.id) === parseInt(el.userId)),
                        // vote: false
                    }
                })
            }
        case ADMIN_VOTE:
            if (state.votes.length < 3){
                return {
                    ...state,
                    submissions: state.submissions.map(el=> {
                        if (el.id === action.payload) {
                            return { ...el, vote: true}
                        }
                        return el
                    }),
                    votes: [...state.votes, action.payload]
                }
            } else {
                let first = state.votes[0]
                let newVotes = [...state.votes, action.payload]
                return {
                    ...state,
                    submissions: state.submissions.map(el=> {
                    if (el.id === action.payload) {
                        return { ...el, vote: true }
                    }
                    if (el.id === first){
                        return { ...el, vote: false }
                    }
                    return el
                }),
                votes: newVotes.filter(each => each !== first)
                }
            }
            
        case ADMIN_UNVOTE:
            return {
                ...state,
                submissions: state.submissions.map(el => {
                    if (el.id === action.payload) {
                        return { ...el, vote: false }
                    }
                    return el
                }),
                votes: state.votes.filter(each => each !== action.payload)
            }
            
        case ADMIN_SUBMIT_VOTE:
            return {
                ...state,
                hasAdminVoted: true //this is to disabled submit button
            }

            case ADMIN_FLAG:
                return {
                    ...state,
                    submissions: state.submissions.map(el=> {
                        if (el.id === action.payload) {
                            return { ...el, flagged: true}
                        }
                        return el
                    }),
                    flagged: [...state.flagged, action.payload]
                }
    
            case ADMIN_UNFLAG:
                return {
                    ...state,
                    submissions: state.submissions.map(el=> {
                        if (el.id === action.payload) {
                            return { ...el, flagged: false }
                        }
                        return el
                    }),
                    flagged: state.flagged.filter(each => each !== action.payload)
                }
                
            case ADMIN_SUBMIT_FLAG:
                return {
                    ...state,
                    hasAdminFlagged: true
                }
        default:
            return state;
    }
}