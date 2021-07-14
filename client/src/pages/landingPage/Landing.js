import React from 'react';
import 'bulma/css/bulma.min.css';
import './style.css';
import logo from '../../images/logo.svg'
import 'font-awesome/css/font-awesome.min.css';
import Carousel from "../../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function LandingPage() {
	
	return (
			
			<section className="hero is-info is-fullheight">
				<div className="hero-head">
					
					</div>

					<div className="hero-body">
						<div className="container has-text-centered">
							<div className="column is-6 is-offset-3">
								<img src={logo} alt="Logo"></img>
								<h1 className="title">
									YouTube.Live
								</h1>
								<h2 className="subtitle">Great Live Music . Period</h2>
								<div>
									<Carousel />
								</div>
							</div>
						</div>
					</div>


			</section>

	);
}


export default LandingPage;
