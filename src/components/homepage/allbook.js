import React from 'react'
import './allbook.css'


export default class AllBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: props.books
        }
    }

    render() {
        const id_books = `${this.state.books.id_books}`
        const image = `${this.state.books.image}`
        const title = `${this.state.books.title}`
        const desc = `${this.state.books.description}`
        const genre = `${this.state.books.genre}`
        const status = `${this.state.books.status}`

        return (
            <div className="card" style={{ width: "17rem" }} onClick={() => { this.props.getDetail(id_books) }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="genreCard">{genre}</p>
                    <h5 className="card-title mt-2">{title.substr(0, 20)}</h5>
                    <p className="card-text">{desc.substr(0, 75) + '...'}</p>
                    <p className="statusCard" style={status == 0 ? { color: 'brown', border: "2px solid brown" } : { color: '#1e272e' }}>{status == 0 ? 'Not Available' : 'Available'}</p>

                </div>
            </div>

        )
    }
}

