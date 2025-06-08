console.log("Script is running");
async function getSongs()
{
let a = await fetch("http://127.0.0.1:3000/Songs/")
let response = await a.text()
//`a.text` retrieves the text content of an HTML anchor (`<a>`) element.
console.log(response)
let div = document.createElement("div")
div.innerHTML = response
let as = div.getElementsByTagName("a")
// console.log(as);
let songs = []
for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
        songs.push(element.href)
        
    }
}
    return songs

    //ideally songs are imported from the servery by APIs but for learning we are doing it from cielt side locally
}
async function main(){
    let songs = await getSongs()
    console.log(songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for(const song of songs){
        songUL.innerHTML = songUL.innerHTML + song;
    }
    //plays the first song
    var audio = new Audio(songs[0]);
// audio.play();
} 
main();


