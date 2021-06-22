import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import Login from '../login'
import DashbordNav from './dashbordNav'
import Link from 'next/link';
import { db } from '../../firebase'


const Dashbord = () => {

	const [user, setUser] = useState("");
	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) setUser(user)
			else setUser(null)

		})
	}, [])

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
			{user ?
				<>


					<div className='row'>
						<div className='col-sm-3 col-md-3 col-lg-3 '>
							<div className='left_section'>
								<div className='logo'><i className="fa fa-newspaper-o" style={{ padding: '5px' }}></i>
									News<span style={{ color: 'blue' }}>PRK</span></div>
								<div className='tab'>
									<button>Dashbord </button><br />
									<button>Entainment </button><br />
									<button>Trending </button><br />
									<button>Feature </button><br />
									<button>Bussuiness </button><br />
									<button>Sports </button><br />
									<button>Videos</button><br />
									<div style={{ width: '100%', height: '1px', background: '#f1f1f1', marginTop: '25px' }}></div><br />
									<button>User Contacts</button><br />
									<button>User Setting</button><br />
									<button>History</button>
								</div>
							</div>
						</div>

						<div className='col-sm-9 col-md-9 col-lg-9 '>

							<div className='right_section'>
								<DashbordNav />
								<div className='container'>
									<div className='row' >
										<div className='col-sm-3 col-md-3 col-lg-3 '>
											<div className='hero-section'>

												<span>10</span><br />
												<span>POSTS</span></div>
										</div>
										<div className='col-sm-3 col-md-3 col-lg-3 '>
											<div className='hero-section'>
												<span>0</span><br />
												<span>LIKES</span>
											</div>
										</div>
										<div className='col-sm-3 col-md-3 col-lg-3 '>
											<div className='hero-section'>
												<span>0</span><br />
												<span>COMMENTS</span>
											</div>
										</div>
										<div className='col-sm-3 col-md-3 col-lg-3 '>
											<div className='hero-section'>
												<span>0</span><br />
												<span>SUBSCRIBED</span>
											</div>
										</div>

									</div>
								</div>

								<div className="container">
									<div className="row">
										<div className="col-sm-12 col-md-12 col-lg-12 ">
											<div className="hero-section-d">
												<h5>Trafic</h5>
												<div class="progress">
													<div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
												</div><br />
												<div className="progress">
													<div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div><br />
												<div className="progress">
													<div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div><br />
												<div className="progress">
													<div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div><br />
												<div className="progress">
													<div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
								</div>



								<div className='container'>

									<div className='row'>
										<div className='col-sm-6 col-md-6 col-lg-6 '>
											<div className='hero-section-d col-content-one '>
												<h1 className="num">10+</h1>
												<p className="title">ENTERTAINMENT POSTS</p>
											</div>
										</div>
										<div className='col-sm-6 col-md-6 col-lg-6'>
											<div className='hero-section-d col-content-two'>
												<h1 className="num">10+</h1>
												<p className="title">BUSSINESS POSTS</p>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-sm-6 col-md-6 col-lg-6'>
											<div className='hero-section-d col-content-three'>
												<h1 className="num">10+</h1>
												<p className="title">FEATURE POSTS</p>
											</div>
										</div>
										<div className='col-sm-6 col-md-6 col-lg-6'>
											<div className='hero-section-d col-content-four'>
												<h1 className="num">10+</h1>
												<p className="title">TRENDING POSTS</p>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-sm-6 col-md-6 col-lg-6'>
											<div className='hero-section-d col-content-five'>
												<h1 className="num">10+</h1>
												<p className="title">SPORTS POSTS</p>
											</div>
										</div>
										<div className='col-sm-6 col-md-6 col-lg-6'>
											<div className='hero-section-d col-content-six'>
												<h1 className="num">10+</h1>
												<p className="title">VIDEO POSTS</p>
											</div>
										</div>
									</div>
									<div className='row' >
										<div className='col-sm-3 col-md-3 col-lg-3 '>
											<div className='hero-section facebook'>

												<span>100k Connections</span><br />
												<span><i className="fa fa-facebook"></i></span></div>
										</div>
										<div className='col-sm-3 col-md-3 col-lg-3 '>
											<div className='hero-section instagram'>
												<span>12k Followers</span><br />
												<span><i className="fa fa-instagram"></i></span>
											</div>
										</div>
										<div className='col-sm-3 col-md-3 col-lg-3 '>
											<div className='hero-section twitter'>
												<span>10k connections</span><br />
												<span><i className="fa fa-twitter"></i></span>
											</div>
										</div>
										<div className='col-sm-3 col-md-3 col-lg-3 '>
											<div className='hero-section youtube'>
												<span>100k Subscriber</span><br />
												<span><i className="fa fa-youtube"></i></span>
											</div>
										</div>

									</div>
									{/* 4th section for contact and user admin */}
									<div className='row'>
										<div className='col-sm-6 col-md-6 col-lg-6'>
											<div className='hero-section-d'>
												<p>USER CONTACTS</p>
											</div>
										</div>
										<div className='col-sm-6 col-md-6 col-lg-6'>
											<div className='hero-section-d'>
												<p>USER SUBSCRIBED</p>
											</div>
										</div>
									</div>


								</div>




							</div>
						</div>
					</div>



				</>
				:
				<Login />
			}
		</>
	)

}
export default Dashbord;