import React, { Component } from 'react';

class ApiFetch extends Component {
    constructor(props) {
        super(props)
        this.state = { result: { MGLT: "loading .." } }
    }

    render() {
        return (
            <div className="card card-body">
                Fetched from API : {this.state.result.MGLT}
            </div>
        )
    }

    componentDidMount() {
        fetch("https://swapi.co/api/starships/" + this.props.starshipId)
            .then(response => response.json())
            .then(data => {
                if (data && data.MGLT) {
                    this.setState({ result: data })
                } else {
                    this.setState({ result: { MGLT: "not available" } })
                }
            })
            .catch(error => {
                this.setState({ result: { MGLT: "error" } })
            })
    }
}

export default ApiFetch;