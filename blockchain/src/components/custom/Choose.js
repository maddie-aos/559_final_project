import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './navbar.css'

class Choose extends Component {

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
                final: data
            })
        })
        .catch(function(err){
            console.error(err);
        });

    }

    handleInputChange = (e) => {
        // console.log(e.target.innerHTML);
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
                            <a href="" style={{alignSelf: 'right'}}><Link to={"/vote/" + election.election_id} className="button" onClick={this.handleInputChange}>Go Vote!</Link></a>
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

export default Choose;



