import React from 'react'
 import './index.css'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <ul className='list-container'>
            <li className=' dash dashboard'>Dashboard</li>
            <li className='item'>Inventory</li>
            <li className='item'>Orders</li>
            <li className='item'>Returns</li>
            <li className='item'>Customers</li>
            <li className='item'>Shipping</li>
            <li className='item'>Integrations</li>
            <li className='item'>Collaborators</li>
            <li className='item'>Reports</li>
            <li className='item'>Account</li>


        </ul>

    </div>
  )
}
export default SideBar