import React from "react";
import { actions } from "./Calculator.jsx";

function FuncButton({ dispatch, func, id }) {
	return (
		<button
			className="keys"
			id={id}
			onClick={() => dispatch({ type: actions.addFunction, payload: { func } })}
		>
			{func}
		</button>
	);
}

export default FuncButton;
