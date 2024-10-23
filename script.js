// Add event listeners to like, comment, and share buttons
document.querySelectorAll('.post footer button').forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(`Button ${e.target.textContent} clicked`);
        // Add functionality here
    });
});

// Add event listeners to story images
document.querySelectorAll('.sidebar li img').forEach((image) => {
    image.addEventListener('click', () => {
        console.log('Story image clicked');
        // Add functionality here
    });
});

// Simulate posting new content
document.addEventListener('DOMContentLoaded', () => {
    const postTemplate = document.querySelector
```
