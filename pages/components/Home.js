import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { db } from '../../firebase';
import Link from 'next/link';
import Navbar from './Navabar';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);





export function Home() {


    const [dataList, setDataList] = useState();

    useEffect(() => {
        db.ref('Posts').on('value', (snapShot) => {
            const dataList = [];
            snapShot.forEach(snap => {
                dataList.push(snap.val());
            });

            console.log(dataList);
            setDataList(dataList);
        });

    }, []);


    // slick multi carasal
    const setting = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true
    }
    const secSlider = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
    }


    return (

        <>
        
            <Navbar />

        </>
    )
}
