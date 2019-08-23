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

        const image = `${this.state.books.image}`
        const title = `${this.state.books.title}`
        const desc = `${this.state.books.description}`

        return (

            <div className="card" style={{ width: "17rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{desc}</p>
                </div>
            </div>

        )
    }
}

