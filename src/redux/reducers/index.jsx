// import { 
//     ADMIN_FLAG, ADMIN_UNFLAG, ADMIN_SUBMIT_FLAG, 
//     ADMIN_VOTE, ADMIN_UNVOTE, ADMIN_SUBMIT_VOTE,
//     GET_SUBMISSIONS_START, GET_SUBMISSIONS_SUCCESS, GET_SUBMISSIONS_FAIL
// } from '../actions'

import { 
    ADMIN_FLAG, ADMIN_UNFLAG, ADMIN_SUBMIT_FLAG, 
    ADMIN_VOTE, ADMIN_UNVOTE, ADMIN_SUBMIT_VOTE,
    GET_SUBMISSIONS_START, GET_SUBMISSIONS_SUCCESS, GET_SUBMISSIONS_FAIL, ADMIN_SUBMIT_VOTE_SUCCESS, GET_WINNERS_START, GET_WINNERS_SUCCESS, GET_WINNERS_FAIL,
    GET_SQUADSCORE_START,
    GET_SQUADSCORE_SUCCESS,
    GET_SQUADSCORE_FAIL
} from '../actions'

export const initialState = {
    submissions: [],
    winners: [],
    votes: [],
    flagged: [],
    prompt_id: null,
    isFetching: false,
    isFetched: true,
    hasAdminVoted: false,
    hasAdminFlagged: false,
    age: 0,
    squadScore: 0
}


export const rootReducers = (state = initialState, action) => {
    switch(action.type){
        //type, users, submissions
        //added flagged and voted
        case GET_SUBMISSIONS_SUCCESS || ADMIN_SUBMIT_VOTE_SUCCESS:
            const topThreeExist = action.submissions.data.subs.filter(el => el.topThree === true)
            let hasVoted;
            if (topThreeExist.length ===3){
                hasVoted = true
            } else {
                hasVoted = false
            }
            return {
                ...state,
                submissions: action.submissions.data.subs,
                votes: action.submissions.data.subs.filter(el => el.vote === true),
                topThree: topThreeExist,
                hasAdminVoted: hasVoted,
                age: action.submissions.data.age,
                squadScore: action.submissions.data.score
            }

        case ADMIN_VOTE:
            if (state.votes.length < 3){
                return {
                    ...state,
                    submissions: state.submissions.map(el=> {
                        if (el.id === action.payload.story_id) {
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
                    if (el.id === action.payload.story_id) {
                        return { ...el, vote: true }
                    }
                    if (el.id === first.story_id){
                        return { ...el, vote: false }
                    }
                    return el
                }),
                votes: newVotes.filter(each => each.story_id !== first.story_id)
                }
            }
            
        case ADMIN_UNVOTE:
            return {
                ...state,
                submissions: state.submissions.map(el => {
                    if (el.id === action.payload.story_id) {
                        return { ...el, vote: false }
                    }
                    return el
                }),
                votes: state.votes.filter(each => each.story_id !== action.payload.story_id)
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
                            return { ...el, flagged: true, hasAdminFlagged: true}
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
                            return { ...el, flagged: false, hasAdminFlagged: false }
                        }
                        return el
                    }),
                    flagged: state.flagged.filter(each => each !== action.payload)
                }
                
            // case ADMIN_SUBMIT_FLAG:
            //     return {
            //         ...state,
            //         hasAdminFlagged: true
            //     }

            case GET_WINNERS_SUCCESS:
                console.log('payload', action.payload)
                return {
                    ...state,
                    winners: [...action.payload]
                }
        default:
            return state;
    }
}