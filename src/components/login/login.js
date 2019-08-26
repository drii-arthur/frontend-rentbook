import React from 'react'
import axios from 'axios'
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import './login.css'


export default class FormLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: props.style,
            email: '',
            password: '',
            loggedIn: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loggingIn = this.loggingIn.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        axios.post('http://localhost:8081/users/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(this.loggingIn)
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }

    loggingIn(res) {
        const token = res.data.token
        document.cookie = `token=${token}`
        window.location.reload()
    }


    render() {
        if(document.cookie.includes('token')) return <Redirect to="../"/>
else {
        return (
            <div className='formLogin'>
                <h1 className='loginTitle'>Login</h1>
                <p className="sehay">Welcome Back Please Login <br /> to your account</p>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row style={{ marginBottom: '0' }}>
                        <Col sm={12}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" required  onChange={this.handleChange} />
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

