import React from 'react'
import { useDispatch } from 'react-redux'
import { adminFlag, adminUnflag } from '../../../redux/actions'

export default function FlagButton({ submission }) {

    const dispatch = useDispatch()

    const handleFlag = () => {
        dispatch(adminFlag(submission.id))
    }

    const handleUnflag = () => {
        dispatch(adminUnflag(submission.id))
    }

    return (
        <div>
            {
                submission.flagged ?
                    <button
                        type="submit"
                        onClick={ handleUnflag }
                        className="btn btn-danger m-2 px-4">
                            Un-Flag
                    </button>
                    :
                    <button
                        type="submit"
                        onClick={ handleFlag }
                        className="btn btn-warning m-2 px-4">
                            Flag
                    </button>
            }
        </div>
    )
}
