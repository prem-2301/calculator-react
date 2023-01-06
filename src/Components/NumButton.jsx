import React from "react";
import { actions } from "./Calculator.jsx";

function NumButton({ dispatch, digit }) {
	return (
		<button
			className="keys"
			onClick={() => dispatch({ type: actions.addDigit, payload: { digit } })}
		>
			{digit}
		</button>
	);
}

export default NumButton;
