import React from 'react';

const ScoreReducer = ({Score, GameOver}, Action) => {
	switch(Action.type) {
		case "INCREASE_SCORE":
      return {Score: Score + Action.payload, GameOver: GameOver - 1};
    case "DECREASE_SCORE":
      return {Score: Score - Action.payload, GameOver: GameOver - 1};
		case "RESET_SCORE":
      return {Score: 0, GameOver: 30};
		default:
			return Score;
	}
}

export default function UseScoreReducer() {
	const [{Score, GameOver}, ScoreReducerDispatch] = React.useReducer(ScoreReducer, {Score: 0, GameOver: 30});

	const setScore = React.useCallback((type, payload) => 
    ScoreReducerDispatch({type, payload}), []);

	return [{Score, GameOver: !GameOver}, setScore];
}