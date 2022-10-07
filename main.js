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
    let pokemonNum = detailData.order;

    listArr[count].textContent = `${pokemonNum}. ${pokemonName}`;

    console.log(detailData);
    console.log(data.results);
    console.log(pokemonName);
  }
}
getPokedex();
