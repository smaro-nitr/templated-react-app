import React, { Component } from 'react';

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = { result: { MGLT: "loading .." } }
    }

    componentWillMount() {
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

    render() {
        return (
            <div className="card card-body">
                {this.state.result.MGLT}
            </div>
        )
    }
}

export default Api;