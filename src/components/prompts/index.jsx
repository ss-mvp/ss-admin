import React from 'react'
import plus from '../../assets/plus.svg'
import PromptBar from './PromptBar'
import PromptHeader from './PromptHeader'
import AddPrompt from './AddPrompt'

export function Prompts() {
    return (
        <>
            <section className="prompts table-container mx-auto text-center">
                <div className="float-right m-3 text-primary">
                    <button type="button" className="btn btn-light" data-toggle="modal" data-target="#addPrompt">
                        <img src={plus} alt="add circle" />
                    </button>
                </div>
                <AddPrompt />
                <table className="table table-striped">
                    <PromptHeader />
                    <tbody>
                        {
                            [0,1,2,3,4,5,6,7,8,9,10].map(el => <PromptBar />)
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}
