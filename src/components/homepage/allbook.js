import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getBook } from '../../Redux/Actions/book'
import './allbook.css'


class AllBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            page: 1,
            postPerPage: 8
        }
    }


    // handlePage = (page) => {
    //     this.getBook(page)
    // }

    // componentDidMount(){
    //     this.getBook(1)
    // }

    // getBook = async (page) => {
    //     let params = new URLSearchParams(window.location.search)
    //     await this.props.dispatch(getBook(this.props.match.params.genre, this.props.match.params.year, params.get('search'), params.get('page')))
    //     this.setState({
    //         books: this.props.books,
    //         currentPage:page,
    //         totalPage:this.props.books.bookList.totalPage
    //     })

    componentDidMount = async () => {
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


    render() {
        // let indexOfLastPost = this.state.currentPage * this.state.totalPerPage;
        // let indexOfFirstPost = indexOfLastPost - this.state.totalPerPage;
        const { books } = this.state

        return (
            <Fragment>
                {books ? books.map((data, index) => {
                    return (
                        <div key={index} className="card" style={{ width: "17rem" }} onClick={() => { this.props.getDetail(data.id_books) }}>
                            <img src={data.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="genreCard">{data.genre}</p>
                                <h5 className="card-title mt-2">{data.title.substr(0, 20)}</h5>
                                <p className="card-text">{data.description.substr(0, 75) + '...'}</p>
                                <p className="statusCard" style={data.status == 0 ? { color: 'brown', border: "2px solid brown" } : { color: '#1e272e' }}>{data.status == 0 ? 'Not Available' : 'Available'}</p>

                            </div>
                        </div>
                    )
                }) : <p style={{ backgroundColor: 'red', color: "#fff", width: "100px" }}></p>
                }
            </Fragment>

        )
    }
}



const mapStateToProps = state => {
    return {
        books: state.books,
    };
};

export default connect(mapStateToProps)(AllBooks);

