import React, { useState } from 'react';
import sgAPI from '../../utils/sgAPI';


function Venues() {
	const [searchResults, setSearchResults] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const queryVenues = (query) => {
		console.log(query);
        const queryVal = query.replace(/ +/g, '-');
		sgAPI
			.getVenues(queryVal)
			.then((res) => setSearchResults(res.data.venues))
			.catch((error) => console.log(error));
	};
	const handleChange = (event) => {
		const { value } = event.target;
		setSearchQuery(value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		queryVenues(searchQuery);
	};

	return (
		<div className="container" style={{ minHeight: '100vh' }}>
			<div>
				<form
					action=""
					className="d-flex justify-content-center align-items-center"
				>
					<div className="m-3 col-6">
						<input
							type="text"
							className="form-control"
							id="venueSearch"
							placeholder="Enter A City to Search!"
							onChange={handleChange}/>
					</div>
					<button
						type="submit"
						className="btn btn-success m-3"
						onClick={handleSubmit}>
						Search
					</button>
				</form>
			</div>
			{searchResults !== null && (
				<div
					className="container d-flex flex-wrap justify-content-center"
					style={{
						background: 'rgba(255, 255, 255, 0.25)',
						margin: '2em 0',
						padding: '2em 0',
						borderRadius: '15px',
					}}>
					{searchResults.map((venue) => (
						<div
							className="card m-2"
							style={{ width: '18rem' }}
							key={venue.name}>
							<div className="card-body">
								<h5 className="card-title">{venue.name}</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									SeatGeek Score: {venue.score}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									Capacity: {venue.capacity}
								</h6>
								<p className="card-text">{venue.address}</p>
								<p className="card-text">{venue.extended_address}</p>
								<a href={venue.url} className="card-link" target="_blank" rel="noopener noreferrer">
									SeatGeek Venue Page
								</a>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
export default Venues;
