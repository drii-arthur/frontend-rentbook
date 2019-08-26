import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import '../login/login.css'


export default class FormRegister extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: props.style,
      formData: {
        username: '',
        email: '',
        password: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newFormData = { ...this.state.formData }
    const target = event.target
    const name = target.name
    const value = target.value
    newFormData[name] = value
    this.setState({
      formData: newFormData
    })
  }

  handleSubmit(event) {
    Axios.post('http://localhost:8081/users/register', this.state.formData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    event.preventDefault();
  }
  render() {
    return (
      <div className='formLogin'>
        <h1 className='loginTitle'>Register</h1>
        <p className="sehay">Welcome Back Please Register <br /> to Create your account</p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row style={{ marginBottom: '0' }}>
            <Col sm={12}>
              <Input type="text" name="username" id="username" placeholder='Username' required onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row style={{ marginBottom: '0' }}>
            <Col sm={12}>
              <Input type="email" name="email" id="email" placeholder="Email Address" required onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row style={{ marginBottom: '35px' }}>
            <Col sm={12}>
              <Input style={{ boxShadow: '0px 21px 25px -12px rgba(120,116,120,1)' }} type="password" name="password" id="Password" placeholder="Password" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10 }} style={{ padding: '0' }}>
              <Button style={{ marginRight: '15px', backgroundColor: '#000000', width: '110px' }}>Signup</Button>
              <Link to="/login">
                <Button style={{ width: '110px', backgroundColor: '#FFFFFF', color: '#D0CCCC', border: '1px solid #D0CCCC' }}>Login</Button> </Link>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }

}
