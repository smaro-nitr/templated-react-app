import React, { Component } from 'react';

class Details extends Component {
    render() {
        return <div>{this.props.details}</div>
    }
}

class Tab extends Component {
    render() {
        return (
            // eslint-disable-next-line
            <li style={{ color: this.props.active ? 'blue' : 'gray' }} onClick={() => { this.props.clickHandler(this.props.id, this.props.name) }}>
                {this.props.name}
            </li>
        )
    }
}

class ContentUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = { activeArray: [0, 0, 0, 0], details: "Click on below list to change content" }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(id, details) {
        var arr = [0, 0, 0, 0]
        arr[id] = 1
        this.setState({ activeArray: arr, details: details })
    }

    render() {
        return (
            <div className="card card-body">
                <Details details={this.state.details} /> <br />
                <ul>
                    <Tab id="0" name="Content A" active={this.state.activeArray[0]} clickHandler={this.clickHandler} />
                    <Tab id="1" name="Content B" active={this.state.activeArray[1]} clickHandler={this.clickHandler} />
                    <Tab id="2" name="Content C" active={this.state.activeArray[2]} clickHandler={this.clickHandler} />
                    <Tab id="3" name="Content D" active={this.state.activeArray[3]} clickHandler={this.clickHandler} />
                </ul>
            </div>
        )
    }
}

export default ContentUpdate;