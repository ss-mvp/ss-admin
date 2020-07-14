import React from 'react'

export function NavBar({ children }) {
    return (
        <>
            <nav className="bg-primary text-white d-flex align-items-center justify-content-around">
               <main>
                   { children }
               </main>
            </nav>
        </>
    )
}
