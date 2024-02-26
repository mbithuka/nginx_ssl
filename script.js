// Function to simulate typing effect
function typeText(element, text, delay) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
            // Trigger animation after typing is complete
            element.classList.add('move-animation');
        }
    }, delay);
}

// Get the h1 element
const h1Element = document.getElementById('helloWorld');

// Text to be typed
const textToType = "Hello, World!";

// Start typing with a delay of 1000 milliseconds between characters
typeText(h1Element, textToType, 1000);
