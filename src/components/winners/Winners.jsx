import React, {useEffect, useState} from 'react'
import { getWinners } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {WinnerBar} from './WinnerBar'

export function Winners({ props }) {
    
    const {winners} = useSelector(state=>state)
    const dispatch = useDispatch()
    
    const[winnerArray, setWinnerArray] = useState([])
    
    useEffect(()=>{
        dispatch(getWinners())

    },[])
    
    useEffect(()=>{
        if(winners){
            setWinnerArray(winners)

        }
    },[winners])

    return (
        <>
            <section className="table-container mx-auto my-5 text-center">
                <table className="table table-striped table-hover">
                <thead>
                <tr>
                    {
                        ["User", "Score", 'Submission'].map((el, ind) => <th key={ind}>{el}</th>)
                    }
                </tr>
            </thead>
                    <tbody>
                        { winnerArray && winnerArray.map(el => <WinnerBar key={el.id} index={el.id} user={el.user} winner={el} />) }
                    </tbody>
                </table>
            </section>
        </>
    )
}
