import { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../components/profile/types'
import { changeName } from '../components/profile/actions'

export function Profile() {
  const name = useSelector((store) => store.name)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const hendleChange = () => {
    console.log(value)
  
    dispatch(changeName(value))
    setValue('')
  }

  return (
    <>
      <h1>Profile </h1>
      <hr />
      <h2>{name}</h2>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(changeName(value))}>Change name</button>
    </>
  )
}