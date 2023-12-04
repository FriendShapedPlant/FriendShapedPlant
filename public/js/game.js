let timer; //length of game in seconds. displays to user
let interval; //time x 1000 converts to milliseconds for machine
let img; //addImage timeout
let clock; //countDown timeout
let totalScore; //num of ghosts cliked per round
let id = 0; //used for dynamic ID of ghosts
let decrement = 0; //removeImage: first in first out
let out; //removeImage timeout

$(document).ready(function(){

	$('#timer').show(); //displays timer
	
	//start game and disable button so can't be clicked during game length
	$('#start_button').on('click', () =>{
		reset();
		start();
		start_button.disabled = true;
		setTimeout(()=>{start_button.disabled = false;}, interval)
	});

	function reset(){
		timer = 30;
		interval = timer * 1000;
		totalScore = 0;
		$('#score').html(`${totalScore} pts`);
	}

	//when ghost clicked, score goes up and ghost disappears
	$("#gamespace").on("click", "img", function(){
		scoreInc();
		$(this).remove();
	});


});

//begins timer countdown and adds ghosts to gamespace
function start(){
	countDown();
	addImage();
}

//random horizontal position
function PosX(){
	let randomX = Math.random() * 480;
	return randomX;
}

//random vertical position
function PosY(){
	let randomY = Math.random() * 200;
	return randomY;
}

//at image at random time
function randomAdd(){
	let randa = Math.random() * 2000;
	return randa;
}

//remove image at random time
function randomFlee(){
	let rande = Math.random() * 2000; //ensure they spawn first. somehow
	return rande;				
}

//score go up and updates score displayed
function scoreInc(){
	totalScore += 1;
	$('#score').html(`${totalScore} pts`);
}

//counts down time left in the game
function countDown(){
	if(timer < 0){
			clearTimeout(clock); //stop counting down
			clearTimeout(img); //stop adding images
			clearTimeout(out); //stop removing images
			$('#gamespace .ghost').remove();
			$('#timer').html("<p>Times up!</p>");
			alert(`Final score: ${totalScore} pts!`);
		} else {
			$('#timer').html(`<p>${timer} seconds left.</p>`);
			timer -= 1;
			clock = setTimeout("countDown()", 1000);
		}
}

//adds ghosts to game space in randomized spots
function addImage(){
	let x = PosX();
	let y = PosY();
	$('#gamespace').append(`<img class="ghost" id="spectre${id}" src="img/ghost.gif" alt="ghost" style=" left: ${x}px; top: ${y}px;">`);
	id++;
	out = setTimeout("removeImage()", randomFlee()); //removes ghosts after random amt of time
	img = setTimeout("addImage()", randomAdd()); //effectively loops the function with random pause between loops
}

//remove ghosts from game space in order of addition
function removeImage(){
	$(`#spectre${decrement}`).remove();
	decrement++;				
}
