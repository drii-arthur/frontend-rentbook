import React from 'react'
import { Route } from 'react-router-dom'

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
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: this.isLoggedIn()
        }
        if (this.isLoggedIn())
            props.history.push('/')
    }

    isLoggedIn() {
        return window.localStorage.getItem("token") !== null
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8' style={bgStyle}>
                        <RightContent />
                    </div>
                    <Route
                        path={'/login'}
                        render={() => {
                            return (
                                this.state.loggedIn ? this.props.history.push('/') :
                                    <div className='col-md-4 px-5 pb-4'>
                                        <IconHeader />
                                        <FormLogin />
                                        <Footer />
                                    </div>
                            )
                        }}>

                    </Route>
                </div>
            </div >
        )
    }
}

export default Signin;