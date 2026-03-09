# 🌍 Global Temperature Explorer — Real-Time Weather Viewer

## 📌 Project Overview

**Global Temperature Explorer** is a simple web-based application that allows users to check the **current temperature of major world cities** in real time.

The application fetches live weather data from the **Open-Meteo Weather API** and displays the temperature dynamically in the browser.

This project demonstrates how to integrate **external APIs with JavaScript**, retrieve real-time data using the **Fetch API**, and update the webpage using **DOM manipulation**.

---

## 🎯 Objective

The main objective of this project is to understand how **web applications interact with external APIs** and display live data dynamically.

It also helps in learning the fundamentals of:

* API integration
* Asynchronous JavaScript
* Dynamic UI updates

---

## ⚙️ Features

* ✅ Select from multiple **world capitals and major cities**
* ✅ Fetch **real-time temperature data**
* ✅ Uses **Open-Meteo Weather API**
* ✅ Dynamic **dropdown population using JavaScript**
* ✅ **Fetch API** for asynchronous data retrieval
* ✅ Basic **error handling** for failed API requests
* ✅ Simple and clean **user interface**

---

## 🌐 API Used

This project uses the **Open-Meteo Weather API**, which provides free real-time weather data.

**Example API Endpoint:**

```
https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true
```

The API returns real-time weather information including:

* 🌡 Temperature
* 🌬 Wind speed
* ☁ Weather conditions
* 🕒 Timestamp

---

## 🛠️ Technologies Used

* **HTML5** — Structure of the application
* **CSS3** — Styling and layout
* **JavaScript (ES6)** — Application logic and API integration
* **Fetch API** — Retrieving weather data asynchronously
* **Open-Meteo API** — Weather data provider

---

## 📂 Project Structure

```
Global-Temperature-Explorer/
│
├── index.html      # Main user interface
├── style.css       # Styling and layout
├── script.js       # API logic and DOM manipulation
└── README.md       # Project documentation
```

---

## ⚙️ How It Works

1. A list of **world capitals and major cities** is stored in a JavaScript array.

2. When the page loads:

   * JavaScript **dynamically populates the dropdown menu** with city names.

3. When a user selects a city and clicks the **Get Temperature** button:

   * The **latitude and longitude** of the selected city are retrieved.
   * A request is sent to the **Open-Meteo API**.
   * The API returns **real-time weather data**.
   * The **current temperature is displayed on the webpage**.

---

## 🧪 Example Output

```
Current temperature in Tokyo: 23°C
```

---

## 🎯 Learning Outcomes

After completing this project, one can understand:

* How **APIs work in web development**
* Using the **Fetch API for asynchronous requests**
* Handling **JSON responses from APIs**
* **DOM manipulation** to update UI dynamically
* Basic **error handling in JavaScript**

---

## 🔮 Future Improvements

This project can be enhanced further by adding:

* 🌤 Weather icons (Sunny, Cloudy, Rainy)
* 📊 Temperature graphs using **Chart.js**
* 🗺 Interactive map using **Leaflet.js**
* 🔍 City search functionality instead of dropdown
* 🌬 Display additional weather details like:

  * Wind speed
  * Weather conditions
  * Time of observation
* 📱 Improved responsive design for mobile devices

---

## 👨‍💻 Author

**Aditya Pathak**

GitHub:
https://github.com/aditya-pathak-codes

---

## ⭐ Support

If you found this project helpful, consider **starring the repository** and sharing feedback!
