import { useState } from 'react'
import { SubmitButton } from './SubmitButton.jsx'
import './Input.css'

export function Input() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState({ name:'', email:'' })

  const handleSubmit = () => {
    setData({ name, email })
  }

  return (
  <div className='content'>
    <h1>Name:</h1>
    <input className="nameInput" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <h1>Email:</h1>
    <input className="emailInput" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <SubmitButton handleSubmit={handleSubmit} />
    <div className="outPut">
      <span>Name: {data.name}</span>
      <span>Email: {data.email}</span>
    </div>
  </div>
  )
}