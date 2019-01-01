import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
import { simpleAction, secondAction } from './actions/simpleAction'


class App extends Component {

	constructor(props) {
		super(props);
		this.appAction = this.appAction.bind(this);
		this.secAction = this.secAction.bind(this);
		this.trdAction = this.trdAction.bind(this);
	}

	appAction() {
		this.props.simpleAction();
	};

	secAction() {
		this.props.secondAction();
  };

	trdAction() {
		this.props.thirdAction();
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
				<Button bsStyle="info" onClick={this.secAction}>Test redux second action</Button>
				<Button bsStyle="info" onClick={this.trdAction}>Test redux third action</Button>
				<pre>
          {JSON.stringify(this.props)}
          {JSON.stringify(this.props.simpleReducer)}
          {JSON.stringify(this.props.nameAsProps)}
          {JSON.stringify(this.props.reason)}
				</pre>
			</div>
		);
	}
}


function mapStateToProps(state){
    return {
        nameAsProps: "Strange Things",
        reason: 1001,
        ...state
    }
}

//const mapStateToProps = state => ({
//  ...state
//});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  thirdAction: () => dispatch(simpleAction()),
  // below two are same.
  //secondAction: () => dispatch(secondAction()),
  secondAction : bindActionCreators(secondAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);