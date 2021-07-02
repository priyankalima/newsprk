import { useEffect, useState, useRef } from 'react';
// import { db } from '../../firebase';
import Link from 'next/link';
import Navbar from './Navabar';
import SliderSection from './SliderSection';






const Home=()=> {


    const [darkMode, setDarkMode] = useState(false);

    return (

        <>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
            <Navbar />
            <div className="container content-mode">
                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                    </label>
                </div>
                <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
            </div>
            <SliderSection/>
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
        </div>
        </>
    )
}
export default Home;
