import React, { Component } from 'react';

class ControlledInput extends Component {
    constructor(props) {
        super(props)
        this.state = { inputName: '', checkName: false, textAreaName: '', selectName: '' }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.name]: [event.target.name][0] === "checkName" ? event.target.checked : event.target.value })
    }
    render() {
        var array = ["apple", "banana", "carrot", "donuts"]
        var options = array.map((item, index) =>
            <option key={index} value={item}>{item}</option>
        )

        return (
            <div className="card card-body">
                <br />
                <div className="form-group">
                    <input name="inputName" className="form-control" placeholder="enter text here" type="text" value={this.state.inputName} onChange={this.handleChange} disabled={this.state.checkName} />
                    <label>Your entered text is : {this.state.inputName}</label>
                </div>
                <div className="form-check form-check-inline">
                    <input name="checkName" className="form-check-input" type="checkbox" checked={this.state.checkName} onChange={this.handleChange} />
                    <label className="form-check-label">finalize input box content : {this.state.checkName.toString()}</label>
                </div><br />
                <div className="form-group form-check-inline">
                    <label>Enter text in text area &nbsp; </label>
                    <textarea name="testAreaName" type="text" rows="1" value={this.state.testAreaName} onChange={this.handleChange} /> &nbsp; &nbsp;
                    <label>Your entered text is : {this.state.testAreaName}</label>
                </div>
                <div className="form-group">
                    <select name="selectName" className="form-control" value={this.state.selectName} onChange={this.handleChange}>
                        <option value="" disabled hidden>Choose here</option>
                        {options}
                    </select>
                    <div>Your selected option : {this.state.selectName}</div>
                </div>
            </div>
        )
    }
}

export default ControlledInput;