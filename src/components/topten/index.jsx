import React from 'react'
import { TopTenBar } from "./TopTenBar"
import { TopTenHeader } from "./TopTenHeader"

export function TopTenStories() {
    return (
        <>
            <section className="table-container mx-auto my-5 text-center">
                <table className="table table-striped table-hover">
                    <TopTenHeader />
                    <tbody>
                    </tbody>
                </table>
            </section>
        </>
    )
}
