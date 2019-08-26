import React from 'react';
import axios from 'axios'
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
import './edit.css'


export default class EditData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            genreList: [],
            id_books: props.id_books,
            formData: {
                image: props.image,
                title: props.title,
                genre: props.genre,
                description: props.description,
                date_released: props.date_released,
            },
        };
console.log(this.state)
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
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
        console.log(this.state.formData)
    }

    handleSubmit(event) {
        axios.patch(`http://localhost:8081/book/${this.state.id_books}`, this.state.formData, {
            headers: {
                Authorization: document.cookie.split("=")[1],
            }
        })
            .then(res => {
                this.setState({
                    showModal: true,
                    modalTitle: "Success",
                    modalMessage: res.data.message,
                })
            })
            .catch(err => console.log(err))
        event.preventDefault();
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/genre/cat')
            .then(res => {
                this.setState({ genreList: res.data });
            })
            .catch(err => console.log('error =', err));
    };
    render() {
        const { genreList } = this.state
        return (
            <div>
                <Button onClick={this.toggle} style={{ backgroundColor: 'transparent', border: 'none' }}><p style={{ color: "#fff", fontWeight: "bold" }}>Edit</p>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{ maxWidth: '60%' }}>
                    <ModalHeader toggle={this.toggle} style={{ fontSize: '22px', borderBottom: 'none', padding: '25px' }}>Edit Data</ModalHeader>
                    <ModalBody style={{ padding: '25px' }}>

                        <Form onSubmit={this.handleSubmit}>


                            <FormGroup row>
                                <Label for="exampleEmail" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Img url</Label>
                                <Col sm={10}>
                                    <Input type="text" name="image" id="exampleEmail" placeholder="https://imageurl.com" bsSize="lg" onChange={this.handleChange} />
                                </Col>
                            </FormGroup>


                            <FormGroup row>
                                <Label for="exampleEmail2" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Title</Label>
                                <Col sm={10}>
                                    <Input type="text" name="title" id="exampleEmail2" placeholder="Title" bsSize="lg" value={this.state.formData.title} onChange={this.handleChange} />
                                </Col>
                            </FormGroup>


                            <FormGroup row>
                                <Label for="exampleText" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Description</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="description" id="exampleText" bsSize="lg" value={this.state.formData.description} onChange={this.handleChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail2" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Date Release</Label>
                                <Col sm={10}>
                                    <Input type="date" name="date_released" id="exampleEmail2" bsSize="lg" onChange={this.handleChange} value={this.state.formData.date_released} onChange={this.handleChange} />
                                </Col>
                            </FormGroup>


                            <FormGroup row>
                                <Label for="exampleSelect" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Genre</Label>
                                <Col sm={10}>
                                    <Input type="select" name="genre" id="exampleSelect" as="select" name="genre" onChange={this.handleChange}>
                                        {genreList.length !== 0 ? genreList.map((genre) => {
                                            return <option value={genre.id_genre} key={genre.id_genre}> {genre.genre_name} </option>
                                        })
                                            : <option>Loading...</option>
                                        }
                                    </Input>
                                </Col>
                            </FormGroup>
                            <ModalFooter style={{ borderTop: 'none' }}>
                                <Button style={{ backgroundColor: '#F4CF5D', fontSize: '18px', marginRight: '19px', padding: '7px 25px', border: "none" }} onClick={this.toggle} type="submit">Save</Button>
                            </ModalFooter>
                        </Form>

                    </ModalBody>

                </Modal>
            </div>


        )
    }
}