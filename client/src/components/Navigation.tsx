import React, { FC } from 'react'
import{Link} from 'react-router-dom'

import '../Styles/NavBar.css'

const Navigation: FC = () => {
  return (
    <div className='sum'>
        
        <nav className='item'>
            <ul className='ul'>
                <li>
                    <Link to='/dashboard' className='dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to='/notifications' className='notifications'>
                        Notifications
                    </Link>
                </li>
                <li>
                    <Link to='/settings' className='settings'>
                        Settings
                    </Link>
                </li>
                
            </ul>
        </nav>
    </div>
  )
}

export default Navigation



