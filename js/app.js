$(document).ready(function() {


	//window.alert("Welcome to Broad City inspired tic tac toe! Hopefully you don't get a little intense over competition -  Player 1 you start!");


	var count = 0;


	$('.box').click(myFun);

	function myFun() {
		console.log($(this));
		count += 1;
		if (count %2 == 0) {
			$(this).append("X").addClass("X");
		} else {
			$(this).append('O').addClass("X");
		}
		 $(this).off('click');
	}

	function isWinner() {
	if  (
		($("#box1").hasClass("X") && $("#box2").hasClass("X") && $("#box3").hasClass("X")) ||
		($("#box1").hasClass( "X" ) && $("#box4").hasClass( "X" ) && $("#box7").hasClass( "X" )) ||
		($("#box1").hasClass( "X" ) && $("#box5").hasClass( "X" ) && $("#box9").hasClass( "X" )) ||
		($("#box2").hasClass( "X" ) && $("#box5").hasClass( "X" ) && $("#box8").hasClass( "X" )) ||
		($("#box3").hasClass( "X" ) && $("#box6").hasClass( "X" ) && $("#box9").hasClass( "X" )))
		{return alert("Yas queen! That does impress me much! Player 2 is the winner.");}
	else if (
		($("#box1").hasClass("O") && $("#box2").hasClass("O") && $("#box3").hasClass("O")) ||
		($("#box1").hasClass("O") &&  $("#box4").hasClass("O") && $("#box7").hasClass("O")))
		{return alert("Yas queen! That does impress me much! Player 1 is the winner.");}
	};


	$('#finished').click(function() {
    location.reload();
	});
});

