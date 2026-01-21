// Create floating hearts animation
function createHearts() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;
    
    const heartSymbols = ['💕', '💖', '💗', '💝', '💓', '💞', '❤️', '💘'];
    
    // Create 20 hearts with random delays
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(heart);
    }
}

// Create sparkles animation for card page
function createSparkles() {
    const container = document.getElementById('sparklesContainer');
    if (!container) return;
    
    const sparkleSymbols = ['✨', '⭐', '🌟', '💫'];
    
    // Create 15 sparkles with random positions and delays
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(sparkle);
    }
}

// Check answer function for quiz page
function checkAnswer(isCorrect) {
    const errorMessage = document.getElementById('errorMessage');
    
    if (isCorrect) {
        // Correct answer - smooth transition to card page
        errorMessage.textContent = '';
        
        // Add fade out animation
        document.querySelector('.quiz-container').style.animation = 'fadeOutScale 0.5s ease-in forwards';
        
        // Navigate to card page after animation
        setTimeout(() => {
            window.location.href = 'card.html';
        }, 500);
    } else {
        // Wrong answer - show error message
        errorMessage.textContent = 'Неправильно 😢 Попробуй ещё раз, любимый 💕';
    }
}

// Add fade out animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOutScale {
        to {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Initialize hearts on page load
window.addEventListener('DOMContentLoaded', () => {
    createHearts();
});
