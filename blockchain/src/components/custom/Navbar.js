import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import tuffy from './tuffy.png'
import './navbar.css';



class Navbar extends Component {
    state = {
        location: ""
    }

    componentWillReceiveProps(){
        console.log(this.props)
        this.setState({
            location: this.props.history.location.pathname
        })
    }
    render(){

        if(/*this.state.location === "/" || this.state.location === "/choose"  ||*/ this.state.location === "/vote" /* || this.state.location === "/login"*/){
           return ( 
                 <nav className="Navbar navbar-expand-lg navbar-light">
                    <div className="container">
                    <a className="brand-logo">
                            CSUF E-Election
                            <img src={tuffy} alt="Tuffy"className="navbar-logo"/>
                        </a>
                    </div>
                </nav>
            );
        }else{
            return(
                <nav className="Navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="brand-logo">
                        CSUF E-Election
                        </a>
                        
                        <ul className="right">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/newelection">New Election</NavLink></li>
                            <li><NavLink to="/elections">Elections</NavLink></li>
                            <img src={tuffy} alt="Tuffy" className="navbar-logo"/>
                        </ul>
                    </div>
                </nav>
            );
        }

        
    }
}

export default withRouter(Navbar)