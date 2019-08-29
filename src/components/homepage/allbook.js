import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getBook } from '../../Redux/Actions/book'
import './allbook.css'


class AllBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }

    }

    componentDidMount = async () => {
        await this.props.dispatch(getBook(this.props.match.params.genre, this.props.match.params.year))
        console.log(this.props.books)
        this.setState({
            books: this.props.books,
        })

    }

    render() {

        const { books } = this.state
        const book = books.bookList

        console.log(book)
        return (
            <Fragment>
                {book ? book.map((data, index) => {
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

// onClick={() => { this.props.getDetail(id_books) }}


const mapStateToProps = state => {
    return {
        books: state.books,
    };
};

export default connect(mapStateToProps)(AllBooks);

