import React from 'react'
import { Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/weather' > Weather </Link> 
                </li>
                <li>
                     <Link to = 'settings'>Settings</Link>
                </li>
                <li>
                    <Link to='/'> Home </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
