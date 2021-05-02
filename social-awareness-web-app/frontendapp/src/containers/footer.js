import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
            <Link className='links' to='/'>
                Home
            </Link>
            <Link className='links' to='/'>
                Suggestion Box
            </Link>
            <Link className='links' to='/'>
                Privacy Policy
            </Link>
            <Link className='links' to='/contact'>
                Contact Us
            </Link>
            </ul>
    </footer>
  )
}

export default Footer