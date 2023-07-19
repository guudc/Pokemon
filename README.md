## Pokémon Data Visualization - README

### Data Story

In this project, we aim to explore and visualize the battle statistics of various Pokémon species using a provided dataset. Our goal is to identify the unique strengths and weaknesses of individual Pokémon based on their attributes. Through the visualizations, we want to discover patterns, correlations, and insights that can be leveraged for strategic battle planning.

### Thought Process

1. **Data Exploration:** We began by exploring the dataset to understand its structure and content. The dataset includes Pokémon species with attributes such as Name, Type1, Type2, Total stats, HP, Attack, Defense, Special Attack, Special Defense, and Speed.

2. **Data Storytelling:** We decided to focus on two visualizations for our data story: a Radar Chart and a Bubble Chart. The Radar Chart would help us analyze the overall battle statistics of individual Pokémon, revealing their strengths and weaknesses. The Bubble Chart would allow us to investigate the relationship between HP and Attack values.

3. **Chart.js and Papa Parse:** For generating the visualizations, we utilized the Chart.js library, which offers a wide range of customizable chart types, including radar and bubble charts. To handle the CSV dataset, we used Papa Parse, a powerful library for parsing CSV data and converting it into usable JavaScript objects.

### Libraries Used

1. **Papa Parse:** We used Papa Parse to efficiently parse the Pokémon dataset, converting the CSV data into an array of JavaScript objects. This made it easier to access and work with the individual Pokémon attributes during visualization creation.

2. **Chart.js:** Chart.js proved to be an excellent choice for generating interactive and visually appealing charts. We utilized the radar chart to visualize the battle statistics of each Pokémon and the bubble chart to explore the relationship between HP and Attack values.

### Running the Web Server (Express)

To run the web server and view the Pokémon visualizations, follow these steps:

1. Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

2. Clone this repository to your local machine using `git clone`.

3. Navigate to the project directory in your terminal.

4. Install the required dependencies by running:
   ```
   npm install
   ```

5. Start the Express server using the following command:
   ```
   mpm start
   ```

6. Once the server is up and running, open your web browser and go to `http://localhost:4000` to view the Pokémon data visualizations.

7. Explore the Radar Chart to understand the battle statistics of different Pokémon species and the Bubble Chart to investigate the relationship between HP and Attack values.

### Conclusion

By utilizing Chart.js and Papa Parse, we were able to craft compelling visualizations that helped us analyze and understand the battle statistics of Pokémon species. The radar chart revealed each Pokémon's unique strengths and weaknesses, aiding in strategic battle planning. Meanwhile, the bubble chart shed light on the relationship between HP and Attack values, identifying Pokémon capable of enduring battles while delivering powerful blows. Overall, this project showcased the power of data visualization in gaining insights and making informed decisions.

### Screen recording
Can be found in the parent folder as story.mp4
