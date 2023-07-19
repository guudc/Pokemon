/*
    The Utilities javascript file
    Author: C.O.A.T
    Version: 1.0
*/

/* ELEMENT CREATORS */

/* Returns Loader effect 
    @params 
        col1: String(Specifies the background color of the progress parent)
        col2: String(Specifes the background color of the progress bar)
*/
function getLoader(col1, col2) {
  return `<div class="loader" style='border-color:${col1}'>
            <div class="loaderBar" style='background:${col2}'></div>
    </div>`;
}
/* Returns an animated text element 
    @params 
        col: String(Specifies the color of the text)
        text: String(The content of the animated text)
*/
function getAnimatedText(col, text) {
    return `<span class="animatedText gameTextMedium" style="color:${col}" data-text="${text}"></span>`
}
/* Retuns a Game info img element */
function getGameInfoImg() {
    return `<div class="gameInfoImg"></div>`
}
//to return th eimage within the game info
function getGameInfoImage(col, imgUri) {
    return `<div style='border-color:${col};background-image:url("${imgUri}")'></div>`
}
/*
    returns a game nav section
    @params
        _type: String[start|middle|end] (It lets us know what part of the story we are)
*/
function getGameNav(_type = "middle") {
    let nxt, prv = ""
    if(_type == "start") prv = "style='visibility:hidden'"
    if(_type == "end") nxt = "style='visibility:hidden'"
    return `<div class="gameStoryNav"><button ${prv} onclick="previousStory()">Previous</button>
                <button ${nxt} onclick="nextStory()">Next</button></div>`
}

/* DOM MANIPULATORS */
//converts a string to a html element
function toElem(elemAsString) {
    //creates a div element first
    let tm = document.createElement('div')
    //Parse the string by putting it in the div innerHTML
    tm.innerHTML = elemAsString
    return tm.firstElementChild //the elem would be the first child of the div
}
//Minify the document.getElem
function E(id) {
  return document.getElementById(id);
}
//This function animates text
function animateText() {
  //watch all animated text classes
  let tmpOb = (mutations) => {
    for (var mutation of mutations) {
      if (mutation.type === "childList") {
         let animatedTextElems = document.getElementsByClassName("animatedText")
         for(let i=0;i<animatedTextElems.length;i++) {
            //check if it has been animated or is in the process of animating
            if(animatedTextElems[i].getAttribute('data') != "true" && animatedTextElems[i].getAttribute('data') != "animating") {
                //animate
                doAnimate(animatedTextElems[i])
            }
         }
      }
    }
  };
  let observer = new MutationObserver(tmpOb);
  observer.observe(g, {
    childList: true,
  });

  const doAnimate = (elem) => {
    //get the text
    let animText = (elem.getAttribute("data-text") || "").split("")
    //check if it has text to animate
    if(animText.length > 0) { 
        //set flag to animating, to prevent animating while animating
        elem.setAttribute("data", "animating")
        //using 700ms durations
        let _int = setInterval(() => {
            elem.innerHTML += animText[0]
            animText.shift()
            if(animText.length == 0) {  
                clearInterval(_int) //stop timer
                elem.setAttribute("data", "true") //record that we have animated complete
            }
        }, 50)
    }
  }
}
