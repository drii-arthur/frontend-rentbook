import React from 'react'
import icon from '../../Assets/Img/book1.png'
import './iconHeader.css'
const IconHeader = () => {
    return (
        <div className="logo">
            <div className="imgIcon">
                <img className="image" src={icon} />
            </div>
        </div>
    )
}

export default IconHeader