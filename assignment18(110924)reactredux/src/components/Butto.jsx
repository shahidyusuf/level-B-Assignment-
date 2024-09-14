import React from 'react'
import { addCounter, minusCounter } from '../store/slices/counteSlice'
import { useDispatch } from 'react-redux'

const Butto = () => {
    const dispatch = useDispatch();
    const handleAction = () => {
        
        dispatch(addCounter())
    }
    const handleAction2 = () => {
        
        dispatch(minusCounter())
    }
  return (
    <div>
        <button onClick={handleAction}>Add Submit</button>
        <button onClick={handleAction2}>Delete Submit</button>
    </div>
  )
}

export default Butto