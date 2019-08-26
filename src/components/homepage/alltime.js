import React from 'react';
import axios from 'axios';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './navbar.css'

export default class AllTime extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            dropdownOpen: false,
            timeList: []
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/book/year/')
            .then(res => {
                console.log(res, 'datanya di sini cuy')
                this.setState({
                    timeList: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
        console.log(this.props)
    }

    render() {
        const { timeList } = this.state
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="boxDrop">
                <DropdownToggle caret className="dropdownHeader" style={{ marginLeft: '5px' }}>
                    All Time
            </DropdownToggle>
                <DropdownMenu>
                    {timeList.length > 0 ?
                        timeList.map((year, index) => {
                            return <DropdownItem key={index} href={`http://localhost:3000/book/year/${year.year}/`}>{year.year}</DropdownItem>
                        }) : <DropdownItem key="0" href="#">Loading ...</DropdownItem>}

                </DropdownMenu>
            </Dropdown>
        );
    }
}

