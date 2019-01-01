import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
import { simpleAction } from './actions/simpleAction'


class App extends Component {

	constructor(props) {
		super(props);
		this.appAction = this.appAction.bind(this);
	}

	appAction() {
		this.props.simpleAction();
	};


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" /> 
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload
				</p>
				<Button bsStyle="info" onClick={this.appAction}>Test redux action</Button>
				<pre>
					{JSON.stringify(this.props)}
				</pre>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});
const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);