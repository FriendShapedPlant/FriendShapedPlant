window.addEventListener('load', (event) =>{

	//Navbar
	
	navbar.innerHTML = `
	<ul>
		<li><a href="../about.html">About</a></li>
		<li><a href="../gallery/index.html">Gallery</a></li>
		<li><a href="../shrines.html">Shrines</a></li>
		<li><a href="../links.html">Links</a></li>
		<li><a href="../projects.html">Code Projects</a></li>	
	</ul>
	`;
	
	//Navbar links all target self
	var i_will_target_self = document.querySelectorAll("#navbar a");
	for (var i = 0; i < 5; i++) {
		i_will_target_self[i].target = "_self";
	}
	
	//Footer
	footer.innerHTML = '<a href="https://neocities.org/site/friendshapedplant">Site Profile</a> | <a href="https://github.com/FriendShapedPlant/FriendShapedPlant">Github Repo</a>';
});

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

	  // Show the current tab, starting at the top, and add an "active" class to the button that opened the tab
	  document.getElementById(tabName).style.display = "block";
	  evt.currentTarget.className += " active";
	  document.getElementById("crtcontent").scrollTop = 0;
	} 
		