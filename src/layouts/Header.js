import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='menu'>
            <Link to='/' className='link'>
                <div className='menu-item'>Logical Test</div>
            </Link>
            <Link to='/dev-test' className='link' >
                <div className='menu-item'>Development Test</div>
            </Link>
        </div>
    )
}

export default Header