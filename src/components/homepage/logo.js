import React from 'react'

import icon from '../../Assets/Img/book1.png'
import './righticon.css'

const RightIcon = () => {
    return (
        <div className="icons">
            <img src={icon} className="imag" />
            <h5 style={{ display: 'inline', fontWeight: 'bold' }}>Library</h5>
        </div>
    )
}

export default RightIcon