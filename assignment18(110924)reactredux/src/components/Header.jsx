import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    // const selector = useSelector((state)=>state.counterReducer)
    const {counter} = useSelector((state)=>state.counterReducer)
    // console.log(selector)
    console.log(counter)
  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}

export default Header