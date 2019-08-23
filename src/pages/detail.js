import React from 'react'
import Jumbotron from '../components/detail/jumbotron'
import Content from '../components/detail/conten'

import '../App.css'


export default class Detail extends React.Component {
    render() {
        const books = {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCy7bMBXhZNbpb5pand-eRPhyX3_N_cnmVMuJdVGEEXtrkvNCK'
        }

        const content = {
            genre: 'Romance',
            title: 'Filosopi kopi',
            date: '30 april 2017',
            status: "Available",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
        }


        return (
            <div className='container-fluid'>

                <div className="row">
                    <div className='col-md-12 p-0'>
                        <Jumbotron books={books} />
                    </div>
                </div>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-9'>
                            <Content books={content} />
                        </div>
                        <div className="col-md-3 text-right" style={{ lineHeight: '30' }}>
                            <h5 className="btn-rent">Borrow</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}