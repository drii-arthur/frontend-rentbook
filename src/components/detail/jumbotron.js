import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './jumbotron.css'


export default class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        const style = {
            backgroundImage: `url('${this.props.books.imageUrl}')`
        }
        return (
            <div className='jumbotron' style={style}>
                <div className="litleBook" style={style}></div>
                <div className="btn-back"></div>
                <div className="btn-edit">
                    <Button onClick={this.toggle} style={{ backgroundColor: 'transparent', border: 'none' }}><p style={{ color: "#fff", fontWeight: "bold" }}>Edit</p>{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{ maxWidth: '60%' }}>
                        <ModalHeader toggle={this.toggle} style={{ fontSize: '22px', borderBottom: 'none', padding: '25px' }}>Edit Data</ModalHeader>
                        <ModalBody style={{ padding: '25px' }}>

                            <Form>


                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Img url</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="img" id="exampleEmail" placeholder="https://imageurl.com" bsSize="lg" />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="exampleEmail2" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Title</Label>
                                    <Col sm={10}>
                                        <Input type="Title" name="email" id="exampleEmail2" placeholder="Title" bsSize="lg" />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="exampleText" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Description</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="text" id="exampleText" bsSize="lg" />
                                    </Col>
                                </FormGroup>
                            </Form>

                        </ModalBody>
                        <ModalFooter style={{ borderTop: 'none' }}>
                            <Button style={{ backgroundColor: '#F4CF5D', fontSize: '18px', marginRight: '19px', padding: '7px 25px', border: "none" }} onClick={this.toggle}>Save</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="btn-delete"><p>Delete</p></div>
            </div >
        )
    }
}