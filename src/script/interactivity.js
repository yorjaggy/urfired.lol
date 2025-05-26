import { getRandomReason } from './messages.js';

// Initialize the message on page load
let currentReason = getRandomReason();

/**
 * Update the displayed message with a random reason
 */
function updateMessage(name, company) {
  const messageElement = document.getElementById('firing-reason');

  // Add the fade-out class
  messageElement.classList.add('fade-out');

  // After the fade-out animation completes, update the text and fade back in
  setTimeout(() => {
    currentReason = getRandomReason();
    messageElement.textContent = company ? `${company} THINKS ${currentReason}` : currentReason;
    messageElement.classList.remove('fade-out');
    messageElement.classList.add('fade-in');

    // Remove the fade-in class after animation completes
    setTimeout(() => {
      messageElement.classList.remove('fade-in');
    }, 500);
  }, 300);
}

/**
 * Initialize event listeners
 */
export function initializeInteractivity(name, company) {

  // Set initial reason
  const messageElement = document.getElementById('firing-reason');
  messageElement.textContent = company ? `${company} THINKS ${currentReason}` : currentReason;

  // Listen for spacebar press
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.key === ' ') {
      event.preventDefault(); // Prevent page scrolling on spacebar
      updateMessage(name, company);
    }
  });

  // Listen for clicks anywhere on the page
  document.addEventListener('click', (event) => {
    updateMessage(name, company);
  });
}