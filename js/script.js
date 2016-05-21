window.onload = function () {
	document.getElementById("rangeNum").value = "500";
	updateNum();
}

	


function updateNum () {
    var rangeNum = $("#rangeNum").val().toString();
	document.getElementById("max").innerHTML = "Max Value: " + rangeNum;
}



function getRandomNum() {
	var $rangeNum = $("#rangeNum").val();
	var randomNumber = Math.floor(Math.random() * $rangeNum + 1);
	document.getElementById("doc").innerHTML = "Your random number is " + randomNumber;
}


$("#newNumber").click(getRandomNum); 

$("#rangeNum").change(updateNum);