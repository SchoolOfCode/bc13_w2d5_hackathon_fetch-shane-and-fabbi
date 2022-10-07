// // pokedex interface (HTML/CSS)
// // ability to search for pokemon
// // ability to browse pokemon
// // display pokemon
// // display pokemon sprite

// create linked list of pokemon in blue section
// can cycle through list of pokemon
// display name in left hand hand box
// display number
// display type
// display weight and height
// display sprite

// populate one list item with pokemon name✅

// let response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"");
let offset = 0;
let listOne = document.querySelector("#list-1");
let listArr = document.querySelectorAll(".list-item");

async function getPokedex() {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();

  // set for loop to iterate through listArr
  // fetch detailResponse and unpack detailData
  // pokemonName and pokemonNum inside our for loop

  for (count = 0; count < listArr.length; count++) {
    let detailResponse = await fetch(data.results[count].url);
    let detailData = await detailResponse.json();

    let pokemonName = data.results[count].name;
    let pokemonNum = detailData.id;
    let textInput = `${pokemonNum}. ${pokemonName}`
    listArr[count].textContent = textInput.toUpperCase();
  }
}
getPokedex();


// async function nextPage
// assign offset to offset + 20
// run getPokedex
// add eventListener to ".right-button", if "click" run nextPage()

async function nextPage(){
    offset = offset + 20
    getPokedex();
}

let nextButton = document.querySelector(".right-button");
nextButton.addEventListener("click", nextPage);

// copy NEXT button for PREV button but offset -20 instead of + 20
// if offset = > 0 let function code run

async function prevPage(){
    if (offset > 0) {
        offset = offset - 20
    getPokedex();
    }
    
}

let prevButton = document.querySelector(".left-button");
prevButton.addEventListener("click", prevPage);

