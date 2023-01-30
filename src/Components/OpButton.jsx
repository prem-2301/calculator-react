import React from "react";
import { actions } from "./Calculator.jsx";

function OpButton({ dispatch, operation, id }) {
	return (
		<button
			className="keys"
			id={id}
			onClick={() =>
				dispatch({ type: actions.addOperation, payload: { operation } })
			}
		>
			{operation}
		</button>
	);
}

export default OpButton;
