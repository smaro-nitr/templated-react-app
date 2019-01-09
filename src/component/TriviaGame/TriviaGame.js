import React, { Component } from 'react';

class TriviaOption extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={() => { this.props.clickHandler(this.props.value) }}>
                    {this.props.value}
                </button> &nbsp;
            </div>
        )
    }
}

class TriviaGame extends Component {
    constructor(props) {
        super(props)
        this.state = { correctAnswer: 0, incorrectAnswer: 0 }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(value) {
        if (value === 8) {
            this.setState((prevState, props) => {
                return { "correctAnswer": prevState.correctAnswer + 1 }
            })
        } else {
            this.setState((prevState, props) => {
                return { "incorrectAnswer": prevState.incorrectAnswer + 1 }
            })
        }
    }

    render() {
        return (
            <div className="card card-body">
                <h3 style={{ color: 'red' }}>What is 8 x 1 ?</h3>
                <div className="btn-group" role="group">
                    <TriviaOption value={5} clickHandler={this.clickHandler} />
                    <TriviaOption value={6} clickHandler={this.clickHandler} />
                    <TriviaOption value={7} clickHandler={this.clickHandler} />
                    <TriviaOption value={8} clickHandler={this.clickHandler} />
                </div>
                <br /><br />
                <h5>
                    Correct Answer &nbsp;
                    <span className="badge badge-success"> {this.state.correctAnswer}</span> &nbsp; &nbsp;
                    Incorrect Answer &nbsp;
                    <span className="badge badge-warning"> {this.state.incorrectAnswer}</span>
                </h5>
            </div>
        )
    }
}

export default TriviaGame;