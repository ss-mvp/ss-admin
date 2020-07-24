import React from 'react'
import { NavBar, TopTenStories } from '../components'

export function TopTenPage(props) {
    
    return (
        <>
            <NavBar>
                <h3>Top 10 Stories</h3>
            </NavBar>
            <TopTenStories props={props} />
        </>
    )
}
