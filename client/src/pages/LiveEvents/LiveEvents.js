import React, { useState } from 'react';
import sgAPI from '../../utils/sgAPI';


function Events() {
	const [searchResults, setSearchResults] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const queryEvents = (query) => {
		console.log(query);
        const queryVal = query.replace(/ +/g, '-');
		sgAPI
			.getEvents(queryVal)
			.then((res) => setSearchResults(res.data.events))
			.catch((error) => console.log(error));
	};
	const handleChange = (event) => {
		const { value } = event.target;
		setSearchQuery(value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		queryEvents(searchQuery);
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
							id="eventSearch"
							placeholder="Enter a Performers name to search shows! "
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
					{searchResults.map((event) => (
						<div
							className="card m-2"
							style={{ width: '18rem' }}
							key={event.name}>
							<div className="card-body">
								<h5 className="card-title">{event.title}</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									Type: {event.type}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									Venue: {event.venue.name}
								</h6>
								<p className="card-text"> Address: {event.venue.address}</p>
                                <p className="card-text">{event.venue.extended_address}</p>
								<a href={event.url} className="card-link" target="_blank" rel="noopener noreferrer">
									Get tickets here! 
								</a>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
export default Events;
