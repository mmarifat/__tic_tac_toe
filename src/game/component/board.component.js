import React from 'react';
import SquareComponent from "./square.component";

class BoardComponent extends React.PureComponent {
	initState = {
		currentPlayer: 'X',
		nextPlayer: 'O',
		winner: '',
		displaceSquare: true,
	}
	state = this.initState

	winStates = [[11, 12, 13], [21, 22, 23], [31, 32, 33], [11, 21, 31], [12, 22, 32], [13, 23, 33], [11, 22, 33], [13, 22, 31]]

	toeValues = {
		[this.initState.currentPlayer]: [],
		[this.initState.nextPlayer]: [],
	}

	playerChange = change => {
		if (change.player === 'X' || !change.player) {
			this.setState({
				currentPlayer: 'O',
				nextPlayer: 'X'
			})
		} else if (change.player === 'O') {
			this.setState({
				currentPlayer: 'X',
				nextPlayer: 'O'
			})
		}
		const {nextPlayer} = this.state;
		const {currentPlayer} = this.state;

		const toeValues = this.toeValues[nextPlayer];
		toeValues.push(change.index)

		if (this.toeValues[nextPlayer].length > 2) {
			const check = this.winStates.map(state => this.toeValues[nextPlayer].filter(each => state.includes(each))).filter(ln => ln.length === 3).length;
			if (check) {
				this.setState({
					winner: currentPlayer
				})
				alert(`Winner is: ${currentPlayer}`)
				this.reset();
			}
		}
	}

	reset = () => {
		this.setState({
			currentPlayer: 'X',
			nextPlayer: 'O',
			winner: '',
			displaceSquare: !this.state.displaceSquare
		})
		Object.keys(this.toeValues).forEach(key => {
			this.toeValues[key] = []
		})
	}

	render() {
		const {currentPlayer, nextPlayer, winner, displaceSquare} = this.state;
		const rowCol = [0, 1, 2];
		return (
				<div className="containerStyle">
					<div className="instructionsStyle">Current player: {winner ? '' : currentPlayer}</div>
					<div className="instructionsStyle">Next player: {winner ? '' : nextPlayer}</div>
					<div className="instructionsStyle">Winner: {winner}</div>

					<button className="buttonStyle" onClick={this.reset}>Reset</button>

					<div className="boardStyle">

						{
							displaceSquare && rowCol.map((_, rowIndex) => {
								return (<div className="rowStyle" key={++rowIndex}>
									{
										rowCol.map((__, colIndex) => {
											const key = Number((rowIndex + 1).toString() + (colIndex + 1).toString())
											return <SquareComponent key={key} index={key} player={currentPlayer} onPlayerChange={this.playerChange}/>
										})
									}
								</div>)
							})
						}

						{/*render new plate*/}
						{
							!displaceSquare && rowCol.map((_, rowIndex) => {
								return (<div className="rowStyle" key={++rowIndex}>
									{
										rowCol.map((__, colIndex) => {
											const key = Number((rowIndex + 1).toString() + (colIndex + 1).toString())
											return <SquareComponent key={key} index={key} player={currentPlayer} onPlayerChange={this.playerChange}/>
										})
									}
								</div>)
							})
						}

					</div>

				</div>
		);
	}
}

export default BoardComponent;
