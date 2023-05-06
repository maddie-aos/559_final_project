import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './navbar.css'

class ElectionData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            election_name: [],
            election_organizer: [],
            election_id: [],
            final: [],
            id: null,
        };
    }

    componentDidMount(){
        let currentComponent = this;
      
        axios.get('http://localhost:8000/api/electionName', {})
        .then(function(response){ 
            var data = response.data;
            currentComponent.setState({
                // election_name: data[0],
                // election_organizer: data[1],
                // election_id: data[2],
                final: data
            })
        })
        .catch(function(err){
            console.error(err);
        });

    }

    handleInputChange = (e) => {
        var name = e.target.innerHTML;
        var index = 0;
        for(let i = 0; i < this.state.election_name.length; i++){
            if(name === this.state.election_name[i]){
                index = i;
                break;
            }
        }
        var id = this.state.election_id[index];
        this.setState({
            id : id
        })
    };


    render(){
        const electionList = this.state.final.map(election => {
            return (
                <div className="contact" key={election.election_id}>
                  <li className="collection-item avatar"> 
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
                  <h4>{election.election_name}</h4>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Link to={"/candidates/" + election.election_id} className="title" onClick={this.handleInputChange}><button id={election.election_id} className="button">Add candidate</button></Link>
                    <Link to={"/voteCount/" + election.election_id} className="title" onClick={this.handleInputChange}><button id={election.election_id} className="button">View vote Count</button></Link>
                  </div>
                  </div>
                    </li>   
                </div>
            )
        }) 
        return(
            <div className="container">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <h3>Elections</h3>
                    </li>
                        {electionList}
                </ul>
            </div>
        )
    }
}

export default ElectionData;