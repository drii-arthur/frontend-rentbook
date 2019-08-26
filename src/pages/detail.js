import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EditData from '../components/detail/edit'
import '../components/detail/edit.css'
import '../components/detail/conten.css'

import '../App.css'


export default class Detail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            detailBooks: [],
            id_books: props.id_books
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        let id = this.props.match.params.id
        axios.delete(`http://localhost:8081/book/${id}`, {
            headers: {
                authorization: document.cookie.split('=')[1]
            }
        })
            .then(res => {
                this.setState({
                    message: 'data berhasil di hapus'
                })

            })
            .catch(err => {
                console.log(err)
            })
        console.log('bangsat')
    }


    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`http://localhost:8081/book/${id}`)

            .then((data) => {
                // console.log(data.data[0].title, 'tolol')
                this.setState({
                    detailBooks: data.data[0]
                })
            })
    }

    setStatus() {
        if (this.state.detailBooks.status === 1) {
            return 'Available'
        }
        else {
            return 'Not Available'
        }
    }


    render() {

        const { detailBooks } = this.state

        return (
            <div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-md-12 p-0'>
                            <div className='jumbotron' style={{ backgroundImage: `url('${detailBooks.image}')` }}>
                                <div className="litleBook" style={{ backgroundImage: `url('${detailBooks.image}')` }}></div>
                                <Link to='/book'>
                                    <div className="btn-back"></div></Link>
                            </div>
                            <Link to={{ pathname: "/book/" }}><div className="btn-delete" onClick={() => this.handleDelete()}><p>Delete</p></div></Link>
                            <div className="btn-edit"><EditData id_books={this.props.match.params.id} /></div>

                        </div >
                    </div>
                </div>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-9'>
                            <div className="conten">
                                <div className="genre">{detailBooks.genre}</div>
                                <h1 className="title">{detailBooks.title}</h1>
                                <h5 className="date">{detailBooks.date_released}</h5>
                                <h4 className="status" style={this.state.detailBooks.status === 0 ? { color: "red" } : {}}>
                                    {this.setStatus()}
                                </h4>
                                <p className="description">{detailBooks.description}</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-right" style={{ lineHeight: '30' }}>
                            <h5 className="btn-rent">{detailBooks.status == 1 ? "Borrow" : "Return"}</h5>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}