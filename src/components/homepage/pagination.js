import React from 'react';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

export default class Page extends React.Component {
    constructor() {
        super()
        this.state = {
            page: 1
        }
        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
    }
    handlePlus = () => {
        this.setState({
            page: this.state.page + 1
        })
    }
    handleMinus = () => {
        this.setState({
            page: this.state.page - 1
        })
    }
    render() {

        return (
            <Pagination size="lg" aria-label="Page navigation example">
                <PaginationItem onClick={() => {
                    if (this.state.page > 1) {
                        this.handleMinus()
                    }
                }}>
                    <PaginationLink first href={`/book?page=${this.state.page}`} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink >
                        {this.state.page}
                    </PaginationLink>

                </PaginationItem>
                <PaginationItem onClick={() => { this.handlePlus() }}>
                    <PaginationLink next href={`/book?page=${this.state.page}`} />
                </PaginationItem>
            </Pagination>
        );
    }
}
