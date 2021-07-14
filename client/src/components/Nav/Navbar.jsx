import 'bulma/css/bulma.min.css';
import React, { useContext, useEffect, useState } from 'react';
// import '../pages/landingPage/style.css';
import { UserContext } from '../../utils/UserContext';
import NavLink from './NavLink';

function Navbar() {
	// const [loggedIn, setLoggedIn] = useContext(UserContext);
	const [navLinks, setNavLinks] = useState([]);
	const { user } = useContext(UserContext);
	useEffect(() => {
		!user
			? setNavLinks([
					{ name: 'Home', toLink: '/', icon: 'fas fa-home' },
					{ name: 'Login', toLink: '/login', icon: 'fas fa-sign-in-alt' },
					{ name: 'Signup', toLink: '/signup', icon: 'fas fa-user-plus' },
			  ])
			: setNavLinks([
					{ name: 'Home', toLink: '/', icon: 'fas fa-home' },
					{ name: 'Search Venues', toLink: '/MyVenues', icon: 'fas fa-guitar' },
					{
						name: 'Search Artists',
						toLink: '/MyArtists',
						icon: 'fas fa-music',
					},
					{
						name: 'Search Events',
						toLink: '/LiveEvents',
						icon: 'fas fa-caret-right',
					},
					{
						name: 'Search Videos',
						toLink: '/SearchVideos',
						icon: 'fas fa-user-friends',
					},
					{ name: 'Logout', toLink: '/', icon: 'fas fa-sign-out-alt' },
			  ]);
		return () => {
			// console.log('Nav links set.');
			// console.log('unmounted.');
		};
	}, [user]);

	return (
		<nav
			className="navbar"
			style={{
				background: 'rgba(0, 0, 0, 0.50)',
				color: 'white',
			}}
		>
			<div className="container">
				<div className="navbar-brand">
					<span className="navbar-burger burger" data-target="navbarMenu">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>
				<div id="navbarMenu" className="navbar-menu">
					<div className="navbar-end">
						{navLinks.map((link) => (
							<NavLink
								key={link.name}
								name={link.name}
								toLink={link.toLink}
								icon={link.icon}
							/>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
