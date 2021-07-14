import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Nav/Navbar';
import LandingPage from './pages/landingPage/Landing';
import LiveEvents from './pages/LiveEvents/LiveEvents';
import Login from './pages/login/Login';
import MyArtists from './pages/MyArtists/MyArtists';
import MyVenues from './pages/MyVenues/MyVenues';
import SearchVideos from './pages/SearchVideos/SearchVideos';
import SignUp from './pages/signup/SignUp';
import { UserContext } from './utils/UserContext';

const App = () => {
	const [user, setUser] = useState(null);
	const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<Router>
			<UserContext.Provider value={userValue}>
				<div>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/MyVenues" component={MyVenues} />
							<Route exact path="/SearchVideos" component={SearchVideos} />
							<Route exact path="/MyArtists" component={MyArtists} />
							<Route exact path="/LiveEvents" component={LiveEvents} />
						</Switch>
					</div>
					<Footer />
				</div>
			</UserContext.Provider>
		</Router>
	);
};

export default App;
