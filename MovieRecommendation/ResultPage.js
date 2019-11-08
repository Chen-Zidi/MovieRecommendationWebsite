/**
 * accept the result from the main page and set the result page
 */
function setResult() {
	var userName = sessionStorage.getItem("user name");
	var gender = sessionStorage.getItem("gender");

	var user = "Dear " + gender + " " + userName + ": ";
	document.getElementById("user").innerText = user;

	var resultName = sessionStorage.getItem("result name");
	document.getElementById("resultName").innerText = resultName;

	var resultType = sessionStorage.getItem("result type");
	resultType = "Type: " + resultType;
	document.getElementById("resultType").innerText = resultType;

	var resultDescription = sessionStorage.getItem("result description");
	document.getElementById("resultDescription").innerText = resultDescription;

	var resultHref = sessionStorage.getItem("result href");
	addImage(resultHref);

	resultReference = sessionStorage.getItem("result reference");
	var reference = resultReference;
	document.getElementById("resultReference").innerText = reference;

	var resultFactor = sessionStorage.getItem("result factor");
	resultFactor = "Tag: " + resultFactor;
	document.getElementById("resultTag").innerText = resultFactor;

}

/**
 * add image of the movie and set the onclick behavior
 */
function addImage(href) {
	var img = document.createElement("img");
	img.id = "image";

	img.setAttribute("src", href);
	img.setAttribute("onclick", "showReference()");

	document.getElementById("imageContainer").appendChild(img);

}

/**
 * when user click on the image, the reference will be shown in a new page
 */
function showReference() {
	window.open(resultReference);

}

setResult();
