import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserAPI from '../../utils/UserAPI';
import { UserContext } from '../../utils/UserContext';

export default function NavLink({ name, toLink, icon }) {
	const { setUser } = useContext(UserContext);

	const handleLogout = (e) => {
		e.preventDefault();
		UserAPI.logout();
		setUser(null);
	};

	return (
		<span className="navbar-item">
			<Link
				to={toLink}
				className="button is-white is-outlined"
				onClick={(e) => name === 'Logout' && handleLogout(e)}
			>
				<span className="icon">
					<i className={icon}></i>
				</span>
				<span>{name}</span>
			</Link>
		</span>
	);
}
