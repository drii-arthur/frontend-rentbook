import React from 'react'
import { Link } from 'react-router-dom'

import icon from '../../Assets/Img/book1.png'
import './righticon.css'

const RightIcon = () => {
    return (
        <Link to={'/book'}>
            <div className="icons">
                <img src={icon} className="imag" />
                <h5 style={{ display: 'inline', fontWeight: 'bold', color: "#424242", textDecoration: 'none' }}>Library</h5>
            </div>
        </Link>
    )
}

export default RightIcon