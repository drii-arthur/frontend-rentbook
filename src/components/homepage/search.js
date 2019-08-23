import React from 'react'
import './search.css'
import icon from '../../Assets/Img/icon.png'

const Search = () => {
    return (
        <div className="box">
            <div className="search">
                <input className="inputSearch" type='text' placeholder="Search Books . . ." />
            </div>
            <div className="imgSearch">
                <img src={icon} className="img" />
            </div>
        </div>
    )
}

export default Search