import React from 'react'
import './search.css'
import icon from '../../Assets/Img/icon.png'

const Search = () => {
    return (
        <div>
            <div className="search">
                <input className="inputSearch" type='text' placeholder="Search Books . . ." />
            </div>
            <div className="imgSearch">
                <img src={icon} className="img" alt="23" />
            </div>
        </div>
    )
}

export default Search