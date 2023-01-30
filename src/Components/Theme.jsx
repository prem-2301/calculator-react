import React from "react";
import "./Theme.scss";

function Theme() {
	function orange() {
		let equ = document.getElementById("equal");
		equ.classList.toggle("orabla-eq");
		let plus = document.getElementById("plus");
		plus.classList.toggle("orabla-op");
		let sub = document.getElementById("sub");
		sub.classList.toggle("orabla-op");
		let mul = document.getElementById("mul");
		mul.classList.toggle("orabla-op");
		let divi = document.getElementById("divi");
		divi.classList.toggle("orabla-op");
		let clear = document.getElementById("clear");
		clear.classList.toggle("orabla-op");
		let clentry = document.getElementById("clentry");
		clentry.classList.toggle("orabla-op");
		let type = document.querySelectorAll(".keys");
		for (let i = 0; i < type.length; i++) {
			type[i].classList.toggle("orabla-keys");
		}
		let area = document.querySelectorAll(".result");
		area[0].classList.toggle("res-orabla");
	}

	function pink() {
		let type = document.querySelectorAll(".keys");
		for (let i = 0; i < type.length; i++) {
			type[i].classList.toggle("dark-keys");
		}
		let area = document.querySelectorAll(".result");
		area[0].classList.toggle("res-dark");
	}

	return (
		<div className="maindiv">
			<div className="themeGrid">
				<div
					className="themes th1"
					onClick={() => {
						orange();
					}}
				></div>
				<div
					className="themes th2"
					onClick={() => {
						pink();
					}}
				></div>
				<div className="themes th3"></div>
				<div className="themes th4"></div>
			</div>
		</div>
	);
}

export default Theme;
