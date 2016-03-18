window.onload = function() {
function getRandomNum() {
	var randomNumber = Math.floor(Math.random() * 100) + 1;
	document.getElementById("doc").innerHTML = "Your random number is " + randomNumber;
}
getRandomNum();

}