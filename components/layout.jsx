import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
	return (
		<div className="max-w-2xl mx-auto">
			<Navbar />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
