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
        return (
            <Swiper {...params}>
                <div style={{ backgroundImage: 'url(http://blog.elevenia.co.id/wp-content/uploads/2015/04/filosofie-kopi.jpg)' }} />
                <div style={{ backgroundImage: 'url(https://66.media.tumblr.com/d49e8f2ca72a9dde017f8383f6510ff4/tumblr_oice5zekFQ1v7uw47o3_250.png)' }} />
                <div style={{ backgroundImage: 'url(https://bacaanmenarikku.files.wordpress.com/2016/03/tumblr_nmxybqyudk1u34m9qo1_1280.jpg?w=540)' }} />
                <div style={{ backgroundImage: 'url(https://i.pinimg.com/originals/c4/e3/43/c4e3438bc4566101165c4a23a93ea197.jpg)' }} />
                <div style={{ backgroundImage: 'url(https://thefreakyteppy.files.wordpress.com/2013/02/rectoversopo.jpg)' }} />
            </Swiper>
        )
    }
}

export default Slider;