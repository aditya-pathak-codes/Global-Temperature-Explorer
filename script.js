const capitals = [
    { name: "London", country: "UK", lat: 51.5074, lon: -0.1278 },
    { name: "Paris", country: "France", lat: 48.8566, lon: 2.3522 },
    { name: "Tokyo", country: "Japan", lat: 35.6895, lon: 139.6917 },
    { name: "Washington D.C.", country: "USA", lat: 38.9072, lon: -77.0369 },
    { name: "Canberra", country: "Australia", lat: -35.2809, lon: 149.1300 },
    { name: "Ottawa", country: "Canada", lat: 45.4215, lon: -75.6997 },
    { name: "Berlin", country: "Germany", lat: 52.5200, lon: 13.4050 },
    { name: "Moscow", country: "Russia", lat: 55.7558, lon: 37.6173 },
    { name: "Beijing", country: "China", lat: 39.9042, lon: 116.4074 },
    { name: "New Delhi", country: "India", lat: 28.6139, lon: 77.2090 },
    { name: "New York", country: "USA", lat: 40.7128, lon: -74.0060 },
    { name: "Los Angeles", country: "USA", lat: 34.0522, lon: -118.2437 },
    { name: "Mexico City", country: "Mexico", lat: 19.4326, lon: -99.1332 },
    { name: "São Paulo", country: "Brazil", lat: -23.5505, lon: -46.6333 },
    { name: "Buenos Aires", country: "Argentina", lat: -34.6037, lon: -58.3816 },
    { name: "Lima", country: "Peru", lat: -12.0464, lon: -77.0428 },
    { name: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038 },
    { name: "Rome", country: "Italy", lat: 41.9028, lon: 12.4964 },
    { name: "Vienna", country: "Austria", lat: 48.2082, lon: 16.3738 },
    { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lon: 4.9041 },
    { name: "Brussels", country: "Belgium", lat: 50.8503, lon: 4.3517 },
    { name: "Oslo", country: "Norway", lat: 59.9139, lon: 10.7522 },
    { name: "Athens", country: "Greece", lat: 37.9838, lon: 23.7275 },
    { name: "Lisbon", country: "Portugal", lat: 38.7169, lon: -9.1399 },
    { name: "Seoul", country: "South Korea", lat: 37.5665, lon: 126.9780 },
    { name: "Bangkok", country: "Thailand", lat: 13.7563, lon: 100.5018 },
    { name: "Jakarta", country: "Indonesia", lat: -6.2088, lon: 106.8456 },
    { name: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lon: 101.6869 },
    { name: "Manila", country: "Philippines", lat: 14.5995, lon: 120.9842 },
    { name: "Hanoi", country: "Vietnam", lat: 21.0285, lon: 105.8544 },
    { name: "Riyadh", country: "Saudi Arabia", lat: 24.7136, lon: 46.6753 },
    { name: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708 },
    { name: "Tehran", country: "Iran", lat: 35.6892, lon: 51.3890 },
    { name: "Istanbul", country: "Turkey", lat: 41.0082, lon: 28.9784 },
    { name: "Cairo", country: "Egypt", lat: 30.0444, lon: 31.2357 },
    { name: "Lagos", country: "Nigeria", lat: 6.5244, lon: 3.3792 },
    { name: "Nairobi", country: "Kenya", lat: -1.2921, lon: 36.8219 },
    { name: "Johannesburg", country: "South Africa", lat: -26.2041, lon: 28.0473 },
    { name: "Addis Ababa", country: "Ethiopia", lat: 9.0301, lon: 38.7486 },
    { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Auckland", country: "New Zealand", lat: -36.8485, lon: 174.7633 },
    { name: "Jerusalem", country: "Israel", lat: 31.7683, lon: 35.2137 },
    { name: "Baghdad", country: "Iraq", lat: 33.3128, lon: 44.3615 },
    { name: "Karachi", country: "Pakistan", lat: 24.8607, lon: 67.0011 },
    { name: "Dhaka", country: "Bangladesh", lat: 23.8103, lon: 90.4125 },
     { name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198 },
    { name: "Hong Kong", country: "China", lat: 22.3193, lon: 114.1694 },
    { name: "Doha", country: "Qatar", lat: 25.2854, lon: 51.5310 },
    { name: "Kuwait City", country: "Kuwait", lat: 29.3759, lon: 47.9774 },
    { name: "Abu Dhabi", country: "UAE", lat: 24.4539, lon: 54.3773 },
    { name: "Colombo", country: "Sri Lanka", lat: 6.9271, lon: 79.8612 },
    { name: "Kathmandu", country: "Nepal", lat: 27.7172, lon: 85.3240 },
    { name: "Tashkent", country: "Uzbekistan", lat: 41.2995, lon: 69.2401 },
    { name: "Almaty", country: "Kazakhstan", lat: 43.2220, lon: 76.8512 },
    { name: "Warsaw", country: "Poland", lat: 52.2297, lon: 21.0122 },
    { name: "Prague", country: "Czech Republic", lat: 50.0755, lon: 14.4378 },
    { name: "Budapest", country: "Hungary", lat: 47.4979, lon: 19.0402 },
    { name: "Stockholm", country: "Sweden", lat: 59.3293, lon: 18.0686 },
    { name: "Copenhagen", country: "Denmark", lat: 55.6761, lon: 12.5683 },
    { name: "Helsinki", country: "Finland", lat: 60.1699, lon: 24.9384 },
    { name: "Dublin", country: "Ireland", lat: 53.3498, lon: -6.2603 },
    { name: "Zurich", country: "Switzerland", lat: 47.3769, lon: 8.5417 },
    { name: "Barcelona", country: "Spain", lat: 41.3851, lon: 2.1734 },
    { name: "Milan", country: "Italy", lat: 45.4642, lon: 9.1900 },
    { name: "Cape Town", country: "South Africa", lat: -33.9249, lon: 18.4241 }
]

window.onload = function() {
    const select = document.getElementById('capitalSelect');
    capitals.forEach((cap, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.text = `${cap.name}, ${cap.country}`;
        select.appendChild(opt);
    });
};

function getTemperature() {
    const idx = document.getElementById('capitalSelect').value;
    const cap = capitals[idx];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${cap.lat}&longitude=${cap.lon}&current_weather=true`;
    document.getElementById('result').innerHTML = 'Loading...';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.current_weather) {
                document.getElementById('result').innerHTML = `Current temperature in <b>${cap.name}</b>: <span style='color:#0077b6'>${data.current_weather.temperature}°C</span>`;
            } else {
                document.getElementById('result').innerHTML = 'Weather data not available.';
            }
        })
        .catch(() => {
            document.getElementById('result').innerHTML = 'Failed to fetch weather data.';
        });
}
