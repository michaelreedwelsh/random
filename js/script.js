
	






function getRandomNum() {
	var $rangeNum = $("#rangeNum").val();
	var randomNumber = Math.floor(Math.random() * $rangeNum + 1);
	document.getElementById("doc").innerHTML = "Your random number is " + randomNumber;
}

$("#newNumber").click(getRandomNum); 