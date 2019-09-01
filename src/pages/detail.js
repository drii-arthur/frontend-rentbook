import React from 'react'
import { Link } from 'react-router-dom'
import EditData from '../components/detail/edit'
import '../components/detail/edit.css'
import '../components/detail/conten.css'
import Footer from '../components/homepage/footer'
import swal from 'sweetalert'

import '../App.css'
import { deleteBook, getBookById } from '../Redux/Actions/book';
import { connect } from 'react-redux'
import { latestBorrow, Return, Borrow } from '../Redux/Actions/borrow';
import { profile } from '../Redux/Actions/users';
import loading from '../Assets/Img/loading.gif'
import backIcon from '../Assets/Img/back.png'


class Detail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            book: props.books.bookList.find((books) => { return books.id_books === Number(props.match.params.id) }),
            users: {},
            borrowedBy: 0,
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleBorrow = this.handleBorrow.bind(this)
    }


    componentDidMount = async () => {
        if (!window.localStorage.getItem('token'))
            window.location.href = `/`

        if (!this.state.book) {
            await this.props.dispatch(getBookById(this.props.match.params.id))
            this.setState({
                book: this.props.books.bookList.find((books) => { return books.id_books === Number(this.props.match.params.id) })
            },
                async () => {
                    await this.props.dispatch(latestBorrow(this.props.match.params.id))
                    const borrowedBy = this.props.borrowing.borrowList && this.props.borrowing.borrowList.users_id
                    this.setState({
                        borrowedBy: borrowedBy
                    }, () => { console.log("minjem buku", borrowedBy, this.props.borrowing.borrowList[0]) })
                })
        }
        else {
            await this.props.dispatch(latestBorrow(this.props.match.params.id))
            const borrowedBy = this.props.borrowing.borrowList[0] ? this.props.borrowing.borrowList[0].users_id : 0
            this.setState({
                borrowedBy: borrowedBy
            })
        }
        await this.props.dispatch(profile())
        this.setState({
            users: this.props.users.userList
        })
    }


    handleDelete = async () => {
        let id = this.props.match.params.id
        await this.props.dispatch(deleteBook(id))
            .then(() => { this.props.location.pathname = '/book' })
    }

    handleBorrow = async (event) => {
        const target = event.target
        const action = target.innerHTML
        const data = {
            id_book: this.state.book.id_books,
            id_user: this.state.users.id
        }
        if (action === 'Borrow') {
            await this.props.dispatch(Borrow(data))
                .then(() => {
                    swal({
                        title: 'Buku Kita',
                        text: 'Buku berhasil di pinjam,Selamat membaca dan jangan lupa di kembalikan !!!',
                        icon: 'success'
                    })
                })
            this.setState({
                borrowedBy: this.state.users.id,
                book: {
                    ...this.state.book,
                    status: 0
                }
            })

        } else if (action === 'Return') {
            await this.props.dispatch(Return(data.id_book))
                .then(() => {
                    swal({
                        title: 'Buku Kita',
                        text: 'Buku berhasil di kembalikan !!! Terima Kasih ',
                        icon: 'success'
                    })
                })
            this.setState({
                borrowedBy: 0,
                book: {
                    ...this.state.book,
                    status: 1
                }
            })
        }
    }


    setStatus() {
        if (this.state.book.status === 1) {
            return 'Available'
        }
        else {
            return 'Not Available'
        }
    }


    render() {
        const borrowedBy = this.props.borrowing.borrowList[0] && this.props.borrowing.borrowList[0].users_id
        const borrowedByName = this.props.borrowing.borrowList[0] && this.props.borrowing.borrowList[0].username
        const dateTransaction = this.props.borrowing.borrowList[0] && this.props.borrowing.borrowList[0].date_transaction
        const { users } = this.state
        const { book } = this.state

        if (book == undefined) {
            console.log(this.state)
            return (
                <div className="loading">
                    <div><img src={loading} />
                        <h1>Loading ....</h1>
                    </div>

                </div>
            )
        } else if (book === null) {
            console.log(this.state)
            return alert('book not pound')
        } else {

            return (
                <div>
                    <div className='container-fluid'>
                        <div className="row">
                            <div className='col-md-12 p-0'>
                                <div className='jumbotron' style={{ backgroundImage: `url('${book.image}')` }}>
                                    <div className="litleBook" style={{ backgroundImage: `url('${book.image}')` }}></div>
                                    <Link to='/book'>
                                        <div className="btn-back"><img className="img-fluid" src={backIcon} /></div></Link>
                                </div>
                                {users.level == 'admin' ? <Link to={{ pathname: "/book" }}><div className="btn-delete" onClick={() => this.handleDelete()}><p>Delete</p></div></Link> : ''}
                                {users.level == 'admin' ? <div className="btn-edit"><EditData id_books={this.props.match.params.id} /></div> : ''}
                            </div >
                        </div>
                    </div>
                    <div className='container'>
                        <div className="row">
                            <div className='col-md-9'>
                                <div className="conten">
                                    <div className="genre">{book.genre}</div>
                                    {book.status == 0 ? <p className="borrowBy mt-4 mb-0" style={{ color: 'red' }}>Borrowed By: <span style={{ color: '#000000' }}>{borrowedByName}</span> </p> : ''}
                                    {book.status == 0 ? <p className="borrowBy" style={{ color: 'red' }}>date transaction: <span style={{ color: '#000000' }}>{dateTransaction}</span> </p> : ''}


                                    <h1 className="title">{book.title}</h1>
                                    <h5 className="date">{book.date_released}</h5>
                                    <h4 className="status" style={this.state.book.status === 0 ? { color: "red" } : {}}>
                                        {this.setStatus()}
                                    </h4>
                                    <p className="description">{book.description}</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-right" style={{ lineHeight: '30' }}>
                                {/* {book.status != 1 ? <button className='btn-rent'>Return</button> : <button className='btn-rent'>Borrow</button>} */}
                                <button className="btn-rent" disabled={book.status != 1 && this.state.users.id != borrowedBy} onClick={this.handleBorrow}>{this.state.users.id == borrowedBy && book.status == 0 ? 'Return' : 'Borrow'}</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
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
