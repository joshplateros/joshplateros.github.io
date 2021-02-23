import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// Navbar stuff
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import Projects from './Projects.js';
import Articles from './Articles.js';
// Might just connect About to the Home screen
//import About from './About.js';
import Home from './About.js';

import logo from './logo.svg';
import './App.css';
// Resume!
import Resume from './resume/Resume.pdf'

class App extends Component {
  render() {
    return (
		<BrowserRouter>

		  <div className="App">
			<div className = "navigation">
				<div className="navigation-sub">

					<Navbar bg='dark' expand='lg' variant="dark">	
						<Navbar.Brand href="/"> Home </Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav"/>
						<Navbar.Collapse id="basic-navbar-nav"> 
							<Nav>
								{/* Regular "Link" works*/}
								<Link className="Links" to="/projects"> Projects </Link>
								<a className="Links" href={Resume} download> Resume </a>
							</Nav>	
						</Navbar.Collapse>
					</Navbar>
					
					

				</div>
			</div>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/articles" component={Articles} />
			<Route path="/projects" component={Projects} />
		</Switch>
		  </div>
		</BrowserRouter>
	);
  }
}

export default App;
