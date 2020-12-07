import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import errorboundary from '../components/errorboundary'



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield:''
		}
	}

	// componentDidMount(){
	// fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users => {this.setState({ robots: users})});
	// }

onSearchChange = (event) =>{
	this.setState({searchfield: event.target.value});

}
render(){
	const { robots, searchfield } = this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	return (
		<div className='tc'>
		<h1 className='f1'>Robogakure</h1>
		<SearchBox searchChange ={this.onSearchChange}/>
		<Scroll>
			<errorboundary>
				<CardList robots={filteredRobots} />
			</errorboundary>
		</Scroll>
		</div>
		);
	}
}
export default App;