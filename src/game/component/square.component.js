import React from 'react';

class SquareComponent extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			player: null,
		}
	}

	setValue = () => {
		if (!this.state.player) {
			const {player, index} = this.props
			this.setState({player})
			this.props.onPlayerChange({player, index})
		}
	}

	render() {
		const {player} = this.state;
		return (
				<div className="squareStyle" style={{cursor: player ? 'not-allowed' : 'pointer'}} onClick={this.setValue}>
					<span>{player}</span>
				</div>
		);
	}
}

export default SquareComponent;
