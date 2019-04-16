import React from 'react';

class Test extends React.Component {
	constructor() {
		super();
		this.bumpTimer = this.bumpTimer.bind(this);
		this.state = {
			timer: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(this.bumpTimer, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	bumpTimer() {
		this.setState(prevState => ({
			timer: prevState.timer + 1
		}));
	}

	render() {
		const { timer } = this.state;
		return (
			<p>Number of seconds since app opened: {timer}</p>
		);
	}
}

export default Test;