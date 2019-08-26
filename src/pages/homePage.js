import React, { Fragment } from 'react';
import axios from 'axios'
import Sidebar from "react-sidebar"
import DropdownCategory from '../components/homepage/Navbar';
import SidebarUsers from '../components/homepage/sidebar'
import AllTime from '../components/homepage/alltime'
import Slider from '../components/homepage/carousel'
import Search from '../components/homepage/search'
import RightIcon from '../components/homepage/logo'
import AllBooks from '../components/homepage/allbook'
import '../App.css'
import sidebarIcon from '../Assets/Img/list.png'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            books: [],
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.getDetail = this.getDetail.bind(this)
    }

    componentDidMount() {
        console.log(this.props)

        let query = ''
        if (this.props.match.params.genre !== undefined) {
            query = `http://localhost:8081/book/genre/${this.props.match.params.genre}`
        }
        else if (this.props.match.params.year !== undefined) {
            query = `http://localhost:8081/book/year/${this.props.match.params.year}`
        }
        else {
            query = `http://localhost:8081/book`
        }

        axios.get(query)
            .then((data) => {
                console.log(data)
                this.setState({
                    books: data.data,
                })
            })
    }

    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    getDetail(id) {
        window.location.href = `http://localhost:3000/book/detail/${id}`
    }


    render() {
        console.log(this.props)
        return (
            <Fragment>
                <Sidebar
                    sidebar={
                        <SidebarUsers
                            username="Drii-arthur"

                        />
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white", zIndex: '20', width: '300px', position: 'fixed', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" } }}>
                    <button variant="light" onClick={() => this.onSetSidebarOpen(true)} className="btn-sidebar">
                        <img src={sidebarIcon} />
                    </button>
                </Sidebar>
                <div className="row p-3 navbar">
                    <div className="col-md-3">
                        <p>tai kucing</p>
                    </div>
                    <div className="col-md-3">
                        <DropdownCategory />
                        <AllTime />
                    </div>
                    <div className="col-md-4">
                        <Search />
                    </div>
                    <div className="col-md-2 pr-2">
                        <RightIcon />
                    </div>
                </div>
                {/* end of navbar */}
                <div className="container mb-5">
                    <div className="row">
                        <div className='col-md-12'>
                            <div className="slidercontent">

                                {/* {this.state.books.map((books) => {
                                    return <Slider
                                        key={books.id_books}
                                        image={books} />
                                })} */}
                                <Slider />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of carousel */}

                <div className="container-fluid">
                    <h3 className="listbooks pl-3">List Books</h3>
                    <hr />
                    <div className="row px-3 mb-3">
                        <div className="col-md-12 mt-4 allBooks" style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                            {this.state.books.map((books) => {
                                return <AllBooks
                                    key={books.id_books}
                                    books={books}
                                    getDetail={this.getDetail} />
                            })}

                        </div>
                    </div>
                </div>

            </Fragment>



        )
    }
}

