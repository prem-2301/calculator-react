import React from "react";
import { actions } from "./Calculator.jsx";

function FuncButton({ dispatch, func }) {
	return (
		<button
			className="keys"
			onClick={() => dispatch({ type: actions.addFunction, payload: { func } })}
		>
			{func}
		</button>
	);
}

export default FuncButton;
