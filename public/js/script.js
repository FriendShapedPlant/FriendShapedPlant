window.addEventListener('load', (event) =>{
			
		//Navbar
		
		navbar.innerHTML = `
		<ul>
			<li><a href="about.html">About</a></li>
			<li><a href="#" style="color:var(--silver); text-decoration:line-through;">Arts</a></li>
			<li><a href="#" style="color:var(--silver); text-decoration:line-through;">Shrines</a></li>
			<li><a href="links.html">Links</a></li>
			<li><a href="GhostZapper.html">Ghost Zapper</a></li>
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
