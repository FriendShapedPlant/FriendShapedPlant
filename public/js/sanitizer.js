window.addEventListener('load', (event) =>{
		ytlink.value = "";
		sanilink.value = "";
});

function sanitize() {
	let dirtyLink = ytlink.value;
	
	sanilink.value = "";
	let cleanLink = "";
	oops.innerHTML = "";
		
	let video = "https://www.youtube.com/watch?v=";
	let shoppin = "https://www.amazon.com/dp/";
	
	switch(true) {
		case dirtyLink.startsWith('https://youtube.com/playlist'):
		case dirtyLink.startsWith('https://www.youtube.com/playlist'):
			oops.innerHTML = "Sorry, playlist links don't work yet! For now, remove everying after and including \"&si=\"."
			break;
		case dirtyLink.startsWith('https://youtu.be/'):
			cleanLink = dirtyLink.slice(17,28);
			sanilink.value = video + cleanLink;
			break;
		case dirtyLink.startsWith('https://m.youtube.com/'):
			cleanLink = dirtyLink.slice(30,41);
			sanilink.value = video + cleanLink;
			break;
		case dirtyLink.startsWith('https://www.youtube.com/'):
			cleanLink = dirtyLink.slice(32,43);
			sanilink.value = video + cleanLink;
			break;
		case dirtyLink.startsWith('https://www.amazon.com/') && dirtyLink.includes("/dp/"): 
		//split into array on the slashes, find the product ID which is ten characters in length
			let cleanLinkArr = dirtyLink.split("/");
			cleanLinkArr.forEach(link => {
				if(link.length == 10){
					cleanLink = link; 
					return;
				}
			});

			sanilink.value = shoppin + cleanLink;
			break;
		default:
			oops.innerHTML = "Seems the link is incorrect :( Make sure it's one of the accepted links, and starts with \"https://\"!";
			break;
	}
}

function clearlink() {
	ytlink.value = "";	
	sanilink.value = "";
}

function clipboard() {
	let copyLink = sanilink;
	
	copyLink.select();
	copyLink.setSelectionRange(0, 99999);
	
	  // Copy the text inside the text field
	navigator.clipboard.writeText(copyLink.value);

	// Alert the copied text
	alert("Link copied!");
}

function openLink() {
	let linky = sanilink.value;
	window.open(linky, "_blank");
}

/*case dirtylink.startsWith('https://www.youtube.com/playlist'):
			oops.innerHTML = "Sorry, playlist links don't work right now! For now, remove everying after and including \"&si=\"."
			//let cleanLinkArr = dirtylink.split("&si=");
			//sanilink.value = cleanLinkArr[0];
			break;*/
