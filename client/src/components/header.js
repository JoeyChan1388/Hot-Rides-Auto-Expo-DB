import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
	const { currentUser, logout } = useAuth();
	const history = useHistory()

	async function handleLogout() {
		try {
		  await logout()
		  history.push("/login")
		} catch {
		}
	}

	return (
		<header>
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<li className="nav-item">
								<a className="nav-link-title" href="/">
									Hot Rides Auto Expo
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/Registrations/Self">
									Self-Registration
								</a>
							</li>
							{/* If currentUser exists do... */}
							{currentUser &&
							<li className="nav-item">
								<a className="nav-link" href="/Registrations/Manual">
									Manual-Registration
								</a>
							</li>
							}
							<li className="nav-item">
								<a className="nav-link" href="/Donations/Create">
									Donations
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/Sponsors/Create">
									Sponsors
								</a>
							</li>

							{/* Inline if statements for dynamic nav bar */}
							{currentUser &&
							<li className="nav-item">
								<p className="nav-link"> {currentUser && currentUser.email}</p>
							</li>
							}

							{ currentUser &&
							<li className="nav-item-right">
								<a className="nav-link" onClick={handleLogout} href="/login">
									Logout
								</a>
							</li>
							}
							
							{!currentUser &&
							<li className="nav-item-right">
								<a className="nav-link" href="/login">
									Login
								</a>
							</li>
							}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;