var APIURL = "https://rg53glgb83.execute-api.us-east-1.amazonaws.com/first-stage"
fetch(APIURL)
	.then(response => response.text())
	.then((response) => {
	document.getElementById("visits").innerHTML = response;
	})
