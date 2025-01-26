const clock = document.getElementById('clock');

// Function to update the clock
function updateClock() {
  // Get the current time
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const time = `${hours}:${minutes}:${seconds}`;

  // Update the clock text
  clock.textContent = time;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();