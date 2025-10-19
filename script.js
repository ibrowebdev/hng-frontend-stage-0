/**
 * Updates the 'Current time in milliseconds' element with the accurate Date.now() value.
 * This function will run on load and every second thereafter.
 */
function updateTimeInMilliseconds() {
    const timeElement = document.getElementById('user-time-ms');
    if (timeElement) {
        // Date.now() provides the current time in milliseconds since the Unix Epoch.
        timeElement.textContent = Date.now().toString(); 
    }
}

// Initial call to set the time immediately on page load
updateTimeInMilliseconds();

// Set up an interval to update the time every 1000 milliseconds (1 second). This ensures the test-user-time is reasonably accurate for testing purposes without being an overly aggressive, resource-heavy ticker.
setInterval(updateTimeInMilliseconds, 1000); 