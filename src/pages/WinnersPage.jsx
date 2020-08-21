import React, {useEffect, useState} from 'react'
import { NavBar, Winners } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {getWinners} from '../redux/actions'

export function WinnersPage(props) {
    const {winners} = useSelector(state=>state)
    const dispatch = useDispatch()

    const[winnerArray, setWinnerArray] = useState([])

    useEffect(()=>{
        dispatch(getWinners())
        setWinnerArray(winners)
    },[])

    console.log('winners', winners)
    
    return (
        <>
            <NavBar>
                <h3>Winners</h3>
            </NavBar>
            <Winners props={props} />
        </>
    )
}