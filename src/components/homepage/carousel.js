import React from 'react'
import Swiper from 'react-id-swiper';

import './carousel.css'


class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: props.books
        }
    }
    render() {

        // const image = `${this.state.books.image}`

        const params = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination'
            }
        }



        // const image = {
        //     backgroundImage: `url('${this.state.image}')`
        // }

        console.log(this.state.image, this.props, 'goblog')
        return (

            <Swiper {...params}>

                {/* {
                    this.props.state.data.map((image) => {
                        return <div key={image.id_books} style={{ backgroundImage: `url(${image.image})` }}></div>
                        console.log(image.image)
                    })
                } */}
                <div style={{ backgroundImage: 'url(http://blog.elevenia.co.id/wp-content/uploads/2015/04/filosofie-kopi.jpg)' }} />
                <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/3)' }} />
                <div style={{ backgroundImage: 'url(https://bacaanmenarikku.files.wordpress.com/2016/03/tumblr_nmxybqyudk1u34m9qo1_1280.jpg?w=540)' }} />
                <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/5)' }} />
                <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/2)' }} />
            </Swiper>




        )
    }
}

export default Slider;