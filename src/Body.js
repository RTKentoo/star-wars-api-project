import React, {Component} from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

	> button {
		margin: 5px;
	}
`

class Body extends Component {
	constructor() {
		super()
		this.state ={
			charName: "",
			height: "",
			hairColor: "",
			eyeColor: "",
			birthYear: "",
			gender: ""
		 }
		 this.handleClick = this.handleClick.bind(this)
	}

	handleClick(url) {
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				 this.setState( {
					charName: data.name,
					height: data.height,
					hairColor: data.hair_color,
					eyeColor: data.eye_color,
					birthYear: data.birth_year,
					gender: data.gender,
				} ) })


	}

	render() {
		return(
			<div>
				<ButtonWrapper>
					<button 
						onClick={ () => this.handleClick(`https://swapi.co/api/people/1/`) } >
						Luke Skywalker
					</button>
					<button 
						onClick={ () => this.handleClick(`https://swapi.co/api/people/2/`) } >
						C-3PO
					</button>
					<button 
						onClick={ () => this.handleClick(`https://swapi.co/api/people/3/`) } >
						R2-D2
					</button>
					<button 
						onClick={ () => this.handleClick(`https://swapi.co/api/people/4/`) } >
						Darth Vader
					</button>
				</ButtonWrapper>
				<p> Name: {this.state.charName} </p>
				<p> Height: {this.state.height} cm </p>
				<p> Hair Color: {this.state.hairColor} </p>
				<p> Eye Color: {this.state.eyeColor} </p>
				<p> Birth Year: {this.state.birthYear} </p>
				<p> Gender: {this.state.gender} </p>

			</div>
		)
	}
}

export default Body