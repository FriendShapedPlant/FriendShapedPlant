window.addEventListener('load', (event) =>{
		//Either hide or show update commentary based on last selection
		hideCommentary();
});

// Hide update commentary
function hideCommentary() {
	// checkbox and commentary vars
	var checkBox = document.getElementById("commentary");
	var note = document.getElementsByClassName("comment");

	// If the checkbox is checked, display the output text
	if (checkBox.checked == true){
		for (var i = 0; i < note.length; i++) {
			note[i].style.display = 'none';
		}
	} else {
		for (var i = 0; i < note.length; i++) {
			note[i].style.display = 'inline';
		}
	}
}