$(document).ready(function() {


	//window.alert("Welcome to Broad City inspired tic tac toe! Hopefully you don't get a little intense over competition -  Player 1 you start!");


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
		 $(this).off('click');
	}

	function isWinner() {
	if ( 
		$('#box1' ==='X','#box2' ==='X', '#box3' ==='X' ||
		$('#box1', '#box4', '#box7' === 'X') ||
		$('#box1', '#box5', '#box9' === 'X') ||
		$('#box2', '#box5', '#box8' === 'X') ||
		$('#box3', '#box6', '#box9' === 'X'))
		{return alert("Yas queen! That does impress me much! Player 2 is the winner.");}
	else if (
		$('#box1', '#box2', '#box3') === 'O' ||
		$('#box1', '#box4', '#box7') === 'O' ||
		$('#box1', '#box5', '#box9') === 'O' ||
		$('#box2', '#box5', '#box8') === 'O' ||
		$('#box3', '#box6', '#box9') === 'O')
		{return alert("Yas queen! That does impress me much! Player 1 is the winner.");}
	}


	$('#finished').click(function() {
    location.reload();
	});
});