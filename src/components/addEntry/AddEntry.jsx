import React, { useState } from 'react'
import './AddEntry.css'
import Button from '../button/Button'
import {MdNoteAdd} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {addEntry} from '../actions/entryActions'



const AddEntry = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')
  const [ date, setDate ] = useState('')
  
  const dispatch = useDispatch()  

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleType = (e) => {
    setType(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = ( e ) => {
    e.preventDefault()
    dispatch(addEntry({date,type, description, amount}))
  }
 
  return (
    <div>
      <form className='input-group' style={{ marginTop: '3rem' }}>
        <input
          className='form-control'
          type='date'
          value={date}
          onChange={handleDate}
        />
        <select className='form-select' value={type} onChange={handleType}>
          <option value='DEBIT'>Debit or Credit</option>
          <option value='DEBIT'>DEBIT</option>
          <option value='CREDIT'>CREDIT</option>
        </select>
        <input
          className='form-control'
          type='text'
          placeholder='Enter Description'
          value={description}
          onChange={handleDescription}
        />
        <input
          className='form-control'
          type='number'
          placeholder='Enter amount'
          value={amount}
          onChange={handleAmount}
        />
        <Button btnClass='btn btn-outline-success' clicked={handleSubmit}>
          <MdNoteAdd/>
        </Button>
      </form>
    </div>
  )
}

export default AddEntry
