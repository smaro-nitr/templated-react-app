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
            <a className="nav-item nav-link" style={{ color: this.props.active ? 'blue' : 'gray' }} onClick={() => { this.props.clickHandler(this.props.id, this.props.name) }}>
                {this.props.name}
            </a>
        )
    }
}

class Navigator extends Component {
    constructor(props) {
        super(props)
        this.state = { activeArray: [0, 0, 0, 0], details: "click tab to navigate content" }
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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand">My Navbar</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Tab id="0" name="Tab1" active={this.state.activeArray[0]} clickHandler={this.clickHandler} />
                            <Tab id="1" name="Tab2" active={this.state.activeArray[1]} clickHandler={this.clickHandler} />
                            <Tab id="2" name="Tab3" active={this.state.activeArray[2]} clickHandler={this.clickHandler} />
                            <Tab id="3" name="Tab4" active={this.state.activeArray[3]} clickHandler={this.clickHandler} />
                        </div>
                    </div>
                </nav>
                <Details details={this.state.details} />
            </div>
        )
    }
}

export default Navigator;