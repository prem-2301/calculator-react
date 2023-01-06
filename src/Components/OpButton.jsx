import React from "react";
import { actions } from "./Calculator.jsx";

function OpButton({ dispatch, operation }) {
	return (
		<button
			className="keys"
			onClick={() =>
				dispatch({ type: actions.addOperation, payload: { operation } })
			}
		>
			{operation}
		</button>
	);
}

export default OpButton;
