// alert("this is an alert massage")

// var inputStr = prompt("Enter Your input")

// console.log(inputStr, " this is the input by user")

const submitBtn = document.getElementById("submitBtn")
const normalForm = document.getElementById("normalForm")

submitBtn.addEventListener("click", function (event) {
	event.preventDefault()
	const nameInput = document.getElementById("nameInput").value
	const passwordInput = document.getElementById("passwordInput").value

	const inputsResult = document.getElementById("input")

	if (nameInput == "Admin" && passwordInput == "1234") {
		inputsResult.textContent = "login accepted"
	}
	else {
		inputsResult.textContent = "login denied"
	}

})
