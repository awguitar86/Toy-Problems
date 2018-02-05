import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            names: ["James", "Ted", "Timmothy", "Bryan", "Holly", "Evan", "Vannder", "Jessica", "Nicolas", "Natalie", "Becky", "Austin"],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val })
    }

    filterNames(userInput){
        const names = this.state.names;
        const filteredNames = [];

        for(var i = 0; i < names.length; i++){
            if(names[i].includes(userInput)){
                filteredNames.push(names[i]);
            }
        }

        this.setState({ filteredNames: filteredNames });
    }


    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.names, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value) }}></input>
                <button className="confirmationButton" onClick={ () => {this.filterNames(this.state.userInput) }}>Filter</button>
                <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredNames, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString;