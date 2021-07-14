import React, { useState } from 'react';
import sgAPI from '../../utils/sgAPI';
import './style.css';



function Performers() {
	const [searchResults, setSearchResults] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const queryPerformers = (query) => {
		console.log(query);
        const queryVal = query.replace(/ +/g, '-');
		sgAPI
			.getPerformers(queryVal)
			.then((res) => setSearchResults(res.data.performers))
			.catch((error) => console.log(error));
	};
	const handleChange = (event) => {
		const { value } = event.target;
		setSearchQuery(value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		queryPerformers(searchQuery);
	};

	return (
		<div className="container" style={{ minHeight: '100vh' }}>
			<div>
				<form
					action=""
					className="d-flex justify-content-center align-items-center">
					<div className="m-3 col-6">
						<input
							type="text"
							className="form-control"
							id="performerSearch"
							placeholder="Enter A Performer to Search!"
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
					{searchResults.map((performer) => (
						<div
							className="card m-6"
							style={{ width: '18rem' }}
							key={performer.name}>
							<div className="card-body">
                              <img src={performer.images.huge} alt={performer.name}/>
					        	<h5 className="card-title">{performer.name}</h5>
                                <br />
								<h6 className="card-subtitle mb- text-muted">
									Upcoming Shows: {performer.num_upcoming_events}
								</h6>
                                <br />
                                <div>
                                <h6 className="card-subtitle mb-2">
									Genres: 
								</h6>
                                <ul className="genres">
                                    <li>{performer.genres[0].name}</li>
                                    <li>{performer.genres[1].name}</li>
                                </ul>
                                </div>
                                <br />
								<a href={performer.url} className="card-link" target="_blank" rel="noopener noreferrer">
									Visit their Page! 
								</a>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
export default Performers;


