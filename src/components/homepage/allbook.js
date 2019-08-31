import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getBook } from '../../Redux/Actions/book'
import swal from 'sweetalert'
import { getAllBook } from "../../Redux/Actions/allBook";
import './allbook.css'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { async } from 'q';


class AllBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            postPerPage: 8,
            page: 1,
            allBook: null
        }
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }


    componentDidMount = () => {
        this.makeRequest()
    }

    makeRequest = async () => {
        await this.props.dispatch(getAllBook())
        this.setState({
            allBook: this.props.allBook.bookAllList.length
        })
        let params = new URLSearchParams(window.location.search)
        let search = params.get('search')
        let page = params.get('page')
        let limit = params.get('limit')
        await this.props.dispatch(getBook(this.props.match.params.genre, this.props.match.params.year, search, page, limit))
        console.log(this.props.books)
        this.setState({
            books: this.props.books.bookList,
        })
    }

    next = () => {
        this.setState({
            page: this.state.page + 1,
        }, () => {
            localStorage.setItem('halaman', this.state.page)
            this.makeRequest()
        })
    }
    prev = () => {
        const halaman = localStorage.getItem('halaman')
        this.setState({
            page: halaman - 1,
        }, () => {
            localStorage.setItem('halaman', this.state.page)
            this.makeRequest()
        })
    }

    handleLogin = () => {

        swal({
            title: 'Login',
            text: 'harap login terlebih dahulu !',
            icon: 'warning'
        }).then(() => { window.location.href = '/Login' })

    }

    render() {
        const halaman = localStorage.getItem('halaman')
        console.log("halaman", localStorage.getItem('halaman'))
        const token = localStorage.getItem('token')
        const { books } = this.state
        const sum = Math.ceil(this.state.allBook / 8)
        console.log(sum)


        return (
            <>
                <Fragment>
                    {books ? books.map((data, index) => {
                        return (
                            <>
                                {token != null ? (<div key={index} className="card" style={{ width: "17rem" }} onClick={() => { this.props.getDetail(data.id_books) }}>
                                    <img src={data.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="genreCard">{data.genre}</p>
                                        <h5 className="card-title mt-2">{data.title.substr(0, 20)}</h5>
                                        <p className="card-text">{data.description.substr(0, 75) + '...'}</p>
                                        <p className="statusCard" style={data.status == 0 ? { color: 'brown', border: "2px solid brown" } : { color: '#1e272e' }}>{data.status == 0 ? 'Not Available' : 'Available'}</p>

                                    </div>
                                </div>) : (<div key={index} className="card" style={{ width: "17rem" }} onClick={() => { this.handleLogin() }} >
                                    <img src={data.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="genreCard">{data.genre}</p>
                                        <h5 className="card-title mt-2">{data.title.substr(0, 20)}</h5>
                                        <p className="card-text">{data.description.substr(0, 75) + '...'}</p>
                                        <p className="statusCard" style={data.status == 0 ? { color: 'brown', border: "2px solid brown" } : { color: '#1e272e' }}>{data.status == 0 ? 'Not Available' : 'Available'}</p>

                                    </div>
                                </div>)}
                            </>
                        )
                    }) : <p style={{ backgroundColor: 'red', color: "#fff", width: "100px" }}></p>
                    }
                </Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4 text-center m-auto'>
                            <Pagination size="lg" aria-label="Page navigation example">
                                {halaman == 1 ?
                                    <PaginationItem disabled>
                                        <PaginationLink previous />
                                    </PaginationItem> :
                                    <PaginationItem onClick={this.prev}>
                                        <PaginationLink previous href={`/book?page=${this.state.page}`} />
                                    </PaginationItem>}
                                <PaginationItem>
                                    <PaginationLink >
                                        {halaman}
                                    </PaginationLink>

                                </PaginationItem>
                                {halaman == sum ?
                                    <PaginationItem disabled >
                                        <PaginationLink next />
                                    </PaginationItem> :
                                    <PaginationItem onClick={this.next}>
                                        <PaginationLink next href={`/book?page=${this.state.page}`} />
                                    </PaginationItem>
                                }
                            </Pagination>

                        </div>
                        <div className='col-md-4 '></div>
                    </div>
                </div>

            </>

        )
    }
}



const mapStateToProps = state => {
    return {
        books: state.books,
        allBook: state.allBook
    };
};

export default connect(mapStateToProps)(AllBooks);

