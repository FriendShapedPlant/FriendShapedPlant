let user = 'plantfriend'; //put your username here
let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';


fetch(url)
.then(function (response) {
    return response.json()
}).then(function (json) {
    const track = json['track'];
    const t = '#text';
    
    const widget = document.getElementById('widget');
    const loading = document.getElementById('loading');
    const playTitle = document.getElementById('playState');

    //Add elements to widget
    //linked img
    const link = document.createElement('a');
    link.href = track['url']
    widget.appendChild(link);
    const art = document.createElement('img');
    //if no album art, use placeholder (usually happens when Now Playing)
    track['image']['2'][t] === "" ? art.src = "/img/linkimg/placeholder.png" : art.src = track['image']['2'][t];
    art.alt = "Album art, links to track's last.fm page."
    link.appendChild(art);
    art.class = "freeze" //also freeze if animated cus I GUESS thats a thing
    link.appendChild(art);
    //artist and track
    const name = document.createElement('p');
    widget.appendChild(name);
    //To style each element
    // {{selectelement}}.setAttribute('class', {{yourclass}});
    
    //Add info to elements
    name.innerHTML = track['name'] + ' by ' + track['artist'][t];

    //hide the loading symbol
    loading.setAttribute('class', 'hidden');
    
    //play boolean
    let playBoo = track['@attr']['nowplaying'];

    console.log(playBoo);
    if(playBoo) { //if there's something in play boolean, say 'now playing'
        playTitle.innerText = 'Now Playing';
    } 
    else {
        playTitle.innerText = 'Error';
    }
    
    
});