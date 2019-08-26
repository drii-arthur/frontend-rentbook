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
import './sidebar.css'

export default class SidebarUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            genreList: [],
            formData: {
                title: '',
                description: '',
                image: '',
                date_released: '',
                genre: '',
            },
            username: props.username || "dummy",
            image: props.image || "https://bacaanmenarikku.files.wordpress.com/2016/03/tumblr_nmxybqyudk1u34m9qo1_1280.jpg",
            explore: 'Explore',

            modal: false
        }

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClose = this.handleClose.bind(this);
    }
    // handleClose = () => {
    //     this.setState({ showModal: false })
    //     window.location.reload()
    // }

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

        axios.post('http://localhost:8081/book/', this.state.formData, {
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
                                        <Input type="Title" name="title" id="exampleEmail2" placeholder="Title" bsSize="lg" onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="exampleText" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Description</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="description" id="exampleText" bsSize="lg" onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleEmail2" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Date Release</Label>
                                    <Col sm={10}>
                                        <Input type="date" name="date_released" id="exampleEmail2" bsSize="lg" onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="exampleSelect" sm={2} style={{ fontWeight: '600', fontSize: '18px' }}>Genre</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="genre" id="exampleSelect" onChange={this.handleChange} as="select" name="genre">
                                            {genreList.length !== 0 ? genreList.map((genre) => {
                                                const selected = this.state.genre_id === genre.id_genre ? 'selected' : ''
                                                return <option value={genre.id_genre} key={genre.id_genre}> {genre.genre_name} </option>
                                            })
                                                : <option>Loading...</option>
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <ModalFooter style={{ borderTop: 'none' }}>
                                    <Button style={{ backgroundColor: '#F4CF5D', fontSize: '18px', marginRight: '19px', padding: '7px 25px', border: "none" }} type="submit" onClick={this.toggle}>Save</Button>
                                </ModalFooter>

                            </Form>


                        </ModalBody>

                    </Modal>
                </h6>

            </div>)
    }
}
