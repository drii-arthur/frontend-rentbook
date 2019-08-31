import React from 'react'
import icon from '../../Assets/Img/book1.png'
import './iconHeader.css'
import { Link } from 'react-router-dom'
const IconHeader = () => {
    return (
        <div className="logo">
            <Link to={'/book'}>
                <div className="imgIcon">
                    <img className="image" src={icon} />
                </div>
            </Link>
        </div>
    )
}

export default IconHeader