import React from 'react'
import Menu from './Menu'

export function NavBar({ children }) {
    return (
        <>
            <div className="bg-primary text-white d-flex align-items-center justify-content-around">
               <main className="d-flex align-items-center">
                    <h2 className="ss-title mx-5 my-3">Story Squad</h2>
                   { children }
               </main>
            </div>
            <Menu />
        </>
    )
}
