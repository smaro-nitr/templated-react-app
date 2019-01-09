import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = { "Location": "MH", "Count": 0 }
        console.log("Constructor : " + this.state.Location)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentWillMount() {
        console.log("Will Mount : " + this.state.Location)
    }

    render() {
        return (
            <div className="card card-body">
                <h3>
                    Hello ! This is {this.props.name} from {this.state.Location} : Click Here &nbsp;
                    <button onClick={this.clickHandler}>{this.state.Count}</button>
                </h3>
            </div>
        )
    }

    componentDidMount() {
        this.setState((prevState, props) => {
            var result = { "Location": "Pune, " + prevState.Location }
            console.log("During Mounting : " + result.Location)
            return result
        })

        this.setState((prevState, props) => {
            var result = { "Location": prevState.Location + ", India" }
            console.log("During Mounting Again : " + result.Location)
            return result
        })

        console.log("Async Mounting : " + this.state.Location)
    }

    clickHandler() {
        this.setState((prevState, props) => {
            return { "Count": prevState.Count + 1 }
        })
    }
}

export default Welcome;