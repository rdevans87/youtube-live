import React, { useContext, useRef } from 'react';
import { Redirect } from 'react-router';
import User from '../../utils/UserAPI';
import { UserContext } from '../../utils/UserContext';

export default function SignUp() {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const usernameRef = useRef();
	const passwordRef = useRef();
	const passwordCheckRef = useRef();

	const { user, setUser } = useContext(UserContext);

	const handleSignUp = async (e) => {
		e.preventDefault();

		passwordRef.current.value === passwordCheckRef.current.value
			? await User.signup({
					firstName: firstNameRef.current.value,
					lastName: lastNameRef.current.value,
					email: emailRef.current.value,
					username: usernameRef.current.value,
					password: passwordRef.current.value,
					passwordCheck: passwordCheckRef.current.value,
			  })
					.then((res) => {
						setUser(res.data.logged_in);
					})
					.catch((err) => console.log(err.message))
			: alert('passwords do not match');
	};

	return (
		<div style={{ minHeight: '100vh', marginTop: '3em' }}>
			<div className="container my-4 d-flex justify-content-center">
				<form
					action=""
					className="col-6 p-4"
					style={{
						background: 'rgba(0, 0, 0, 0.50)',
						borderRadius: '15px',
						color: 'white',
					}}
				>
					<div className="mb-3">
						<label htmlFor="firstNameSignUp" className="form-label">
							First Name
						</label>
						<input
							type="text"
							className="form-control"
							id="firstNameSignUp"
							ref={firstNameRef}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="lastNameSignUp" className="form-label">
							Last Name
						</label>
						<input
							type="text"
							className="form-control"
							id="lastNameSignUp"
							ref={lastNameRef}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="emailSignup" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="emailSignup"
							ref={emailRef}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="usernameSignUp" className="form-label">
							Username
						</label>
						<input
							type="text"
							className="form-control"
							id="usernameSignUp"
							ref={usernameRef}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="passwordSignUp" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="passwordSignUp"
							ref={passwordRef}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="confirmPasswordSignUp" className="form-label">
							Confirm Password
						</label>
						<input
							type="password"
							className="form-control"
							id="confirmPasswordSignUp"
							ref={passwordCheckRef}
						/>
					</div>
					<div className="text-center m-2">
						<button
							type="submit"
							className="btn btn-primary"
							onClick={(e) => handleSignUp(e)}
						>
							Sign Up!
						</button>
					</div>
				</form>
			</div>
			{user && <Redirect to="/" />}
		</div>
	);
}
