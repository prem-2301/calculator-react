import React, { useReducer } from "react";
import NumButton from "./NumButton.jsx";
import OpButton from "./OpButton.jsx";
import FuncButton from "./FuncButton.jsx";
import "./Calculator.scss";

export const actions = {
	addDigit: "addDigit",
	addOperation: "addOperation",
	addFunction: "addFunction",
	clear: "clear",
	delete: "delete",
	equals: "equals",
};

function reducer(state, { type, payload }) {
	// eslint-disable-next-line default-case
	switch (type) {
		case actions.addDigit:
			if (state.overwrite) {
				return {
					...state,
					second: payload.digit,
					overwrite: false,
				};
			}
			if (payload.digit === "0" && state.second === "0") {
				return state;
			}
			if (payload.digit === "." && state.second.includes(".")) {
				return state;
			}
			return {
				...state,
				second: `${state.second || ""}${payload.digit}`,
			};

		case actions.addOperation:
			if (state.second == null && state.first == null) {
				return state;
			}

			if (state.second == null) {
				return {
					...state,
					operation: payload.operation,
				};
			}

			if (state.first == null) {
				return {
					...state,
					operation: payload.operation,
					first: state.second,
					second: null,
				};
			}

			return {
				...state,
				first: evaluate(state),
				operation: payload.operation,
				second: null,
			};

		case actions.addFunction:
			if (state.second == null) {
				return state;
			}

			return {
				...state,
				overwrite: true,
				second: evaluateUnary(state, payload.func),
			};

		case actions.clear:
			return {};

		case actions.delete:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					second: null,
				};
			}

			if (state.second == null) {
				return state;
			}

			if (state.second.length === 1) {
				return {
					...state,
					second: null,
				};
			}

			return {
				...state,
				second: state.second.slice(0, -1),
			};

		case actions.equals:
			if (
				state.first == null ||
				state.second == null ||
				state.operation == null
			) {
				return state;
			}

			return {
				...state,
				overwrite: true,
				first: null,
				operation: null,
				second: evaluate(state),
			};
	}
}

function evaluateUnary({ second }, func) {
	const val = parseFloat(second);
	let res1 = "";
	// eslint-disable-next-line default-case
	switch (func) {
		case "x²":
			res1 = Math.pow(val, 2);
			break;

		case "²√x":
			res1 = Math.sqrt(val);
			break;

		case "10^(x)":
			res1 = Math.pow(10, val);
			break;

		case "1/x":
			res1 = 1 / val;
			break;

		case "sin(x)":
			res1 = Math.sin(val * (Math.PI / 180));
			break;

		case "cos(x)":
			res1 = Math.cos(val * (Math.PI / 180));
			break;

		case "tan(x)":
			res1 = Math.tan(val * (Math.PI / 180));
			break;
	}

	return res1.toString();
}

function evaluate({ second, first, operation }) {
	const prev = parseFloat(first);
	const curr = parseFloat(second);
	if (isNaN(prev) || isNaN(curr)) {
		return "";
	}
	let res = "";
	// eslint-disable-next-line default-case
	switch (operation) {
		case "+":
			res = prev + curr;
			break;
		case "-":
			res = prev - curr;
			break;
		case "*":
			res = prev * curr;
			break;
		case "/":
			res = prev / curr;
			break;
		case "^":
			res = Math.pow(prev, curr);
			break;
	}

	return res.toString();
}

function Calculator() {
	const [{ first, second, operation }, dispatch] = useReducer(reducer, {});

	return (
		<div className="calc">
			<div className="layout">
				<div className="result">
					{first} {operation} {second}
				</div>
				<button
					className="keys clear"
					onClick={() => dispatch({ type: actions.clear })}
				>
					C
				</button>
				<button
					className="keys equal"
					onClick={() => dispatch({ type: actions.delete })}
				>
					CE
				</button>
				<FuncButton func="1/x" dispatch={dispatch} />
				<FuncButton func="sin(x)" dispatch={dispatch} />
				<FuncButton func="cos(x)" dispatch={dispatch} />
				<FuncButton func="tan(x)" dispatch={dispatch} />
				<OpButton operation="+" dispatch={dispatch} />
				<FuncButton func="x²" dispatch={dispatch} />
				<NumButton digit="7" dispatch={dispatch} />
				<NumButton digit="8" dispatch={dispatch} />
				<NumButton digit="9" dispatch={dispatch} />
				<OpButton operation="-" dispatch={dispatch} />
				<FuncButton func="²√x" dispatch={dispatch} />
				<NumButton digit="4" dispatch={dispatch} />
				<NumButton digit="5" dispatch={dispatch} />
				<NumButton digit="6" dispatch={dispatch} />
				<OpButton operation="*" dispatch={dispatch} />
				<button
					className="keys"
					onClick={() =>
						dispatch({
							type: actions.addOperation,
							payload: { operation: "^" },
						})
					}
				>
					x^(y)
				</button>

				<NumButton digit="1" dispatch={dispatch} />
				<NumButton digit="2" dispatch={dispatch} />
				<NumButton digit="3" dispatch={dispatch} />
				<OpButton operation="/" dispatch={dispatch} />
				<FuncButton func="10^(x)" dispatch={dispatch} />
				<NumButton digit="0" dispatch={dispatch} />
				<NumButton digit="." dispatch={dispatch} />
				<button
					className="keys equal"
					onClick={() => dispatch({ type: actions.equals })}
				>
					=
				</button>
			</div>
		</div>
	);
}

export default Calculator;
