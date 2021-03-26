import React from 'react'
import './Display.css'

import AddEntry from '../../components/addEntry/AddEntry'
import Summary from '../../components/summary/Summary'
import Entries from '../../components/entries/Entries'

const Display = () => {
  return (
    <div className='container'>      
      <h1 className='mainh1'>Passbook</h1>
      <AddEntry />
      <Summary />
      <Entries />
    </div>
  )
}

export default Display
