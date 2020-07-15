import React from 'react'
import { useHistory } from 'react-router-dom'
import { AxiosWithAuth } from '../../utils/AxiosWithAuth'

export default function DeletePrompt(props, eachPrompt) {

    const history = useHistory()
    
    const { id, prompt } = props.eachPrompt
    console.log(props.props)

    const deletePrompt = async(e) => {
        try {
            const res = await AxiosWithAuth().delete(`upload/prompts/${id}`)
            console.log(res.data.message)
            history.push("/prompts")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="modal fade" id={`deleteModal${id}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
    <h5 className="modal-title">Delete Prompt ID { id } </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>You are about to delete [{ prompt }]. Are you sure you want to delete this prompt?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onSubmit={ deletePrompt }>Yes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
