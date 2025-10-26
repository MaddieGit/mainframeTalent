window.onload = () => {
    const splashContainer = document.getElementById('splash-container');
    const messages = [
        'From exploring to expert!',
        'From practicing to professional!',
        'From beginner to builder!',
        'From simple steps to serious skills!',
        'From amateur to accomplished!'
    ];

    // Function to generate a random position for the splash text
    function getRandomPosition() {
        const maxX = window.innerWidth - 200;  // max X position for text
        const maxY = 300;  // max Y position for text, ensuring it's only in the top 300px of the screen

        const x = Math.floor(Math.random() * maxX);  // Random horizontal position
        const y = Math.floor(Math.random() * maxY);  // Random vertical position, but limited to 300px

        return { x, y };
    }

    // Function to create and show the splash text
    function showSplashText(message, delay) {
        const splashText = document.createElement('div');
        splashText.classList.add('splash-text');
        splashText.textContent = message;

        // Get random position for the splash text
        const position = getRandomPosition();
        splashText.style.position = 'absolute';  // Position the text absolutely on the screen
        splashText.style.left = `${position.x}px`;
        splashText.style.top = `${position.y}px`;

        splashContainer.appendChild(splashText);

        // Show the splash text after the delay
        setTimeout(() => {
            splashText.style.opacity = 1;
            splashText.style.transition = 'opacity 1s';  // Fade-in effect
        }, delay);

        // Hide the splash text after some time (e.g., 3 seconds)
        setTimeout(() => {
            splashText.style.opacity = 0;  // Fade-out effect
            // Remove from DOM after the fade-out
            setTimeout(() => {
                splashText.remove();
            }, 1000);  // Match the animation duration
        }, delay + 3000);  // Keep the text visible for 3 seconds
    }

    // Loop through messages and display them one by one
    let index = 0;
    function displayMessages() {
        const delay = index * 3000;  // 3 seconds for text to show + 3 seconds to disappear

        // Show the current message
        showSplashText(messages[index], delay);

        // Move to the next message
        index = (index + 1) % messages.length;

        // Continue looping through the messages
        setTimeout(displayMessages, delay + 3000);  // Show each message for 3 seconds
    }

    // Wait 3 seconds after page load before starting the splash messages
    setTimeout(() => {
        displayMessages();
    }, 3000);  // Start after 3 seconds
};




document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle'); // Hamburger icon
    const nav = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

