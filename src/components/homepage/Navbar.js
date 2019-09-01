import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './navbar.css'

export default class DropdownCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genreList: [],
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }


    componentDidMount = () => {
        axios.get('http://localhost:8081/genre/cat')
            .then(res => {
                this.setState({
                    genreList: res.data
                })
            })
            .catch(error => {
                console.log('error =', error)
            })
    }

    render() {
        const { genreList } = this.state
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className='boxDrop'>
                <DropdownToggle caret className="dropdownHeader">
                    All Categories
            </DropdownToggle>
                <DropdownMenu>
                    <Link to='/'><DropdownItem>All Books</DropdownItem></Link>
                    {genreList.length > 0 ?
                        genreList.map((genre, index) => {
                            return <DropdownItem key={index} href={`http://localhost:3000/book/genre/${genre.id_genre}/`}>{genre.genre_name}</DropdownItem>
                        }) : <DropdownItem key="0" href="#">Loading ...</DropdownItem>}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

