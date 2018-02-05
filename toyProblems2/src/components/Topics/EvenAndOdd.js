import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val){
        console.log(val);
        this.setState({userInput: val});
    }

    assignEvenAndOdds(userInput){
        const arr = userInput.split(',');
        const evens = [];
        const odds = [];

        for(var i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                evens.push(parseInt(arr[i], 10));
            }else{
                odds.push(parseInt(arr[i], 10));
            }
        }

        this.setState({ evenArray: evens, oddArray: odds });
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" value={ this.state.userInput } onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
                <span className="resultsBox">Evens: { this.state.evenArray }</span>
                <span className="resultsBox">Odds: { this.state.oddArray }</span>
            </div>
        )
    }
}

export default EvenAndOdd;