import React from 'react';

const Footer = () => {
	return (
		<footer
			className="footer p-2 "
			style={{
				background: 'rgba(0, 0, 0, 0.50)',
				color: 'white',
			}}
		>
			<div className="container has-text-centered">
				<p className="copy p-1">
					Designed by Mo Ager, Anthony DeCapite, Morgan Schall, Kyle Young and
					Ryan Evans.
				</p>
				<p className="copy p-1">All rights reserved</p>
				<p className="copy p-1">Copyright 2021 YouTube.Live</p>
			</div>
		</footer>
	);
};

export default Footer;
