function dis(val) {
	document.getElementById("result").value += val
}

//function that evaluates the digit and return result
function solve() {
	let x = document.getElementById("result").value
	console.log("value",x);
	let y = eval(x)
	document.getElementById("result").value = y
}

//function that clear the display
function clr() {
	document.getElementById("result").value = ""
}

function mclear(){
	alert("you clicked me")
}
function memoryplus(){
	alert("text")
}

function memoryless(){
	alert("text1")
}
