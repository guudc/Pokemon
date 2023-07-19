/*
    The Main javascript file
    Author: C.O.A.T
    Version: 1.0
*/

/* VARIABLE DECLARATION */
var pokemonData = [] //Holds the pokemon data in an array
var g = E('gameModal') //Making game modal a global variable
const imageAssets = [ //Contains image assets for preloading
    "img/backgrounds/bg1.png",
    "img/backgrounds/bg2.png",
    "img/backgrounds/bg3.png",
    "img/backgrounds/bg4.png",
    "img/backgrounds/bg5.png",
    "img/backgrounds/bg6.png",
    "img/backgrounds/bg7.png"
]

// Function to handle the parsed CSV data
function saveToPokemonData(results) { 
  // Access the parsed Pokémon data
  let _pokemonData = results.data;  
  // Remove the header row from the data
  _pokemonData.shift();
  let row, pokemon; //temp variables
  // Iterate over each row of data
  for(let i=0;i<_pokemonData.length - 1;i++){
    row = _pokemonData[i];  
    //creating temp pokemon object
    pokemon = {
      face: row.image_url,
      name: row.Names,
      type1: row.Type1,
      type2: row.Type2,
      total: parseInt(row.Total),
      hp: parseInt(row.HP),
      attack: parseInt(row.Attack),
      defense: parseInt(row.Defense),
      specialAttack: parseInt(row["Sp. Atk"]),
      specialDefense: parseInt(row["Sp. Def"]),
      speed: parseInt(row.Speed),
    };

    // Add the Pokémon object to the list
    pokemonData.push(pokemon);
  };
  //Set all local variables to null to prevent memory leaks
  _pokemonData=row=pokemon=null
  //start the story telling
  startStory()
}
// Function to parse the CSV file
function init() {
    //Fetch the csv file
    fetch('data/pokemon.csv')
    .then(response => response.text())
        .then(csvData => {
            //Parsing the data using papa parse
            Papa.parse(csvData, {
                header: true,
                complete: function (results) {
                    // Call the function to handle the parsed data
                    saveToPokemonData(results);
                },
            });
        })
    .catch(error => {
            console.error('Error fetching the CSV data:', error);
    });
    //display loading effect
    g.innerHTML = getLoader("gold", "white")  
}
/*
    This function preloads all the image assets used, 
    to prevent slow loading
*/
function preLoadAllMedia() {
    imageAssets.forEach((imgUri) => {
        //create a temp img element
        let img = document.createElement("img")
        //load the image
        img.src = imgUri
    })
}
//intialize
init()
//call the animate text watcher
animateText()
//preload all images
preLoadAllMedia()