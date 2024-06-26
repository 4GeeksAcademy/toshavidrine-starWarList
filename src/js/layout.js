import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetailView } from './views/detailView';

// Create your first component
const Layout = () => {
	// The basename is used when your project is published in a subdirectory and not in the root of the domain
	// You can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "/";

	return (
		<div>
			<header>
				<h1>Star Wars Favorite Project</h1>
			</header>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/detail-view/:category/:uid" element={<DetailView />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					</main>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
