// Tabs for Lab Baby CRT

function openTab(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, starting at the top, and add an "active" class to the button that opened the tab. Also scroll back to the top of the content
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
	document.getElementById("crtcontent").scrollTop = 0;
}
