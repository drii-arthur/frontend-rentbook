import React from 'react'

// import Link from 'react-router-dom'
import FormLogin from '../components/login/login'
import RightContent from '../components/login/rightContent'
import IconHeader from '../components/login/iconHeader'
import Footer from '../components/login/footer'
import bg from '../Assets/Img/bg.jpg'

let bgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'repeat y',
    backgroundSize: '50%',
    backgroundPosition: '50% 50%'
}

class Signin extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8' style={bgStyle}>
                        <RightContent />
                    </div>
                    <div className='col-md-4 px-5 pb-4'>
                        <IconHeader />
                        <FormLogin />
                        <Footer />
                    </div>
                </div>
            </div >
        )
    }
}

export default Signin;