import React from 'react'
import './Error.css'
import { MdErrorOutline } from 'react-icons/md'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
      <div className='errorContainer'>
        <MdErrorOutline size='25rem' />
        <h1>
                page not found
        </h1>
            <Link to='/'> Try Again</Link>
      </div>
    )
}

export default Error
