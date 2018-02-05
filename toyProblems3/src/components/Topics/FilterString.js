import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            namesArr: ['Jim', 'Becky', 'Natalie', 'Austin', 'Holly', 'Bryan', 'Evan', 'Vannder' ],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    handleFilter(userInput){
        var names = this.state.namesArr;
        var filteredNames = [];

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
                <span className="puzzleText">Names: { JSON.stringify(this.state.namesArr) }</span>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value) }}/>
                <button className="confirmationButton" onClick={ () => {this.handleFilter(this.state.userInput) }}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredNames) }</span>
            </div>
        )
    }
}

export default FilterString;