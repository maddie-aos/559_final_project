import React, { Component } from 'react';
import Web3 from 'web3';
import Election from '../../build/Election.json'
import { Link } from 'react-router-dom'
import './navbar.css'

class Vote extends Component {

    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
      }
    
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadBlockchainData() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        console.log(accounts)
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        const networkData = Election.networks[networkId]
        if(networkData) {
            const election = new web3.eth.Contract(Election.abi, networkData.address)
            this.setState({ election })
            const candCount = await election.methods.candidatesCount().call()
            this.setState({ candCount })
            for (var i = 1; i <= candCount; i++) {
                const candidates = await election.methods.candidates(i).call()
                if(candidates.election_id === this.state.id){
                    this.setState({
                        candidates: [...this.state.candidates, candidates]
                    })
                }
            }
            console.log(this.state.candidates)
        } else {
            window.alert('Election contract not deployed to detected network.')
        }
    }

    handleInputChange = async (e) => {
        const candidateId = e.target.id;
        this.setState({ selectedId: candidateId });
        await this.vote(candidateId);
        if (window.confirm(`Are you sure you want to vote for this candidate?`)) {
            if (window.confirm(`Did you find the voting process easy and intuitive? Click OK for thumbs up, Cancel for thumbs down.`)) {
                this.setState({ thumbsUp: this.state.thumbsUp + 1 });
            } else {
                this.setState({ thumbsDown: this.state.thumbsDown + 1 });
            }
            window.location.assign("/");
        }
    }
    


    vote(id) {
        console.log(this.state.selectedId)
        this.setState({ loading: true })
        this.state.election.methods.vote(id).send({ from: this.state.account })
        .on('confirmation', (confirmationNumber, receipt) => {
            if (confirmationNumber === 1) {
                if (window.confirm(`Are you sure you want to vote for this candidate?`)) {
                    if (window.confirm(`Did you find the voting process easy and intuitive? Click OK for thumbs up, Cancel for thumbs down.`)) {
                        this.setState({ thumbsUp: this.state.thumbsUp + 1 });
                    } else {
                        this.setState({ thumbsDown: this.state.thumbsDown + 1 });
                    }
                    window.location.assign("/");
                }
            }
            else if (confirmationNumber === 2) {
                this.setState({ loading: false })
            }
        })
    }
    

    componentDidMount(){
        let id = this.props.match.params.id;
        this.setState({
            id: id,
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            id: null,
            account: '',
            election: null,
            candCount: 0,
            candidates: [],
            loading: true,
            selectedId: null,
            thumbsUp: 0,
            thumbsDown: 0
        }
    }

    render(){
        const electionList = this.state.candidates.map(candidates => {
            return (
                <div className="contact" key={candidates.id}>
                    <li className="collection-item avatar">
                        
                        <h4>{candidates.name}</h4>
                        <p>{candidates.details}</p>
                        <a href="" className="secondary-content"><button id={candidates.id} onClick={this.handleInputChange} className="button">Vote</button></a>
                    </li>
                </div>
            )
        }) 
        return(
            <div className="container">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <h3>Candidates</h3>
                    </li>
                        {electionList}
                </ul>
            </div>
        )
    }
}

export default Vote;