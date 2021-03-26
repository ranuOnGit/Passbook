import React from 'react'
import { useSelector } from 'react-redux'
import './Summary.css'

const Summary = () => {
  const summary = useSelector((state) => state.entries)

  const getTotalAmount = () => {
    let totalAmount = 0
    summary.forEach((el) => {
      if (el.type === 'DEBIT') {
        totalAmount += parseInt(el.amount)
      } else if (el.type === 'CREDIT') {
        totalAmount -= parseInt(el.amount)
      }
    })
    return totalAmount
  }

  return <h3 className='summary'>PassBook Summary : $ {getTotalAmount()}</h3>
}

export default Summary
