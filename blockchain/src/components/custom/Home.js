import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import './bg.css';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponents: false
        }
    }


    render(){
        return (
            <div className='home-container'>
            <div className="container">
                <ul className="collection with-header">
                <li className="collection-header"><h3>Choose User Type</h3></li>
                    <li className="collection-item">
                        <div><h4>User<Link to="/choose" className="secondary-content"><i className="material-icons">send</i></Link></h4></div></li>
                    <li className="collection-item">
                        <div><h4>Admin<Link to="/login" className="secondary-content"><i className="material-icons">send</i></Link></h4></div> </li>
                </ul>
            </div>
            </div>
        )
    }
}


export default Home

