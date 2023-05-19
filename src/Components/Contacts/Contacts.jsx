import React from 'react';
import {Link} from 'react-router-dom';

export default function Contacts() {
  return (
    <div className='Acceuil text-white'>
    <nav className='text-center '>
   <Link to='/Acceuil' className='me-5 text-decoration-none text-white'>Acceuil</Link>
   <Link to='/Service' className='me-5 text-decoration-none text-white'>Services</Link>
   <Link to='/Contacts' className='me-5 text-decoration-none text-white'>Contacts</Link>
 </nav>
  <h1 className='mt-5 pt-5] acc '>Nous <br /> Contacter</h1>
</div>
  )
}
