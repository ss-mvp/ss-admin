import React from 'react'
import { NavBar, TopTenStories } from '../components'

export function TopTenPage() {
    
    return (
        <>
            <NavBar>
                <h3>Top 10 Stories</h3>
            </NavBar>
            <TopTenStories />
        </>
    )
}
