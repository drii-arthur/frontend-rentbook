import React from 'react'
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
import './sidebar.css'

export default class SidebarUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username || "dummy",
            image: props.image || "https://bacaanmenarikku.files.wordpress.com/2016/03/tumblr_nmxybqyudk1u34m9qo1_1280.jpg",
            explore: 'Explore',

            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div className="text-center">
                <img src={this.state.image} alt="user" className="User-picture" />
                <h5 className="username">{this.state.username}</h5>
                <h6 className="explore">Explore</h6>
                <h6 className="history">History</h6>
                <h6 className="addBook">
                    <Button onClick={this.toggle} style={{ backgroundColor: 'transparent', border: 'none' }}><p style={{ color: "#000000", fontWeight: "bold" }}>*Add Books</p>{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{ maxWidth: '60%' }}>
                        <ModalHeader toggle={this.toggle} style={{ fontSize: '22px', borderBottom: 'none', padding: '25px' }}>Add Data</ModalHeader>
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

                                <FormGroup row>
                                    <Label for="exampleEmail2" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Date Release</Label>
                                    <Col sm={10}>
                                        <Input type="Title" name="date release" id="exampleEmail2" bsSize="lg" />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="exampleSelect" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Genre</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>Romance</option>
                                            <option>Fantasi</option>
                                            <option>Drama</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </Col>
                                </FormGroup>

                            </Form>

                        </ModalBody>
                        <ModalFooter style={{ borderTop: 'none' }}>
                            <Button style={{ backgroundColor: '#F4CF5D', fontSize: '18px', marginRight: '19px', padding: '7px 25px', border: "none" }} onClick={this.toggle}>Save</Button>
                        </ModalFooter>
                    </Modal>
                </h6>

            </div>)
    }
}
