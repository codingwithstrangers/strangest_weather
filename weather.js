document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('weather-hourly');

    // Optional: Add any additional custom scroll behavior here

    // Example: Scroll to the top when the page loads
    container.scrollTop = 0;
});


// for container b
// document.addEventListener('DOMContentLoaded', () => {
//     const weatherWeekly = document.querySelector('.weather-weekly');
    
//     // Example of auto-scrolling every 2 seconds
//     setInterval(() => {
//       weatherWeekly.scrollBy({
//         left: 200, // Adjust the scroll amount as needed
//         behavior: 'smooth'
//       });
//     }, 2000);
//   });


  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('weather-weekly');

    // Scroll to the left when the page loads
    container.scrollLeft = 0;
  });

