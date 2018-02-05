import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            users: [
                {name: "Ted", age: 45, job: "teacher"},
                {name: "Ada", weight: 130, title: "mom"},
                {name: "Tim", hairColor: "brown", shoeSize: 11},
                {name: "Pat", gender: "female", age: 24}
            ],
            userInput: '',
            filteredUsers: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }

    updateFilteredUser(userInput){
        var users = this.state.users;
        var filteredUsers = [];

        for(var i = 0; i < users.length; i++){
            if(users[i].hasOwnProperty(userInput)){
                filteredUsers.push([users[i]]);
            }
        }

        this.setState({ filteredUsers: filteredUsers });
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Objects</h4>
                <span className="puzzleText">Users: { JSON.stringify(this.state.users) }</span>
                <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value) }}/>
                <button className="confirmationButton" onClick={ () => {this.updateFilteredUser(this.state.userInput) }}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered Users: { JSON.stringify(this.state.filteredUsers) }</span>
            </div>
        )
    }
}

export default FilterObject;