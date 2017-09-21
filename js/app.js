$(document).ready(function() {


	window.alert("Welcome to Broad City inspired tic tac toe! Hopefully you don't get a little intense over competition -  Player 1 you start!");


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

	// if classes are = ||
	// classes are = ||
	// classes are =
	// return alert "X is winner!"
	// window.alert("Yas queen! That does impress me much! X is winner")
	// else if classes are = ||
	// classes are = ||
	// classes are =
	// return alert "O is winner!"
	// window.alert("Yas queen! That does impress me much! O is winner")


	$('#finished').click(function() {
    location.reload();
	});
});