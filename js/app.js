$(document).ready(function() {


	// window.alert("Welcome to Broad City inspired tic tac toe! Hopefully you don't get a little intense over competition -  Player 1 you start!");


	var count = 0;



	$('.box').click(myFun);

	function myFun() {
		console.log($(this));
		count += 1;
		if (count %2 == 0) {
			$(this).append('X');
		} else {
			$(this).append('O');
		}
	}

	var messages = $('.messages');

	$('.restart').click(function() {
		reset 
	};

});