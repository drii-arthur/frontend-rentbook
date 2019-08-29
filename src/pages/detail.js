import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EditData from '../components/detail/edit'
import '../components/detail/edit.css'
import '../components/detail/conten.css'

import '../App.css'
import { deleteBook } from '../Redux/Actions/book';
import { connect } from 'react-redux'
import { latestBorrow, Return, Borrow } from '../Redux/Actions/borrow';
import { profile } from '../Redux/Actions/users';
import loading from '../Assets/Img/loading.gif'


class Detail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookList: props.books.bookList.find((books) => { return books.id_books === Number(props.match.params.id) }),
            user: {},
            borrowedBy: 0,
            // detailBooks: [],
            // id_books: props.books.id_books
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleBorrow = this.handleBorrow.bind(this)
    }


    componentDidMount = async () => {
        await this.props.dispatch(latestBorrow(this.props.match.params.id))
        const borrowedBy = this.props.borrowing.borrowList[0] ? this.props.borrowing.borrowList[0].id_user : 0
        this.setState({
            borrowedBy: borrowedBy
        })
        await this.props.dispatch(profile())
        this.setState({
            user: this.props.users.userList
        })
    }


    handleDelete = async () => {
        let id = this.props.match.params.id
        await this.props.dispatch(deleteBook(id))
    }

    handleBorrow = async (event) => {
        const target = event.target
        const action = target.innerHTML
        const data = {
            id_books: this.state.bookList.id,
            id_user: this.state.user.id
        }
        if (action === 'Borrow') {
            await this.props.dispatch(Borrow(data))
            this.setState({
                borrowedBy: data.id_user,
                bookList: {
                    ...this.state.bookList,
                    status: 0
                }
            })
        } else if (action === 'Return') {
            await this.props.dispatch(Return(data))
            this.setState({
                borrowedBy: 0,
                bookList: {
                    ...this.state.bookList,
                    status: 1
                }
            })
        }
    }


    setStatus() {
        if (this.state.bookList.status === 1) {
            return 'Available'
        }
        else {
            return 'Not Available'
        }
    }


    render() {

        // const { detailBooks } = this.state
        const { bookList } = this.state
        console.log(this.state)

        if (bookList == undefined) {
            console.log(this.state)
            return (
                <div className="loading">
                    <div><img src={loading} />
                        <h1>Loading ....</h1>
                    </div>

                </div>
            )
        } else if (bookList === null) {
            console.log(this.state)
            return alert('book not pound')
        } else {

            return (
                <div>
                    <div className='container-fluid'>
                        <div className="row">
                            <div className='col-md-12 p-0'>
                                <div className='jumbotron' style={{ backgroundImage: `url('${bookList.image}')` }}>
                                    <div className="litleBook" style={{ backgroundImage: `url('${bookList.image}')` }}></div>
                                    <Link to='/'>
                                        <div className="btn-back"></div></Link>
                                </div>
                                <Link to={{ pathname: "/" }}><div className="btn-delete" onClick={() => this.handleDelete()}><p>Delete</p></div></Link>
                                <div className="btn-edit"><EditData id_books={this.props.match.params.id} /></div>

                            </div >
                        </div>
                    </div>
                    <div className='container'>
                        <div className="row">
                            <div className='col-md-9'>
                                <div className="conten">
                                    <div className="genre">{bookList.genre}</div>
                                    <h1 className="title">{bookList.title}</h1>
                                    <h5 className="date">{bookList.date_released}</h5>
                                    <h4 className="status" style={this.state.bookList.status === 0 ? { color: "red" } : {}}>
                                        {this.setStatus()}
                                    </h4>
                                    <p className="description">{bookList.description}</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-right" style={{ lineHeight: '30' }}>
                                <h5 className="btn-rent" onClick={() => this.handleBorrow}>{bookList.status == 1 ? "Borrow" : "Return"}</h5>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        books: state.books,
        users: state.users,
        borrowing: state.borrowing
    }
}

export default connect(mapStateToProps)(Detail)
