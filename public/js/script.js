window.addEventListener('load', (event) =>{

		//Navbar
		
		navbar.innerHTML = `
		<ul>
			<li><a href="about.html">About</a></li>
			<li><a href="gallery/index.html">Gallery</a>
			<ul class="dropdown">
				<li><a href="gallery/cosplays/index.html">Cosplays</a></li>
				<li><a href="gallery/pixels/index.html">Pixel Art</a></li>
				<li><a href="gallery/2024/index.html">2024</a></li>
				<li><a href="gallery/2022-23/index.html">2022-23</a></li>
				</ul>
			</li>
			<li><a href="shrines.html">Shrines</a>
				<ul class="dropdown">
				<li><a href="shrines/nanci.html">Nanci</a></li>
				</ul>
			</li>
			<li><a href="links.html">Links</a></li>
			<li><a href="projects.html">Code Projects</a>	
				<ul class="dropdown">
				<li><a href="ytsanitizer.html">Link Sanitizer</a></li>
				<li><a href="GhostZapper.html">Ghost Zapper</a></li>
				<li><a href="https://findyourflag.neocities.org">Find Your Flag</a></li>
				</ul>
			</li>
		</ul>
		`;
		
		//Navbar links all target self
		var i_will_target_self = document.querySelectorAll("#navbar a");
		for (var i = 0; i < i_will_target_self.length; i++) {
			i_will_target_self[i].target = "_self";
		}
		
		//Footer
		footer.innerHTML = '<a href="https://neocities.org/site/friendshapedplant">Site Profile</a> | <a href="https://github.com/FriendShapedPlant/FriendShapedPlant">Github Repo</a>';
		
		});
