import React from 'react'
import Button from '../button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { MdEdit, MdDeleteForever } from 'react-icons/md'
import {  deleteEntry } from '../actions/entryActions'



const Entries = () => {
  const entries = useSelector( ( state ) => state.entries ) 

  const dispatch = useDispatch()
  


  const handleDelete = (id) => {
    dispatch( deleteEntry(id) )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <table className='table table-primary table-striped table-hover'>
        <thead>
          <tr>
            <th>DATE</th>
            <th>DEBIT <br />OR <br /> CREDIT</th>
            <th>DESCRIPTION</th>
            <th>AMOUNT</th>
            <th>
              DELETE<br/>ENTRY
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>{entry.type}</td>
                <td>{entry.description}</td>
                <td>{entry.amount}</td>

                <td>
                  <Button
                    btnClass='btn btn-outline-danger'
                    clicked={() => handleDelete(entry.id)}
                  >
                    <MdDeleteForever />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Entries
