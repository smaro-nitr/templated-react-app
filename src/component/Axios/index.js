import React, { Component } from 'react';
import ApiService from '../../service/apiService';

class Axois extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            response : null,
            startshipsId: 0
        };
    }

    componentDidMount() {
        this.fetchAPI();
    }

    fetchAPI = () => {
        this.setState({ response: 'Loading ..' }, () => {
            const startshipsId = this.state.startshipsId + 1;
            ApiService.serviceOne(startshipsId)
                .then(response => {
                    this.setState({ response, startshipsId });
                }).catch(error => {
                    this.setState({ response: 'Oppss Found None ....... Try Again', startshipsId });
                });
        });
    }

    render() {
        const name = this.state.response && this.state.response.data && this.state.response.data.name;
        return <div>
            Select a starship for yourself:<br/ >
            {name ? name : this.state.response}
            <br /><br />
            <input type="button" className="btn btn-primary" value="Fetch Another" onClick={() => this.fetchAPI()}/>
        </div>;
    }
}

export default Axois;