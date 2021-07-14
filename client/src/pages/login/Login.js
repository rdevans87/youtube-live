import React, { useContext, useRef } from 'react';
import { Redirect } from 'react-router';
import User from '../../utils/UserAPI';
import { UserContext } from '../../utils/UserContext';
import './login.css';

export default function Login() {
	const { user, setUser } = useContext(UserContext);

	const usernameRef = useRef();
	const passwordRef = useRef();
	const handleLogin = (e) => {
		e.preventDefault();

		User.login({
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		})
			.then((res) => {
				setUser(res.data.user);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div style={{ minHeight: '100vh', marginTop: '3em' }}>
			<div className="container my-4 p-4">
				<form
					action=""
					className="col-6 p-4 m-auto"
					style={{
						background: 'rgba(0, 0, 0, 0.50)',
						borderRadius: '15px',
						color: 'white',
					}}
				>
					<div className="mb-3">
						<label htmlFor="usernameLogin" className="form-label">
							Username
						</label>
						<input
							type="text"
							className="form-control"
							id="usernameLogin"
							ref={usernameRef}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="passwordLogin" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="passwordLogin"
							ref={passwordRef}
						/>
					</div>
					<div className="text-center p-2 mb-2">
						<a href="/signup" className={`mb-2 signup`}>
							Click here to sign up!
						</a>
					</div>
					<div className="text-center p-2 mb-2">
						<a href="#" className={`mb-2 signup`}>
							Forgot username or password?
						</a>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="btn btn-primary"
							onClick={(e) => handleLogin(e)}
						>
							Login
						</button>
					</div>
				</form>
			</div>
			{user && <Redirect to="/" />}
		</div>
	);
}
