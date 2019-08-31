import React, { Fragment } from 'react'
import Sidebar from "react-sidebar"
import DropdownCategory from '../components/homepage/Navbar';
import SidebarUsers from '../components/homepage/sidebar'
import AllTime from '../components/homepage/alltime'
import Slider from '../components/homepage/carousel'
import Search from '../components/homepage/search'
import RightIcon from '../components/homepage/logo'
import AllBooks from '../components/homepage/allbook'
import Footer from '../components/homepage/footer'
import '../App.css'
import sidebarIcon from '../Assets/Img/list.png'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            search: ''
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.getDetail = this.getDetail.bind(this)
    }

    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    getDetail(id) {
        this.props.history.push(`/book/detail/${id}`)
    }


    render() {
        console.log(this.props)
        return (
            <Fragment>
                <Sidebar style={{ width: "20%" }}
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

                    </div>
                    <div className="col-md-3">
                        <DropdownCategory />
                        <AllTime />
                    </div>
                    <div className="col-md-4">
                        <Search params={this.props.match.params} />
                    </div>
                    <div className="col-md-2 pr-2">
                        <RightIcon />
                    </div>
                </div>
                {/* end of navbar */}

                <div className="container mb-5" style={this.props.location.pathname !== '/book' ? { display: 'none' } : {}}>
                    <div className="row">
                        <div className='col-md-12'>
                            <div className="slidercontent">
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
                        <div className="col-md-12 mt-4 allBooks" style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}><AllBooks
                            match={this.props.match}
                            getDetail={this.getDetail}
                        /></div>
                    </div>
                </div>

                <Footer />

            </Fragment>



        )
    }
}



