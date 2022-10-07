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
    let textInput = `${pokemonNum}. ${pokemonName}`;
    listArr[count].textContent = textInput.toUpperCase();
    console.log(detailData);
  }
}
getPokedex();

// async function nextPage
// assign offset to offset + 20
// run getPokedex
// add eventListener to ".right-button", if "click" run nextPage()

async function nextPage() {
  offset = offset + 20;
  getPokedex();
}

let nextButton = document.querySelector(".right-button");
nextButton.addEventListener("click", nextPage);

// copy NEXT button for PREV button but offset -20 instead of + 20
// if offset = > 0 let function code run

async function prevPage() {
  if (offset > 0) {
    offset = offset - 20;
    getPokedex();
  }
}

let prevButton = document.querySelector(".left-button");
prevButton.addEventListener("click", prevPage);

let mainScreen = document.querySelector(".main-screen");

let nameHeader = document.querySelector(".poke-name");
let pokeID = document.querySelector(".poke-id");
let frontImg = document.querySelector(".poke-front-image");
let backImg = document.querySelector(".poke-back-image");
let pokeWeight = document.querySelector(".poke-weight");
let pokeHeight = document.querySelector(".poke-height");
let typeOne = document.querySelector(".poke-type-one");
let typeTwo = document.querySelector(".poke-type-two");

async function getInfoOne() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[0].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[0].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[0].addEventListener("click", getInfoOne);

async function getInfoTwo() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[1].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[1].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[1].addEventListener("click", getInfoTwo);

async function getInfoThree() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[2].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[2].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[2].addEventListener("click", getInfoThree);

async function getInfoFour() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[3].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[3].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[3].addEventListener("click", getInfoFour);

async function getInfoFive() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[4].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[4].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[4].addEventListener("click", getInfoFive);

async function getInfoSix() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[5].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[5].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[5].addEventListener("click", getInfoSix);

async function getInfoSeven() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[6].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[6].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[6].addEventListener("click", getInfoSeven);

async function getInfoEight() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[7].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[7].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[7].addEventListener("click", getInfoEight);

async function getInfoNine() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[8].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[8].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[8].addEventListener("click", getInfoNine);

async function getInfoTen() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[9].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[9].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[9].addEventListener("click", getInfoTen);

async function getInfoEleven() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[10].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[10].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[10].addEventListener("click", getInfoEleven);

async function getInfoTwelve() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[11].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[11].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[11].addEventListener("click", getInfoTwelve);

async function getInfoThirteen() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[12].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[12].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[12].addEventListener("click", getInfoThirteen);

async function getInfoFourteen() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[13].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[13].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[13].addEventListener("click", getInfoFourteen);

async function getInfoFifteen() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[14].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[14].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[14].addEventListener("click", getInfoFifteen);

async function getInfoSixteen() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[15].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[15].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[15].addEventListener("click", getInfoSixteen);

async function getInfoSeventeen() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[16].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[16].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[16].addEventListener("click", getInfoSeventeen);

async function getInfoTwo() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[1].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[1].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[1].addEventListener("click", getInfoTwo);

async function getInfoEighteen() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[17].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[17].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[17].addEventListener("click", getInfoEighteen);

async function getInfoNineteen() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[18].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[18].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[18].addEventListener("click", getInfoNineteen);

async function getInfoTwenty() {
  mainScreen.classList.remove("hide");
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );
  let data = await response.json();
  let detailResponse = await fetch(data.results[19].url);
  let detailData = await detailResponse.json();

  let nameData = data.results[19].name;
  let pokemonID = detailData.id;
  let pokeImageFront = detailData.sprites.front_default;
  let pokeImageBack = detailData.sprites.back_default;
  nameHeader.textContent = nameData;
  pokeID.textContent = pokemonID;
  frontImg.setAttribute("src", pokeImageFront);
  backImg.setAttribute("src", pokeImageBack);
  pokeWeight.textContent = detailData.weight;
  pokeHeight.textContent = detailData.height;
  typeOne.textContent = detailData.types[0].type.name;
  typeTwo.textContent = detailData.types[1].type.name;
}
listArr[19].addEventListener("click", getInfoTwenty);
