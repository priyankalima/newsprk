
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


    return (
        <>
            {user ?
                <>
                    <nav className="navbar p-3">
                        <div className="container">
                            <div className="left-content">

                                <div class="input-group flex-nowrap">
                                    <Link href="/"><a className='link m-1'><i class="fa fa-home"></i></a></Link>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                    <span class="input-group-text" id="addon-wrapping">
                                        <Link href="#"><a className='link'><i class="fa fa-search"></i></a></Link>
                                    </span>
                                </div>
                            </div>

                            <div className="right-content">
                                <div className="date">
                                    <select>
                                        <option>English</option>
                                        <option>Hindi</option>
                                    </select>

                                </div>
                                <div className="social">
                                    <Link href="/components/CreatePost" ><a className="dash">Create +</a></Link>

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
                                <Link href="" ><a className='link'>Home</a></Link>
                                <Link href="" ><a className='link'>Home</a></Link>
                                <Link href="" ><a className='link'>Home</a></Link>
                                <Link href="" ><a className='link'>Home</a></Link>
                            </div>


                            <div className="right-content">
                                <div className="date">
                                    <select>
                                        <option>English</option>
                                        <option>Hindi</option>
                                    </select>
                                </div>
                                <div className="social">
                                    <div class="input-group flex-nowrap">

                                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                        <span class="input-group-text" id="addon-wrapping">
                                            <Link href="#"><a className='link'><i class="fa fa-search"></i></a></Link>
                                        </span>
                                    </div>
                                    <Link href="/signup"><a className='link'><i className="fa fa-user"></i></a></Link>

                                </div>
                            </div>
                        </div>
                    </nav>
                </>
            }
        </>
    )
}
export default Navmenu;