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
		let equ = document.getElementById("equal");
		equ.classList.toggle("pink-eq");
		let plus = document.getElementById("plus");
		plus.classList.toggle("pink-op");
		let sub = document.getElementById("sub");
		sub.classList.toggle("pink-op");
		let mul = document.getElementById("mul");
		mul.classList.toggle("pink-op");
		let divi = document.getElementById("divi");
		divi.classList.toggle("pink-op");
		let clear = document.getElementById("clear");
		clear.classList.toggle("pink-op");
		let clentry = document.getElementById("clentry");
		clentry.classList.toggle("pink-op");
		let type = document.querySelectorAll(".keys");
		for (let i = 0; i < type.length; i++) {
			type[i].classList.toggle("pink-keys");
		}
		let area = document.querySelectorAll(".result");
		area[0].classList.toggle("res-pink");
	}

	function green() {
		let equ = document.getElementById("equal");
		equ.classList.toggle("green-eq");
		let type = document.querySelectorAll(".keys");
		for (let i = 0; i < type.length; i++) {
			type[i].classList.toggle("green-keys");
		}
		let area = document.querySelectorAll(".result");
		area[0].classList.toggle("res-green");
	}

	function whitbl() {
		let equ = document.getElementById("equal");
		equ.classList.toggle("whbl-op");
		let plus = document.getElementById("plus");
		plus.classList.toggle("whbl-op");
		let sub = document.getElementById("sub");
		sub.classList.toggle("whbl-op");
		let mul = document.getElementById("mul");
		mul.classList.toggle("whbl-op");
		let divi = document.getElementById("divi");
		divi.classList.toggle("whbl-op");
		let clear = document.getElementById("clear");
		clear.classList.toggle("whbl-clr");
		let clentry = document.getElementById("clentry");
		clentry.classList.toggle("whbl-clr");
		let type = document.querySelectorAll(".keys");
		for (let i = 0; i < type.length; i++) {
			type[i].classList.toggle("whbl-keys");
		}
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
				<div
					className="themes th3"
					onClick={() => {
						green();
					}}
				></div>
				<div
					className="themes th4"
					onClick={() => {
						whitbl();
					}}
				></div>
			</div>
		</div>
	);
}

export default Theme;
