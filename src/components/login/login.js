import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import './login.css'


const FormLogin = () => {
    return (
        <div className='formLogin'>
            <h1 className='loginTitle'>Login</h1>
            <p className="sehay">Welcome Back Please Login <br /> to your account</p>
            <Form>
                <FormGroup row style={{ marginBottom: '0' }}>
                    <Col sm={12}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" required />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Input style={{ boxShadow: '0px 21px 25px -12px rgba(120,116,120,1)' }} type="password" name="password" id="examplePassword" placeholder="Password" />
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
                        <Button style={{ width: '110px', backgroundColor: '#FFFFFF', color: '#D0CCCC', border: '1px solid #D0CCCC' }}>SignUp</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default FormLogin