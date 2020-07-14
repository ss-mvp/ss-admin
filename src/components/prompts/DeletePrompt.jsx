import React from 'react'
import { AxiosWithAuth } from '../../utils/AxiosWithAuth'

export default function DeletePrompt({ id, prompt }) {

    const deletePrompt = async(e) => {
        try {
            await AxiosWithAuth.delete(`/${id}`)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog">
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
                        <button type="button" className="btn btn-primary" onClick={ deletePrompt }>Yes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
