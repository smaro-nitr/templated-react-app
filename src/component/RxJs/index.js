import React, { Component } from 'react';
import { initializeDummyWebSocket, subject } from './emitter';

class RxJs extends Component {
	constructor(props) {
		super(props)
		this.state = { message: '' }
		initializeDummyWebSocket()
	}

	componentWillMount() {
		subject.subscribe({
			next: (message) => this.setState({ message: message.data })
		});
	}

	render() {
		const { message } = this.state
		return <React.Fragment>{message}</React.Fragment>
	}
}

export default RxJs;