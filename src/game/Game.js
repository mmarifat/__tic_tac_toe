import './Game.css';
import React from 'react';
import BoardComponent from "./component/board.component";

class Game extends React.PureComponent {
	render() {
		return (
				<div className="game">
					<BoardComponent/>
				</div>
		);
	}
}

export default Game;
