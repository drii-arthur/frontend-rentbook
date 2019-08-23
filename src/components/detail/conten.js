import React, { Component } from 'react'
import './conten.css'

export default class Content extends React.Component {
    render() {
        const genre = this.props.books.genre
        const title = this.props.books.title
        const date = this.props.books.date
        const status = this.props.books.status
        const description = this.props.books.description
        return (
            <div className="conten">
                <div className="genre">{genre}</div>
                <h1 className="title">{title}</h1>
                <h5 className="date">{date}</h5>
                <h4 className="status">{status}</h4>
                <p className="description">{description}</p>
            </div>

        )
    }

}