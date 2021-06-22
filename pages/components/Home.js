import { useEffect, useState, useRef } from 'react';
import { db } from '../../firebase';
import Link from 'next/link';
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





const Home = () => {


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

            {/* first section for top content */}
            <section className="section-content">
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-sm-8 col-md-8 col-lg-8 mb-2'>
                            <div className='hero-bsns-content'>
                                <img src='./img9.jpg' class="card-img" alt='s' />
                                <span className="video-icon">
                                    <i className="fa fa-play"></i>
                                </span>
                                <span className="text-size">Bussiness /</span>
                                <span className="date-size">18/06/2021</span>
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            </div>
                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4'>
                            <h6 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Related Posts</h6>
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

            {/* second section for feature news */}
            <section className="sec-section">
                <div className='container'>
                    <h4 className='ml-1 mt-3 mb-3'>Feature</h4>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={5}
                        freeMode={true}
                        pagination={{ "clickable": true }}
                        className="mySwiper swipper-hidden">
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
                            <div className="row">
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img2.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img3.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img4.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img5.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4'>
                            <div className='top-container'>
                                <h6>Most Viewed</h6>
                                <Link href="" style={{ justifyContent: 'right' }}><a>View All</a></Link>
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

                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className='hero-bsns-content'>
                                <img src='./img3.jpg' class="card-img-top" alt='s' />
                                <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className='hero-bsns-content'>
                                <img src='./img6.jpg' class="card-img-top" alt='s' />
                                <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
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
                                <span className="float-text"><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            </div>
                        </div>

                        <div className='col-sm-4 col-md-4 col-lg-4'>
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
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img2.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img3.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='hero-bsns-content'>
                                        <img src='./img5.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
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
                            <h2>Sports News</h2>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <div className='hero-bsns-content'>
                                        <img src='./img9.jpg' class="card-img-top" alt='s' />
                                        <span style={{ padding: '10px' }}><Link href=""><a style={{ textDecoration: 'none', fontWeight: 'bold' }}>Technology</a></Link> | 22/06/2021</span>
                                        <h5 style={{ padding: '2px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p style={{ padding: '0 0 5px 10px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <button className="btn btn-outlin">Learn More</button>
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
export default Home;