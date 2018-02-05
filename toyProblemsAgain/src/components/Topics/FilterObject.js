import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: [ 
                {name:"Ted", age:20, job:"banker"}, 
                {name:"Tim", age:30, sex:"male"}, 
                {name:"Ada", age:40, height:"5 feet 4 inches"},
                {name:"Pat", age:30, weight: 130}
            ],
            userInput: '',
            filteredArray: []
        }

    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    filterUsers(prop){
        const array = this.state.unFilteredArray;
        const filteredArray = [];

        for(var i = 0; i < array.length; i++){
            if(array[i].hasOwnProperty(prop)){
                filteredArray.push(array[i]);
            }
        }

        this.setState({ filteredArray: filteredArray });
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" value={this.state.userInput} onChange={ (e) => {this.handleChange(e.target.value) }}></input>
                <button className="confirmationButton" onClick={ () => { this.filterUsers(this.state.userInput) }}>Filter</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;