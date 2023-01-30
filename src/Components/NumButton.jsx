import React from "react";
import { actions } from "./Calculator.jsx";

function NumButton({ dispatch, digit, id }) {
	return (
		<button
			className="keys"
			id={id}
			onClick={() => dispatch({ type: actions.addDigit, payload: { digit } })}
		>
			{digit}
		</button>
	);
}

export default NumButton;
