🌍 World Temperature App
A simple JavaScript-based weather application that allows users to check the current temperature of major world cities. The project fetches real-time weather data using the Open-Meteo API and displays the temperature dynamically in the browser.
This project demonstrates the use of JavaScript Fetch API, DOM manipulation, and external API integration.

🚀 Features
🌎 Select from multiple world capitals and major cities
🌡 Fetch real-time temperature data
⚡ Uses Open-Meteo Weather API
🔄 Dynamic dropdown population using JavaScript
📡 Fetch API for asynchronous data retrieval
❗ Basic error handling for failed API calls
💻 Built using HTML, CSS, and JavaScript

🛠 Tech Stack
HTML5 – Structure of the webpage
CSS3 – Styling and layout
JavaScript (ES6) – Application logic
Fetch API – To retrieve weather data
Open-Meteo API – Source of weather information

🌐 API Used
This project uses the free Open-Meteo Weather API.
API Endpoint Example:
https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true

The API returns real-time weather data including:
Temperature
Wind speed
Weather conditions
Timestamp

📂 Project Structure
world-temperature-app
│
├── index.html
├── style.css
├── script.js
└── README.md


⚙️ How It Works
A list of world capitals and major cities is stored in a JavaScript array of objects.
When the page loads, JavaScript dynamically populates the dropdown menu.
When a user selects a city and clicks the button:
The latitude and longitude of that city are used.
A request is sent to the Open-Meteo API.
The API response is received and the current temperature is displayed on the page.

📸 Example Output
Current temperature in Tokyo: 23°C


🔧 Future Improvements
This project can be enhanced further by adding:
🌤 Weather icons (Sunny, Cloudy, Rainy)
📊 Temperature graphs using Chart.js
🗺 Interactive map using Leaflet.js
🔍 City search functionality instead of dropdown
🌬 Display additional weather details like:
Wind speed
Weather condition
Time of observation
📱 Responsive UI improvements

🎯 Learning Outcomes
This project helped practice:
JavaScript arrays and objects
DOM manipulation
API integration
Asynchronous programming
Fetch API usage
Basic error handling

📌 Author
Aditya Pathak
GitHub:
https://github.com/aditya-pathak-codes

⭐ If you like this project
Consider starring the repository and sharing feedback!
