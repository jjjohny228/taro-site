document.getElementById("guess-btn").addEventListener("click", () => {
    const cards = document.querySelectorAll(".profile-card");
    cards.forEach((card) => {
        card.classList.add("flipped");
    });

    // Show extra buttons and audio player
    document.getElementById("extra-buttons").classList.remove("hidden");
});

// Play Again button logic
document.getElementById("play-again-btn").addEventListener("click", () => {
    const cards = document.querySelectorAll(".profile-card");
    cards.forEach((card) => {
        card.classList.remove("flipped");
    });

    // Hide extra buttons and audio player
    document.getElementById("extra-buttons").classList.add("hidden");
});
