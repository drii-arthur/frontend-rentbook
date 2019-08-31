import React from 'react'
import './search.css'
import icon from '../../Assets/Img/icon.png'

const Search = (props) => {
    return (
        <div>
            <div className="search">
                <input className="inputSearch" name="search" type='text' placeholder="Search Books . . ." onKeyPress={(val) => {
                    if (val.key === 'Enter') {
                        window.location.href = `/book?search=${val.target.value}`
                        window.localStorage.setItem('halaman', 1)
                        val.preventDefault()
                    }
                }} />
            </div>
            <div className="imgSearch">
                <img src={icon} className="img" alt="23" />
            </div>
        </div>
    )
}

export default Search