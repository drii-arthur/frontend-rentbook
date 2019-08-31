import React from 'react'
import './footer.css'


const Footer = () => {
    return (
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <p style={{ color: "#fff", marginTop: '1rem', marginBottom: '0px' }}>copyright &copy; 2019</p>
                        <p style={{ color: '#485460' }} > created by : <span>Muhammad Pandriadi</span></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer