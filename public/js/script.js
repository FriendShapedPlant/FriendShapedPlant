window.addEventListener('load', (event) =>{

		//Navbar
		
		navbar.innerHTML = `
		<ul>
			<li><a href="about.html">About</a></li>
			<li><a href="gallery/index.html">Gallery</a></li>
			<li><a href="#" style="color:var(--silver); text-decoration:line-through;">Shrines</a></li>
			<li><a href="links.html">Links</a></li>
			<li><a href="projects.html">Code Projects</a></li>	
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

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


function includeHTMLSnippet() {
 
    // Traverse the collection of all
    // HTML elements
    id = document.getElementsByTagName("*");
    for (i = 0; i < id.length; i++) {
        element = id[i];
 
        // Search for elements with
        // specific attributes
        file = element.getAttribute(
            "include-html");
 
        if (file) {
 
            // Create an HTTP request with
            // the attribute value as the
            // file name
            xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
 
                    if (this.status == 404) {
                        element.innerHTML = "Page not found.";
                    }
 
                    // Delete the attribute and
                    // call this function again.
                    element.removeAttribute(
                        "include-html");
 
                    includeHTMLSnippet();
                }
            }
            xmlRequest.open("GET", file, true);
            xmlRequest.send();
            return; // Exit function.
        }
    }
};
