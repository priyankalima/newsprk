import { useEffect, useState, useRef } from 'react';
import { db } from '../../firebase';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";


// import Swiper core and required modules
import SwiperCore, {
    Navigation, Thumbs, Scrollbar, Mousewheel
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Scrollbar, Mousewheel]);


const SliderSection = () => {


    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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

    return (
        <>
            {/* section content first row */}
            <section className="section-content" id="c1">
                <div className="container">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            "clickable": true
                        }}

                        className="mySwipe">
                        {
                            dataList ? dataList.map(data => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <div className=".hero-bsns-content col-size">
                                                <div className="row">
                                                    <div className="col">
                                                        <img src={data.url} width="150" height="90" />
                                                    </div>
                                                    <div className="col">
                                                        <span>Technology / 23.07.2021</span>
                                                        <h6 className="h6 mt-1">
                                                            The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    </>
                                )
                            })
                                : ""
                        }

                    </Swiper>
                </div>
            </section>
            {/* section content */}
            <section className="section-content">
                {/* gallery section in left */}
                <div className="container">
                    {/* row */}
                    <div className="row ">
                        {/* col-sm-8 col-md-8 col-lg-8 */}
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <Swiper
                                style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                className="mySwiper2">

                                {
                                    dataList ? dataList.map((data) => {
                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <div className="hero-bsns-content">
                                                        <img src={data.url} className="card-img" />
                                                        <div className="video-icon">
                                                            <i className="fa fa-play"></i>
                                                        </div>
                                                        <span className="date-size">Technology / 03-07-2021</span>
                                                        <h2>The property 100-seat amphitheater and a swimming pond with sandy shower</h2>
                                                        <p className="float-text">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower</p>
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                        : ""
                                }

                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesVisibility={true}
                                watchSlidesProgress={true}
                                className="mySwiper mt-2">
                                {
                                    dataList ? dataList.map((data) => {
                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <img src={data.url} className="card-img" width="100" height="100" />
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                        : ""
                                }
                            </Swiper>
                        </div>
                        {/* col-sm-4 col-md-4 col-lg-4 */}
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            {/* tabs content */}
                            <div id="exTab1" class="container">
                                <ul className="nav nav-pills">
                                    <li className="active">
                                        <a href="#1a" data-toggle="tab">Recents</a>
                                    </li>
                                    <li><a href="#2a" data-toggle="tab">Relative</a>
                                    </li>
                                    <li><a href="#3a" data-toggle="tab">Popular</a>
                                    </li>

                                </ul>

                                <div className="tab-content clearfix">
                                    <div className="tab-pane active" id="1a">
                                        {/* hero-bsns-content col-size */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1">
                                                        The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content two */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1">
                                                        The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content three */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1">
                                                        The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content four */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1">
                                                        The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content five */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1">
                                                        The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="2a">
                                        {/* hero-bsns-content col-size */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="2a">
                                        {/* hero-bsns-content col-size */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content two */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content three */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content four */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content five */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="3a">
                                        {/* hero-bsns-content col-size */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content two */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content three */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content four */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1"></h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* content five */}
                                        <div className=".hero-bsns-content col-size">
                                            <div className="row">
                                                <div className="col">
                                                    <img src="./img2.jpg" width="150" height="90" />
                                                </div>
                                                <div className="col">
                                                    <span>Technology / 23.07.2021</span>
                                                    <h6 className="h6 mt-1">
                                                        The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* section content 3rd row */}
            <section className="section-content">
                <div className="container">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            "clickable": true
                        }}

                        className="mySwiper">
                        {
                            dataList ? dataList.map(data => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <div className="hero-bsns-content">
                                                <img src={data.url} className="card-img" height="300" />
                                                <span className="date-size">Technology / 03-07-2021</span>
                                                <h5 className="h5">The property 100-seat amphitheater and a swimming pond with sandy shower</h5>
                                                        
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            })
                                : ""
                        }

                    </Swiper>
                </div>
            </section>

            {/* section content 4th row */}
            <section className="section-content">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {/* col-8 */}
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                navigation={true}
                                pagination={{
                                    "clickable": true
                                }}

                                className="mySwiper">
                                {
                                    dataList ? dataList.map(data => {
                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <div className="hero-bsns-content">
                                                        <img src={data.url} className="card-img" height="300" />
                                                        <span>Technology / 02.06.2021</span>
                                                        <h5>The property, complete with 30-seat screening from room</h5>
                                                        <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower</p>
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                        : ""
                                }

                            </Swiper>
                            {/* row */}
                            <div className="row mt-2">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {/* content two */}
                                    <div className=".hero-bsns-content col-size">
                                        <div className="row">
                                            <div className="col">
                                                <img src="./img2.jpg" width="150" height="90" />
                                            </div>
                                            <div className="col">
                                                <span>Technology / 23.07.2021</span>
                                                <h6 className="h6 mt-1">The property, complete with 30-seat screening from room</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* content three */}
                                    <div className=".hero-bsns-content col-size">
                                        <div className="row">
                                            <div className="col">
                                                <img src="./img2.jpg" width="150" height="90" />
                                            </div>
                                            <div className="col">
                                                <span>Technology / 23.07.2021</span>
                                                <h6 className="h6 mt-1">The property, complete with 30-seat screening from room</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* content four */}
                                    <div className=".hero-bsns-content col-size">
                                        <div className="row">
                                            <div className="col">
                                                <img src="./img2.jpg" width="150" height="90" />
                                            </div>
                                            <div className="col">
                                                <span>Technology / 23.07.2021</span>
                                                <h6 className="h6 mt-1">The property, complete with 30-seat screening from room</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {/* content two */}
                                    <div className=".hero-bsns-content col-size">
                                        <div className="row">
                                            <div className="col">
                                                <img src="./img2.jpg" width="150" height="90" />
                                            </div>
                                            <div className="col">
                                                <span>Technology / 23.07.2021</span>
                                                <h6 className="h6 mt-1">The property, complete with 30-seat screening from room</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* content three */}
                                    <div className=".hero-bsns-content col-size">
                                        <div className="row">
                                            <div className="col">
                                                <img src="./img2.jpg" width="150" height="90" />
                                            </div>
                                            <div className="col">
                                                <span>Technology / 23.07.2021</span>
                                                <h6 className="h6 mt-1">The property, complete with 30-seat screening from room</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* content four */}
                                    <div className=".hero-bsns-content col-size">
                                        <div className="row">
                                            <div className="col">
                                                <img src="./img2.jpg" width="150" height="90" />
                                            </div>
                                            <div className="col">
                                                <span>Technology / 23.07.2021</span>
                                                <h6 className="h6 mt-1">The property, complete with 30-seat screening from room</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* col-9 */}
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            {/* row0 */}
                            <div className="row">
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-facebook m-1"></i><br />
                                        <span className="m-1">24k Peoples</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-instagram m-1"></i><br />
                                        <span className="m-1">24k Peoples</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-twitter m-1"></i><br />
                                        <span className="m-1">24k Peoples</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-youtube"></i><br />
                                        <span className="m-1">24k Peoples</span>
                                    </div>
                                </div>
                            </div>
                            {/* 3rd section for the popular post content using scoll swiper */}
                            <h4 className="mt-3 mb-2">Popular Posts</h4>
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={'auto'}
                                freeMode={true}
                                scrollbar={true}
                                mousewheel={true}
                                className="mySwiper">

                                {
                                    dataList ? dataList.map(data => {
                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <div className=".hero-bsns-content col-size">
                                                        <div className="row">
                                                            <div className="col">
                                                                <img src={data.url} width="150" height="90" />
                                                            </div>
                                                            <div className="col">
                                                                <span>Technology / 23.07.2021</span>
                                                                <h6 className="h6 mt-1">
                                                                    The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                        : ""
                                }

                            </Swiper>
                        </div>

                    </div>

                </div>

            </section>

            {/* section content 5th row */}
            <section className="sectionTwo">
                <div className="container">
                    {/* swiper */}
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            "clickable": true
                        }}

                        className="mySwiper">
                        {
                            dataList ? dataList.map(data => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <div className="hero-bsns-content">
                                                <img src={data.url} className="card-img" height="400" />
                                                <span>Technology / 02.06.2021</span>
                                                <h6 className="h6">{data.title}</h6>
                                                <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower</p>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            })
                                : ""
                        }

                    </Swiper>
                    {/* row */}
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <h3>Video News</h3>
                            <div className="hero-bsns-content">
                                <img src="./img2.jpg" className="card-img" />
                                <div className="video-icon">
                                    <i className="fa fa-play"></i>
                                </div>
                                <span className="date-size">Bussiness / 03-07-2021</span>
                                <h2 className="h2">The property 100-seat amphitheater and a swimming pond with sandy shower</h2>
                                <p className="float-text">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h4 className="mt-3 mb-2">Popular Posts</h4>
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={'auto'}
                                freeMode={true}
                                scrollbar={true}
                                mousewheel={true}
                                className="mySwiper">

                                {
                                    dataList ? dataList.map(data => {
                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <div className=".hero-bsns-content col-size">
                                                        <div className="row">
                                                            <div className="col">
                                                                <img src={data.url} width="150" height="90" />
                                                            </div>
                                                            <div className="col">
                                                                <span>Technology / 23.07.2021</span>
                                                                <h6 className="h6 mt-1">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                        : ""
                                }

                            </Swiper>
                        </div>
                    </div>


                </div>
            </section>

            {/* section content 6th row */}

            <section className="section-content">
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <h4>Entertainment News</h4>
                            <div className="row mb-2">
                                <div className="col">
                                    <img src="./img.jpg" className="card-img" />
                                    <h5>Copa America: Luis Suarez from devastated US</h5>
                                    <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                                    <button className="btn btn-button">Learn More</button>
                                </div>
                                <div className="col">
                                    <img src="./img.jpg" className="card-img" />
                                    <h5>Copa America: Luis Suarez from devastated US</h5>
                                    <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                                    <button className="btn btn-button">Learn More</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src="./img.jpg" className="card-img" />
                                    <h5>Copa America: Luis Suarez from devastated US</h5>
                                    <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                                    <button className="btn btn-button">Learn More</button>
                                </div>
                                <div className="col">
                                    <img src="./img.jpg" className="card-img" />
                                    <h5>Copa America: Luis Suarez from devastated US</h5>
                                    <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                                    <button className="btn btn-button">Learn More</button>
                                </div>
                            </div>
                            <h4>Sports News</h4>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <img src="./img4.jpg" className="card-img" />
                                    <h5>Copa America: Luis Suarez from devastated US</h5>
                                    <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                                    <button className="btn btn-button">Learn More</button>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <Swiper
                                        direction={'vertical'}
                                        slidesPerView={'auto'}
                                        freeMode={true}
                                        scrollbar={true}
                                        mousewheel={true}
                                        className="mySwiper">

                                        {
                                            dataList ? dataList.map(data => {
                                                return (
                                                    <>
                                                        <SwiperSlide>
                                                            <div className=".hero-bsns-content col-size">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <img src={data.url} width="150" height="90" />
                                                                    </div>
                                                                    <div className="col">
                                                                        <span>Technology / 23.07.2021</span>
                                                                        <h6 className="h6 mt-1"></h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </>
                                                )
                                            })
                                                : ""
                                        }

                                    </Swiper>
                                </div>
                            </div>


                            <div className="div-content mt-3 mb-3">Ads</div>

                            <h4>Bussiness News</h4>
                            <div className='row mb-2'>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <img src="./img5.jpg" className="card-img" />
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <h5>Copa America: Luis Suarez from devastated US</h5>
                                    <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                                    <button className="btn btn-button">Learn More</button>
                                </div>
                            </div>
                            <div className='row mb-2'>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <img src="./img2.jpg" className="card-img" />
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <h5>Copa America: Luis Suarez from devastated US</h5>
                                    <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                                    <button className="btn btn-button">Learn More</button>
                                </div>
                            </div>


                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h4 className="mt-3 mb-2">Most Shared</h4>
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={'auto'}
                                freeMode={true}
                                scrollbar={true}
                                mousewheel={true}
                                className="mySwiper">

                                {
                                    dataList ? dataList.map(data => {
                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <div className=".hero-bsns-content col-size">
                                                        <div className="row">
                                                            <div className="col">
                                                                <img src={data.url} width="150" height="90" />
                                                            </div>
                                                            <div className="col">
                                                                <span>Technology / 23.07.2021</span>
                                                                <h6 className="h6 mt-1">
                                                                    <i className="fa fa-facebook m-1"></i><br/>
                                                                    <span className="m-1" style={{fontSize:'10px'}}>20k <i className="fa fa-share m-1" style={{fontSize:'10px'}}></i></span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                        : ""
                                }

                            </Swiper>

                            <div>
                                <h5>Upcomming Matches</h5>
                                <div className=".hero-bsns-content col-size">
                                    <div className="row">
                                        <div className="col">
                                            <img src="https://quomodosoft.com/html/newsprk/assets/img/flag/match5.png" width="100" height="80" />
                                        </div>
                                        <div className="col">
                                            <span>Technology / 23.07.2021</span>
                                            <h6 className="h6 mt-1"></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=".hero-bsns-content col-size">
                                    <div className="row">
                                        <div className="col">
                                            <img src="https://quomodosoft.com/html/newsprk/assets/img/flag/match4.png" width="100" height="80" />
                                        </div>
                                        <div className="col">
                                            <span>Tommorow / 23.07.2021</span>
                                            <h6 className="h6 mt-1">Germany VS  France</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=".hero-bsns-content col-size">
                                    <div className="row">
                                        <div className="col">
                                            <img src="https://quomodosoft.com/html/newsprk/assets/img/flag/match5.png" width="100" height="80" />
                                        </div>
                                        <div className="col">
                                            <span>Tommorow / 23.07.2021</span>
                                            <h6 className="h6 mt-1">Germany VS  France</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=".hero-bsns-content col-size">
                                    <div className="row">
                                        <div className="col">
                                            <img src="https://quomodosoft.com/html/newsprk/assets/img/flag/match1.png" width="100" height="80" />
                                        </div>
                                        <div className="col">
                                            <span>Tommorow / 23.07.2021</span>
                                            <h6 className="h6 mt-1">Germany VS  France</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=".hero-bsns-content col-size">
                                    <div className="row">
                                        <div className="col">
                                            <img src="https://quomodosoft.com/html/newsprk/assets/img/flag/match3.png" width="100" height="80" />
                                        </div>
                                        <div className="col">
                                            <span>Tommorow / 23.07.2021</span>
                                            <h6 className="h6 mt-1">Germany VS  France</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* *********************** */}
                            <h4>Chategories</h4>
                            <div className="row">
                                <div className="col col-content">Restuarent</div>
                            </div>
                            <div className="row">
                                <div className="col col-content">Entertainment</div>
                            </div>
                            <div className="row">
                                <div className="col col-content">Sports</div>
                            </div>
                            <div className="row">
                                <div className="col col-content">Foods</div>
                            </div>
                            <div className="row">
                                <div className="col col-content">Worlds</div>
                            </div>
                            <div className="row">
                                <div className="col col-content">Trevel</div>
                            </div>

                            {/* ********************************8 */}

                            <div className="ads-content">
                                ads
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
export default SliderSection;
