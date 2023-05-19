import React from 'react';
import {Link, Outlet} from 'react-router-dom';



export default function Service() {
  return (
    <div className='Acceuil text-white'>
         <nav className='text-center '>
        <Link to='/Acceuil' className='me-5 text-decoration-none text-white'>Acceuil</Link>
        <Link to='/Service'  className='me-5 text-decoration-none text-white'>Services</Link>
        <Link to='/Contacts' className='me-5 text-decoration-none text-white'>Contacts</Link>
      </nav>
       <h1 className='mt-5 pt-5 acc ms-5'>Nos <br /> Services</h1>
       <nav className="w-50 text-center">
        <Link to='/Service/Admin' className='me-5 text-decoration-none text-white'>Services Administratives</Link>
        <Link to='/Service/Etat' className='me-5 text-decoration-none text-white'>Services D'etats</Link>
       </nav>
       <Outlet />
    </div>
  )
}
