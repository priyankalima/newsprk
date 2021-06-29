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
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

            {/* tops heading slider zero section */}
            <section className="section-content">
                <div className="container">
                    <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
                        {/* <!-- Next and previous buttons --> */}

                        <a className="next" data-bs-target="#carouselControls" data-bs-slide="next">&#10095;</a>
                        <a className="prev" data-bs-target="#carouselControls" data-bs-slide="prev">&#10094;</a>

                        <div className="carousel-inner">
                            <div class="carousel-item active">
                                {/* row one */}
                                <div className='row'>
                                    {/* coloum one */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* coloum two */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* coloum three */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* xxxxxxxxxxx */}
                            </div>

                            {/* carousel-item */}
                            <div class="carousel-item">
                                <div className='row'>
                                    {/* coloum one */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* coloum two */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* coloum three */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='row'>
                                    {/* coloum one */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* coloum two */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* coloum three */}
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <div className="row">
                                            <div className='col'>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right'>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* first section for top content */}
            <section className="section-content">
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-sm-8 col-md-8 col-lg-8 mb-2 row-content-fist'>
                            <Slider

                                initialSlide={2}
                                infinite
                                dots
                                customPaging={(i) => {
                                    return (
                                        <div>
                                            <img src={dataList[i].url} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />

                                        </div>
                                    )
                                }}
                                dotsClass="slick-dots custom-indicator"
                            >
                                {
                                    dataList ? dataList.map((item) => {
                                        return (
                                            <>
                                                <img className="image" src={item.url} />
                                            </>
                                        )
                                    })
                                        : ""

                                }
                            </Slider>
                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4'>
                            <div className="container tab">
                                <ul className="nav nav-pills">
                                    <li className="nav-item active">
                                        <a href="#recent" className="nav-link" data-bs-toggle="tab">Recents</a>
                                    </li>
                                    <li className="nav-item " >
                                        <a href="#related" className="nav-link" data-bs-toggle="tab">Related</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a href="#popular" className="nav-link" data-bs-toggle="tab">Popular</a>
                                    </li>
                                </ul>

                                {/* navtabs */}
                                <div className="tab-content ">
                                    <div className="tab-pane active" id='recent'>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img3.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane " id='related'>
                                    <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img3.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane " id='popular'>
                                    <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img3.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src="./img5.jpg" class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
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

            {/* second section for feature news */}
            <section className="sec-section">
                <div className='container'>
                    <h4 className='ml-1 mt-3 mb-3'>Feature</h4>
                    <div className="container swipper-hidden">
                        <Slider {...setting}>
                            {
                                dataList ? dataList.map((data) => {
                                    return (
                                        <>
                                            <div className=" hero-content m-2">
                                                <img src={data.url} class="card-img" height="250" alt="..." />
                                                <h5 >{data.title}</h5>
                                                <p>30/02/2021</p>
                                            </div>

                                        </>)
                                }) : ""
                            }
                        </Slider>
                    </div>
                    <Swiper spaceBetween={30} pagination={{ "clickable": true }} className="mySwiper swiper-visible">
                        {
                            dataList ? dataList.map((data) => {
                                return (
                                    <>

                                        <SwiperSlide className='mb-5'>

                                            <div className=" hero-content m-2">
                                                <img src={data.url} class="card-img" height="250" alt="..." />
                                                <h5 >{data.title}</h5>
                                                <p>30/02/2021</p>
                                            </div>

                                        </SwiperSlide>

                                    </>)
                            })
                                : ""
                        }

                    </Swiper>
                </div>
            </section>

            {/* third section for trending news */}
            <section className="section-content">
                <div className='container mt-3'>

                    <div className='row'>
                        <div className='col-sm-8 col-md-8 col-lg-8'>
                            <h3>Trending News</h3>

                            <div className="row trending-btn">
                                <div className="conatiner">
                                    <Slider {...secSlider}>
                                        <div className='hero-bsns-content'>
                                            <div style={{ margin: '0 10px ' }}>
                                                <img src='./img2.jpg' class="card-img-top" alt='s' />
                                                <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> |
                                                    <span className="visible-span">22/06/2021</span>
                                                    <span className="top-span">22/06/2021</span> </span>
                                                <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <div className='hero-bsns-content'>
                                            <div style={{ margin: '0 10px' }}>
                                                <img src='./img2.jpg' class="card-img-top" alt='s' />
                                                <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> |
                                                    <span className="visible-span">22/06/2021</span>
                                                    <span className="top-span">22/06/2021</span> </span>
                                                <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <div className='hero-bsns-content'>

                                            <div style={{ margin: '0 10px' }}>
                                                <img src='./img2.jpg' class="card-img-top" alt='s' />
                                                <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> |
                                                    <span className="visible-span">22/06/2021</span>
                                                    <span className="top-span">22/06/2021</span> </span>
                                                <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className='hero-bsns-content col-size'>
                                        <div className='row mb-1'>

                                            <div className='col '>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right '>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='hero-bsns-content col-size'>
                                        <div className='row mb-1'>

                                            <div className='col '>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right '>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='hero-bsns-content col-size'>
                                        <div className='row mb-1'>

                                            <div className='col '>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right '>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='hero-bsns-content col-size'>
                                        <div className='row mb-1'>

                                            <div className='col '>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right '>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='hero-bsns-content col-size'>
                                        <div className='row mb-1'>

                                            <div className='col '>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right '>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='hero-bsns-content col-size'>
                                        <div className='row mb-1'>

                                            <div className='col '>
                                                <img src='./img2.jpg' class="card-img-left" width="85" height='75' alt='' />
                                            </div>
                                            <div className='col right '>
                                                <span >Technology | 21/06/2021</span>
                                                <h6 className="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4'>
                            <h5>Follow Us</h5>
                            <div className="row mb-2 ">
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-facebook"></i><br />
                                        <span>1400<br />Connections</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-instagram"></i><br />
                                        <span>14k <br />Connections</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-twitter"></i><br />
                                        <span>14k <br /> Connections</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-youtube"></i><br />
                                        <span>14k <br /> Connections</span>
                                    </div>
                                </div>
                            </div>
                            {
                                dataList ? dataList.map((data) => {
                                    return (
                                        <><div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col '>
                                                    <img src={data.url} class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right '>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">{data.title}</h6>
                                                </div>

                                            </div>
                                        </div>

                                        </>)
                                }) : ""
                            }

                        </div>
                    </div>
                </div>
            </section>

            {/* fourth section for tag news */}
            <section className="sectionTwo">
                {/* first container */}
                <div className="container">

                    <div className="row foruth-btn">
                        <Slider {...secSlider}>
                            <div className="col">
                                <div className='hero-bsns-content'>
                                    <div style={{ margin: '0 10px' }}>
                                        <img src='./img3.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link>
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className='hero-bsns-content'>
                                    <div style={{ margin: '0 10px' }}>
                                        <img src='./img3.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link>
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className='hero-bsns-content'>
                                    <div style={{ margin: '0 10px' }}>
                                        <img src='./img3.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link>
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className='hero-bsns-content'>
                                    <div style={{ margin: '0 10px' }}>
                                        <img src='./img3.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link>
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                {/* second container */}
                <div className='container mt-3'>

                    <div className='row'>
                        <div className='col-sm-8 col-md-8 col-lg-8'>
                            <h4>Video News</h4>
                            <div className='hero-bsns-content'>
                                <img src='./img7.jpg' class="card-img" alt='s' />
                                <span className="video-icon">
                                    <i className="fa fa-play"></i>
                                </span>
                                <span className="text-size">Bussiness / </span>
                                <span className="date-size">18/06/2021</span>
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                <div className="mobile-view-content">
                                    <span>Bussiness /</span>
                                    <span>18/06/2021</span>
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4 col-md-4 col-lg-4' style={{  overflowX: 'auto' }}>
                            <div className='top-container'>
                                <h6>Popular Posts</h6>
                                <Link href="" ><a>View All</a></Link>
                            </div>

                            {
                                dataList ? dataList.map((data) => {

                                    return (
                                        <>

                                            <div className='hero-bsns-content col-size'>
                                                <div className='row mb-1'>

                                                    <div className='col'>
                                                        <img src={data.url} class="card-img-left" width="85" height='75' alt='' />
                                                    </div>
                                                    <div className='col right'>
                                                        <span >Technology | 21/06/2021</span>
                                                        <h6 className="h6">{data.title}</h6>
                                                    </div>

                                                </div>
                                            </div>

                                        </>)
                                }) : ""
                            }


                        </div>
                    </div>
                </div>
            </section>
            {/* fifth section  */}
            <section className="section-content">
                <div className='container mt-3'>

                    <div className='row'>
                        <div className='col-sm-8 col-md-8 col-lg-8'>
                            <h4>Entainment News</h4>
                            <div className="row">
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img8.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> |
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img2.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> |
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img3.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> |
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img5.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> |
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4'>
                            <div className='top-container'>
                                <h6>Most Share</h6>
                                <Link href="" style={{ justifyContent: 'right' }}><a>View All</a></Link>
                            </div>
                            {
                                dataList ? dataList.map((data) => {
                                    return (
                                        <><div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img src={data.url} class="card-img-left" width="85" height='75' alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <span >Technology | 21/06/2021</span>
                                                    <h6 className="h6">{data.title}</h6>
                                                </div>

                                            </div>
                                        </div>

                                        </>)
                                }) : ""
                            }

                        </div>
                    </div>
                </div>
            </section>

            {/* sixth section */}
            <section className="section-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <h3>Sports News</h3>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <div className='hero-bsns-content'>
                                        <img src='./img9.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> |
                                            <span className="visible-span">22/06/2021</span>
                                            <span className="top-span">22/06/2021</span>
                                        </span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <button className="btn btn-outlin ">Learn More</button>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    {
                                        dataList ? dataList.map((data) => {
                                            return (
                                                <><div className='hero-bsns-content col-size'>
                                                    <div className='row mb-1'>

                                                        <div className='col'>
                                                            <img src={data.url} class="card-img-left" width="85" height='75' alt='' />
                                                        </div>
                                                        <div className='col right'>
                                                            <span >Technology | 21/06/2021</span>
                                                            <h6 className="h6">{data.title}</h6>
                                                        </div>

                                                    </div>
                                                </div>

                                                </>)
                                        }) : ""
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h4>Upcomming Matches</h4>
                            {
                                dataList ? dataList.map((data) => {
                                    return (
                                        <><div className='hero-bsns-content col-size'>
                                            <div className='row mb-1'>

                                                <div className='col'>
                                                    <img
                                                        src="https://quomodosoft.com/html/newsprk/assets/img/flag/match1.png"
                                                        width="100"
                                                        alt='' />
                                                </div>
                                                <div className='col right'>
                                                    <h5>Germavy Vs France</h5>
                                                    <span>Tommorow | M22:30 (CST)</span>
                                                </div>

                                            </div>
                                        </div>

                                        </>)
                                }) : ""
                            }
                        </div>
                    </div>

                </div>
            </section>

            {/* seventh section */}
            <section className="section-content">
                <div className="container">
                    <h2>Bussiness News</h2>
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8 demo-text">
                            <div className="row mb-3">
                                <div className="col">
                                    <img src='./img2.jpg' class="card-img" alt='s' /> </div>
                                <div className="col">
                                    <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                    <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                    <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <button className="btn btn-outlin">Learn More</button>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col"><img src='./img.jpg' class="card-img" alt='s' /> </div>
                                <div className="col">
                                    <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                    <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                    <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <button className="btn btn-outlin">Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-md-4 col-sm-4">
                            <h5>Follow Us</h5>
                            <div className="row mb-2 ">
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-facebook"></i><br />
                                        <span>1400<br />Connections</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-instagram"></i><br />
                                        <span>14k <br />Connections</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-twitter"></i><br />
                                        <span>14k <br /> Connections</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="social-container">
                                        <i className="fa fa-youtube"></i><br />
                                        <span>14k <br /> Connections</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                    <div className="bottom-container">
                                        <span>Ads</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* eighth section for footer*/}
            <footer className="section-three">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h1>NewsPRK</h1>
                            <a className="m-2"><i className="fa fa-facebook"></i></a>
                            <a className="m-2"><i className="fa fa-instagram"></i></a>
                            <a className="m-2"><i className="fa fa-twitter"></i></a>
                            <a className="m-2"><i className="fa fa-youtube"></i></a>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h6>Subscribe to our Newletter</h6>
                            <form>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Headline..."
                                    />
                                    <label for="floatingInput">Email</label>
                                    <button className="btn btn-primary mt-2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div><hr />
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h6>News categories</h6>
                            <div className="row">
                                <div className="col">
                                    <li>Politics</li>
                                    <li>Business</li>
                                    <li>Science</li>
                                    <li>Technology</li>
                                    <li>Entertainment</li>
                                    <li>Health</li>
                                    <li>Sports</li>
                                </div>
                                <div className="col">
                                    <li>Education</li>
                                    <li>Obituaries</li>
                                    <li>Corrections</li>
                                    <li>Education</li>
                                    <li>Foods</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h6>Living</h6>
                            <div className="row">
                                <div className="col">
                                    <li>Crossword</li>
                                    <li>Classifieds</li>
                                    <li>Food</li>
                                    <li>Health</li>
                                    <li>Megazine</li>
                                </div>
                                <div className="col">
                                    <li>NYT Store</li>
                                    <li>Photographics</li>
                                    <li>Journalisms</li>
                                    <li>Tools & Services</li>
                                    <li>Weddings</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h6>Opinion</h6>
                            <div className="row">
                                <div className="col">
                                    <li>Today’s Opinion</li>
                                    <li>Op-Ed Contributing</li>
                                    <li>Contributing Writers</li>
                                    <li>Collections</li>
                                    <li>Bussiness</li>
                                </div>
                                <div className="col">
                                    <li>Marketing</li>
                                    <li>Today’s Paper</li>
                                    <li>Saturday Review</li>
                                    <li>Product Review</li>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

            <div className="footer">
                <div className="container">
                    <a style={{ color: '#888', borderRight: '1px dotted #f1f1f1' }}>copyright 2021 , All Rights Deserve </a>
                    <a style={{ color: '#888', marginLeft: '5px' }}>Privacy&Policy</a>
                </div>
            </div>

        </>
    )
}
