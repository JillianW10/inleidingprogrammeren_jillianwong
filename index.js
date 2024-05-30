console.log("hello world")

// Bron van onderzoek hoe ik CSS kan manipuleren met javascript, 
// Ik heb uigevonden dat je het met een style property kan uitvoeren: 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style 

const varkenElement = document.querySelector(".varkenElement")
const varkenCorrect = document.querySelector(".varkenCorrect")
const schaapElement = document.querySelector(".schaapElement")
const schaapCorrect = document.querySelector(".schaapCorrect")
const schildpadElement = document.querySelector(".schildpadElement")
const schildpadCorrect = document.querySelector(".schildpadCorrect")
const neilpaardElement = document.querySelector(".neilpaardElement")
const neilpaardCorrect = document.querySelector(".neilpaardCorrect")
const stierElement = document.querySelector(".stierElement")
const stierCorrect = document.querySelector(".stierCorrect")
const olifantElement = document.querySelector(".olifantElement")
const olifantCorrect = document.querySelector(".olifantCorrect")
const btnHint = document.querySelector(".btnHint")
const hintwaarde = document.querySelector(".hintwaarde p")
const hints = [
    "De schaap wilt graag een nieuwe kapsel",
    "De schildpad wilt leren fietsen",
    "De neilpaard lust gras",
    "De varken wilt samen spelen met honden",
    "De stier wilt voor Halloween een boom zijn",
    "De olifant schuilt denkt dat hij een vogel is"
]
let achtergrondStatus = false
const btnAchtergrond = document.querySelector(".btnAchtergrond")
const achtergrond = document.querySelector("#achtergrond")
const btnGeluid = document.querySelector(".btnGeluid")
const audioElement = document.querySelector("#audioElement")


function varkenGoed() {
    varkenCorrect.style.display = "block"
}
function schaapGoed() {
    schaapCorrect.style.display = "block"
}
function schildpadGoed() {
    schildpadCorrect.style.display = "block"
}
function neilpaardGoed() {
    neilpaardCorrect.style.display = "block"
}
function stierGoed() {
    stierCorrect.style.display = "block"
}
function olifantGoed() {
    olifantCorrect.style.display = "block"
}
//Hints function => Vriendin (Yorina L.) heeft me geholpen om deze functie op te stellen.
// Bron math.floor onderzoek: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
function showHint() {
    const randomIndex = Math.floor(Math.random() * hints.length)
    const randomHint = hints[randomIndex]
    hintwaarde.textContent = randomHint
}
//Verander achtergrond function
function veranderAchtergrond() {
    if (achtergrondStatus == false) {
        achtergrond.style.backgroundImage = "url('fotos/darkmode.png')"
        //Bron darkmode foto: https://www.freepik.com/free-vector/hand-drawn-colorful-trendy-cartoon-pattern_18300044.htm#query=fun%20wallpaper&position=25&from_view=keyword&track=ais_user&uuid=fa29b4f2-c064-4309-a351-ac3d002469c5#position=25&query=fun%20wallpaper
        achtergrondStatus = true;
    } else {
        achtergrond.style.backgroundImage = "url('fotos/lightmode.png')"
        // Bron lightmode foto: https://www.freepik.com/free-vector/hand-drawn-trendy-cartoon-pattern_18494200.htm#query=fun%20wallpaper&position=23&from_view=keyword&track=ais_user&uuid=fa29b4f2-c064-4309-a351-ac3d002469c5#position=23&query=fun%20wallpaper
        achtergrondStatus = false;
    }
}
// Geluid function
// De verschillende states onderzocht op MDN:
// Bron paused state: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused
// Bron play state: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// Bron pause state: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause
function audioStatus() {
    if (audioElement.paused) {
        audioElement.play()
    } else {
        audioElement.pause()
    }
}


varkenElement.addEventListener("click", varkenGoed)
schaapElement.addEventListener("click", schaapGoed)
schildpadElement.addEventListener("click", schildpadGoed)
neilpaardElement.addEventListener("click", neilpaardGoed)
stierElement.addEventListener("click", stierGoed)
olifantElement.addEventListener("click", olifantGoed)
btnHint.addEventListener("click", showHint)
btnAchtergrond.addEventListener("click", veranderAchtergrond)
btnGeluid.addEventListener("click", audioStatus)