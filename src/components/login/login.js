import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import swal from 'sweetalert'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../Redux/Actions/users'
import { connect } from 'react-redux'
import './login.css'

class FormLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loggedIn: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleLogin.bind(this);
        // this.toggle = this.toggle.bind(this);
    }

    toogle() {
        this.setState({
            modal: !this.state.modal
        })
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    handleLogin = async (event) => {
        // this.setState({
        //     modal: !prevState.modal
        // })
        event.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        await this.props.dispatch(login(data))
        console.log('wikwikwik :', data)
        if (this.props.users.token === undefined) {
            swal({
                title: 'Login',
                text: 'username or password wrong',
                icon: 'warning',
            })
            return window.location.href = "/Login"
        }
        window.localStorage.setItem('token', this.props.users.token)
        window.localStorage.setItem('halaman', 1)
        this.setState({
            loggedIn: true
        })

    }


    render() {
        if (window.localStorage.getItem('token')) return <Redirect to="../" />
        else {
            return (
                <div className='formLogin'>
                    <h1 className='loginTitle'>Login</h1>
                    <p className="sehay">Welcome Back Please Login <br /> to your account</p>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup row style={{ marginBottom: '0' }}>
                            <Col sm={12}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" required onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={12}>
                                <Input style={{ boxShadow: '0px 21px 25px -12px rgba(120,116,120,1)' }} type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={{ size: 10 }}>
                                <FormGroup check>
                                    <Label check style={{ color: '#D0CCCC', marginBottom: '20px' }}>
                                        <Input type="checkbox" id="checkbox2" />{' '}
                                        Remember Me</Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10 }} style={{ padding: '0' }}>
                                <Button style={{ marginRight: '15px', backgroundColor: '#000000', width: '110px' }}>Login</Button>
                                <Link to="register">
                                    <Button style={{ width: '110px', backgroundColor: '#FFFFFF', color: '#D0CCCC', border: '1px solid #D0CCCC' }}>SignUp</Button> </Link>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(FormLogin);


