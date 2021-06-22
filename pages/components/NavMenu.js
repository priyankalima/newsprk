
import Link from 'next/link'
import { auth } from '../../firebase';
// import Dashbord from './Dashbord';
import { useEffect, useState } from 'react';


const Navmenu = () => {

    const [user, setUser] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) setUser(user)
            else setUser(null)

        })
    }, [])

    const openNav = () => {
        document.getElementById('myNav').style.display = 'block';
    }
    const closeNav = () => {
        document.getElementById('myNav').style.display = 'none';
    }



    return (
        <>
            {user ?
                <>
                    <nav className="navbar p-3">
                        <div className="container">
                            <div className="left-content">
                                <Link href="" ><a className='link'>Home</a></Link>
                                <Link href="" ><a className='link'>Posts</a></Link>
                                <Link href="" ><a className='link'>Chatgories</a></Link>
                                <Link href="" ><a className='link'>About</a></Link>
                                <Link href="" ><a className='link'>Contact Us</a></Link>
                                <Link href="" ><a className='link'>Pages</a></Link>
                            </div>

                            <div className="right-content">
                                <div className="date">
                                    <select>
                                        <option>English</option>
                                        <option>Hindi</option>
                                    </select>
                                    <Link href="#"><a className='link m-3'><i class="fa fa-search"></i></a></Link>
                                </div>
                                <div className="social">
                                    <Link href="/components/Dashbord"><a className="dash">Dashbord</a></Link>

                                    <button className="btn btn-primary" onClick={() => auth.signOut()}>Logout</button>

                                </div>
                            </div>

                        </div>

                    </nav>
                </> :
                <>
                    <nav className="navbar p-3">
                        <div className="container">
                            <div className="left-content">
                                <Link href="" ><a className='link'>Home</a></Link>
                                <Link href="" ><a className='link'>Posts</a></Link>
                                <Link href="" ><a className='link'>Chatgories</a></Link>
                                <Link href="" ><a className='link'>Pages</a></Link>
                                <Link href="" ><a className='link'>About Us</a></Link>
                                <Link href="" ><a className='link'>Contact Us</a></Link>
                            </div>


                            <div className="right-content">
                                <div className="date">
                                    <select>
                                        <option>English</option>
                                        <option>Hindi</option>
                                    </select>
                                </div>
                                <div className="social">
                                    <Link href="#"><a className='link'><i className="fa fa-search"></i></a></Link>
                                    <Link href="/components/Dashbord"><a className='link'><i className="fa fa-user"></i></a></Link>

                                </div>
                            </div>
                        </div>
                    </nav>

                </>
            }
            <div id="myNav" class="overlay ">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav} >&times;</a>
                {
                    user ?
                    <>
                     <div className="overlay-content">
                    <Link href="" ><a className='link'>Home</a></Link>
                    <Link href="" ><a className='link'>Posts</a></Link>
                    <Link href="" ><a className='link'>Chatgories</a></Link>
                    <Link href="" ><a className='link'>Pages</a></Link>
                    <Link href="" ><a className='link'>About Us</a></Link>
                    <Link href="" ><a className='link'>Contact Us</a></Link>
                    <Link href="/components/Dashbord"><a className="dash">Dashbord</a></Link>
                    <button className="btn btn-primary" onClick={() => auth.signOut()}>Logout</button>
                   
                    </div>
                    </>
                    :
                    <>
                     <div className="overlay-content">
                    <Link href="" ><a className='link'>Home</a></Link>
                    <Link href="" ><a className='link'>Posts</a></Link>
                    <Link href="" ><a className='link'>Chatgories</a></Link>
                    <Link href="" ><a className='link'>Pages</a></Link>
                    <Link href="" ><a className='link'>About Us</a></Link>
                    <Link href="" ><a className='link'>Contact Us</a></Link>
                    <Link href="#"><a className='link'><i className="fa fa-search"></i></a></Link>
                    <Link href="/components/Dashbord"><a className='link'><i className="fa fa-user"></i></a></Link>
                    </div>
                    </>
                }
               
            </div>
            <span style={{ fontSize: '30px', cursor: 'pointer' }} className="overlay-hidden" onClick={openNav}>&#9776;</span>
        </>
    )
}
export default Navmenu;