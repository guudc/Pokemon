/*
    The Story javascript file
    Author: C.O.A.T
    Version: 1.0
*/

/* VARIABLES DECLARATION */

var storyIndex; //Holds the current scene in the story board
const sceneStories = [
    `Guudc, a youthful Pokémon trainer, embarks on an epic quest to become a Pokémon Master. 
    He carries his trusted Pokédex, which allows him to record the characteristics of the Pokémon he encounters.`,
    `On his journey, Guudc comes across a variety of Pokémon. He carefully records the traits 
    they possess in his Pokédex, and he is driven to build an in-depth picture of the Pokémon world. `,
    `Guudc chooses to compare the entire stats of each Pokémon using a 
    bar chart. Guudc use this chart to detect legendary Pokémon with remarkable power as well as amateur Pokémon with growth potential.`,
    `Guudc is encouraged by his initial success, and he delved deeper into his analysis. He created a radar chart to visualize the battle statistics of his selected Pokémon. This visualization 
    enabled him to identify the unique strengths and weaknesses of each species.`,
    `Guudc expands his investigation by creating a bubble chart to study the association between HP and Attack numbers. He observed that Pokémon with high HP and Attack were ideal 
    for sustaining battles while delivering heavy attacks using this vision. `,
    `Finally, Guudc wants to understand the distribution of Speed attributes among 
    different Pokémon. He developed a pie chart that showcases the range 
    and frequency of Speed values. This visualization helped him identify the fastest Pokémon, giving him an advantage in battles where speed was crucial.`,
    `With his newfound knowledge and powerful visualizations, Guudc
     continues his quest to become a Pokémon Master. Armed with strategic 
     insights and a well-rounded team of Pokémon, he overcomes challenges, 
     defeats gym leaders, and eventually conquers the Pokémon League, fulfilling his lifelong dream. 
    `
]

/* STORY FUNCTIONS */

//This functions starts the first part of the story
function startStory() {
    //set the scene background img
    document.body.style.backgroundImage = "url(" + imageAssets[0] + ")"
    //first clear the scene
    g.innerHTML = ""
    //Loads the first scene
    g.appendChild(toElem(getAnimatedText('yellow',sceneStories[0])))
    //set the nav button after the text has animated finish
    setTimeout(() => {
        //anmation time is 50 * num of characters
        g.appendChild(toElem(getGameNav('start')))
    }, (50 * (sceneStories[0].length)) + 2000)
    //set story index
    storyIndex = 1
}
//This functions goes to the next story
function nextStory() {
    //increment story index
    storyIndex++
    //first clear the scene
    g.innerHTML = ""
    if(storyIndex == 2) {
        //display next scene background
        document.body.style.backgroundImage = "url(" + imageAssets[1] + ")"
        //Loads the first scene
        g.appendChild(toElem(getAnimatedText('aliceblue',sceneStories[1])))
        //set the nav button after the text has animated finish
        setTimeout(() => {
            //anmation time is 50 * num of characters
            g.appendChild(toElem(getGameNav('middle')))
        }, 50 * (sceneStories[1].length))
    }
    else if(storyIndex == 3) {
        //display next scene background
        document.body.style.backgroundImage = "url(" + imageAssets[2] + ")"
        //Loads the first scene
        g.appendChild(toElem(getAnimatedText('aliceblue',sceneStories[2])))
        //draw the charts
        setTimeout(() => {
            //draw the chart
            g.innerHTML = ""
            const cnv = toElem("<div><canvas></canvas></div>")
            g.appendChild(cnv)
            drawBarChart(cnv.firstElementChild)
            //drae the pokemon images
            let gameInfo = toElem(getGameInfoImg())
            g.appendChild(gameInfo)
            let n = 0;
            let _int = setInterval(() => {
                //start with the legends then move to amateurs
                gameInfo.appendChild(toElem(
                    getGameInfoImage("transparent", pokemonData[Math.abs(n)].face)
                ))
                n++
                if(n == 5) n = (pokemonData.length - 5)
                if(n == pokemonData.length) {
                    clearInterval(_int)
                    _int=n=null //deleting local variables
                    g.appendChild(toElem(getGameNav('middle')))
                }
            }, 100)
        }, (50 * (sceneStories[2].length)) + 2000)
    }
    else if(storyIndex == 4) {
        //use white background for the modal
        g.style.backgroundColor = "#fafafa"
        //display next scene background
        document.body.style.backgroundImage = "url(" + imageAssets[3] + ")"
        //Loads the first scene
        g.appendChild(toElem(getAnimatedText('purple',sceneStories[3])))
        //draw the charts
        setTimeout(() => {
            //draw the chart
            g.innerHTML = ""
            const cnv = toElem("<div><canvas></canvas></div>")
            g.appendChild(cnv)
            drawRadarChat(cnv.firstElementChild)
            g.appendChild(toElem(getGameNav('middle')))
        }, (50 * (sceneStories[3].length)) + 2000)
    }
    else if(storyIndex == 5) {
        //use white background for the modal
        g.style.backgroundColor = "#fafafa"
        //display next scene background
        document.body.style.backgroundImage = "url(" + imageAssets[4] + ")"
        //Loads the first scene
        g.appendChild(toElem(getAnimatedText('rgb(255, 140, 0)',sceneStories[4])))
        //draw the charts
        setTimeout(() => {
            //draw the chart
            g.innerHTML = ""
            const cnv = toElem("<div><canvas></canvas></div>")
            g.appendChild(cnv)
            drawBubbleChat(cnv.firstElementChild)
            g.appendChild(toElem(getGameNav('middle')))
        }, (50 * (sceneStories[4].length)) + 2000)
    }
    else if(storyIndex == 6) {
        //use white background for the modal
        g.style.backgroundColor = ""
        //display next scene background
        document.body.style.backgroundImage = "url(" + imageAssets[5] + ")"
        //Loads the first scene
        g.appendChild(toElem(getAnimatedText('white',sceneStories[5])))
        //draw the charts
        setTimeout(() => {
            //draw the chart
            g.innerHTML = ""
            const cnv = toElem("<div><canvas></canvas></div>")
            g.appendChild(cnv)
            drawPieChat(cnv.firstElementChild)
            g.appendChild(toElem(getGameNav('middle')))
        }, (50 * (sceneStories[5].length)) + 2000)
    }
    else if(storyIndex == 7) {
        //display next scene background
        document.body.style.backgroundImage = "url(" + imageAssets[6] + ")"
        //Loads the first scene
        g.appendChild(toElem(getAnimatedText('white',sceneStories[6])))
        //set the nav button after the text has animated finish
        setTimeout(() => {
            //anmation time is 50 * num of characters
            g.appendChild(toElem(getGameNav('end')))
        }, 50 * (sceneStories[6].length))
    }
    else if(storyIndex == 1) {
        startStory()
    }
}
//This function goes to the previous story
function previousStory() {
    storyIndex -= 2
    nextStory()
}

/* VISUALIZATION FUNCTIONS */

// Function to create the bar chart
function drawBarChart(canvas) {
    // Sort the Pokémon data based on total stats in descending order
    pokemonData.sort((a, b) => b.total - a.total);
    // Create a canvas element to render the chart
    canvas.width = 700;
    canvas.height = 400;
    //merge the legend and amateur arrays
    let mergedData = [...pokemonData.slice(0, 5), ...pokemonData.slice(pokemonData.length - 5)];
    // Sort the merged data based on total stats in descending order
    mergedData.sort((a, b) => b.total - a.total); 
    // Extract the required data for the chart
    let labels = mergedData.map(pokemon => pokemon.name);
    let _legend = pokemonData.slice(0, 5).map(pokemon => pokemon.total); //legends
    //add extra 0s to allow plotting from the other half
    let _amateur = [0,0,0,0,0, ...(pokemonData.slice(pokemonData.length - 5).map(pokemon => pokemon.total))]; //amateur

    // Create the bar chart using Chart.js library
    var ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Legends',
          data: _legend,
          backgroundColor: 'gold', // gld color for bars
        },
        {
          label: 'Amateur',
          data: _amateur,
          backgroundColor: 'purple', // gld color for bars
        }]
      },
      
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white' // Set the font color of y-axis labels to white
            }
          },
          x: {
            ticks: {
              color: 'white' // Set the font color of x-axis labels to white
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white', // Set the font color of legend text to white
              fontFamily: "Zorque" //Setting the font-family
            }
          }
        },
        
      }
    });
    //setting local variables to null to prevent any memory leaks
    labels=totalStats=ctx=_legend=_amateur=null
}
//to create radar chat
function drawRadarChat(canvas) {
    //configure the canvas element to render the chart
    canvas.width = 700;
    canvas.height = 400;
    // Sort the Pokémon data based on total stats in descending order
    pokemonData.sort((a, b) => b.total - a.total); //merge the legend and amateur arrays
    let mergedData = [...pokemonData.slice(0, 5), ...pokemonData.slice(pokemonData.length - 5)];
    // Sort the merged data based on total stats in descending order
    mergedData.sort((a, b) => b.total - a.total); 
    // Extract the required data for the chart
    let labels = mergedData.map(pokemon => pokemon.name);
    //create dataset
    const colors = [
        "rgba(255, 0, 0, 0.5)",
        "rgba(255, 215, 0, 0.5)",
        "rgba(128, 0, 128, 0.5)",
        "rgba(28, 0, 228, 0.5)",
        "rgba(255, 165, 0, 0.5)",
        "rgba(55, 225, 0, 0.5)",
        "rgba(55, 255, 55, 0.5)",
        "rgba(55, 255, 0, 0.5)",
        "rgba(55, 55, 50, 0.5)",
        "rgba(102, 51, 0, 0.5)"
    ]
    let datasets = []
    for(let i=0;i<labels.length;i++) {
        datasets.push(
            {
                label: labels[i],
                data: [
                    mergedData[i].hp,
                    mergedData[i].attack,
                    mergedData[i].defense,
                    mergedData[i].specialAttack,
                    mergedData[i].specialDefense,
                    mergedData[i].speed
                ],
                backgroundColor: colors[i],  
                borderColor: colors[i],  
                pointBackgroundColor: colors[i],  
              }
        )
    }
     
  console.log(datasets)
    // Create the radar chart using Chart.js library
    new Chart(canvas, {
      type: 'radar',
      data: {
        labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            beginAtZero: true,
            color: 'purple', // Set the font color of the scale labels to white
          },
          pointLabels: {
            color: 'purple', // Set the font color of the point labels to white
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'purple', // Set the font color of the legend text to white
            }
          }
        }
      }
    });  
}
//to create radar chat
function drawBubbleChat(canvas) {
    //configure the canvas element to render the chart
    canvas.width = 700;
    canvas.height = 400;
    // Sort the Pokémon data based on total stats in descending order
    pokemonData.sort((a, b) => b.total - a.total); //merge the legend and amateur arrays
    let mergedData = [...pokemonData.slice(0, 5), ...pokemonData.slice(pokemonData.length - 5)];
    // Sort the merged data based on total stats in descending order
    mergedData.sort((a, b) => b.total - a.total); 
    // Extract the required data for the chart
    let labels = mergedData.map(pokemon => pokemon.attack);
    const colors = [
        "rgba(255, 0, 0, 0.5)",
        "rgba(255, 215, 0, 0.5)",
        "rgba(128, 0, 128, 0.5)",
        "rgba(28, 0, 228, 0.5)",
        "rgba(255, 165, 0, 0.5)",
        "rgba(55, 225, 0, 0.5)",
        "rgba(55, 255, 55, 0.5)",
        "rgba(55, 255, 0, 0.5)",
        "rgba(55, 55, 50, 0.5)",
        "rgba(102, 51, 0, 0.5)"
    ]
    let datasets = {
        label: "Pokemons",
        data: mergedData.map(pokemon => pokemon.hp),
        backgroundColor: colors,  
        borderColor: colors,  
      }
     
    // Create the bubble chart using Chart.js library
    new Chart(canvas, {
      type: 'bubble',
      data: {
        labels: labels,
        datasets: [datasets]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: {
              display: true,
              text: 'HP', // X-axis label
              color: 'black' // Set the font color of the x-axis label to white
            },
            ticks: {
              color: 'black' // Set the font color of the x-axis ticks to white
            }
          },
          x: {
            title: {
              display: true,
              text: 'Attack', // Y-axis label
              color: 'black' // Set the font color of the y-axis label to white
            },
            ticks: {
              color: 'black' // Set the font color of the y-axis ticks to white
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var data = context.raw;
                return data.label + ': (HP: ' + data.x + ', Attack: ' + data.y + ')';
              }
            }
          }
        }
      }
    });  
}
//to draw pie chart
function drawPieChat(canvas) {
    //configure the canvas element to render the chart
    canvas.width = 700;
    canvas.height = 400;
    // Sort the Pokémon data based on total stats in descending order
    pokemonData.sort((a, b) => b.total - a.total); //merge the legend and amateur arrays
    let mergedData = [...pokemonData.slice(0, 5), ...pokemonData.slice(pokemonData.length - 5)];
    // Sort the merged data based on total stats in descending order
    mergedData.sort((a, b) => b.total - a.total); 
    // Extract the required data for the chart
    let labels = mergedData.map(pokemon => pokemon.name);
    const colors = [
        "rgba(255, 0, 0, 0.5)",
        "rgba(255, 215, 0, 0.5)",
        "rgba(128, 0, 128, 0.5)",
        "rgba(28, 0, 228, 0.5)",
        "rgba(255, 165, 0, 0.5)",
        "rgba(55, 225, 0, 0.5)",
        "rgba(55, 255, 55, 0.5)",
        "rgba(55, 255, 0, 0.5)",
        "rgba(55, 55, 50, 0.5)",
        "rgba(102, 51, 0, 0.5)"
    ]
    //create dataset
    let datasets = [{
        label: "Pokemons",
        data: mergedData.map(pokemon => pokemon.speed),
        backgroundColor: colors,  
    }]
    // Create the pie chart using Chart.js library
    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            beginAtZero: true,
            color: 'white', // Set the font color of the scale labels to white
          },
          pointLabels: {
            color: 'white', // Set the font color of the point labels to white
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white', // Set the font color of the legend text to white
            }
          }
        }
      }
    });  
}
