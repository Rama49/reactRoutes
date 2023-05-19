import React from 'react';
import {Link} from 'react-router-dom';



export default function Acceuil() {
  return (
    <div className='Acceuil'>
         <nav className='text-center '>
        <Link to='/Acceuil' className='me-5 text-decoration-none text-white bold'>Acceuil</Link>
        <Link to='/Service' className='me-5 text-decoration-none text-white bold'>Services</Link>
        <Link to='/Contacts' className='me-5 text-decoration-none text-white bold'>Contacts</Link>
      </nav>
       <h1 className='acc mt-5 pt-5 ms-5 text-white'>Bienvenue</h1>
    </div>
  )
}
