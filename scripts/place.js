// Function to update the copyright year dynamically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

// Function to update the last modified date dynamically
function updateLastModified() {
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;
}

// Call functions to update copyright year and last modified date
updateCopyrightYear();
updateLastModified();

// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for wind chill calculation
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Calculate wind chill factor
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        // Conditions not met, return "N/A"
        return "N/A";
    }
}

// Function to display wind chill factor in the "Weather" section
function displayWindChill() {
    // Static values for temperature and wind speed (for demonstration)
    const temperature = 5; // Celsius
    const windSpeed = 10; // km/h

    // Calculate wind chill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display wind chill factor in the "Weather" section
    const weatherSection = document.getElementById('weather');
    weatherSection.innerHTML = `<p>Temperature: ${temperature}°C</p>`;
    weatherSection.innerHTML += `<p>Wind Speed: ${windSpeed} km/h</p>`;
    weatherSection.innerHTML += `<p>Wind Chill Factor: ${windChill}</p>`;
}

// Call the displayWindChill function when the page loads
window.addEventListener('load', displayWindChill);
