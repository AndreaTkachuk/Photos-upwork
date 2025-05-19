'use strict';

document.addEventListener('DOMContentLoaded', function() {
  // Countdown Timer Logic
  const countdownElements = {
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    stickyHours: document.getElementById('sticky-hours'),
    stickyMinutes: document.getElementById('sticky-minutes'),
    stickySeconds: document.getElementById('sticky-seconds'),
  };

  const timeLeft = {
    hours: 23,
    minutes: 59,
    seconds: 59,
  };

  function updateCountdown() {
    // Update the main countdown
    countdownElements.hours.textContent = formatTime(timeLeft.hours);
    countdownElements.minutes.textContent = formatTime(timeLeft.minutes);
    countdownElements.seconds.textContent = formatTime(timeLeft.seconds);

    // Update the sticky panel countdown
    countdownElements.stickyHours.textContent = formatTime(timeLeft.hours);
    countdownElements.stickyMinutes.textContent = formatTime(timeLeft.minutes);
    countdownElements.stickySeconds.textContent = formatTime(timeLeft.seconds);
  }

  function formatTime(value) {
    return value.toString().padStart(2, '0');
  }

  function decrementTime() {
    timeLeft.seconds--;

    if (timeLeft.seconds < 0) {
      timeLeft.seconds = 59;
      timeLeft.minutes--;

      if (timeLeft.minutes < 0) {
        timeLeft.minutes = 59;
        timeLeft.hours--;

        if (timeLeft.hours < 0) {
          timeLeft.hours = 23; // Reset to 23 hours when it reaches 0
        }
      }
    }

    updateCountdown();
  }

  // Start the countdown
  setInterval(decrementTime, 1000);

  // Sticky Panel Show/Hide Based on Scroll (Without IntersectionObserver)
  const heroSection = document.getElementById('hero-section');
  const stickyPanel = document.getElementById('sticky-panel');

  function checkHeroVisibility() {
    const rect = heroSection.getBoundingClientRect();
    const isVisible = rect.bottom > 0;

    if (!isVisible) {
      stickyPanel.classList.add('visible');
    } else {
      stickyPanel.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', checkHeroVisibility);
  window.addEventListener('resize', checkHeroVisibility);

  checkHeroVisibility(); // Initial check
});
