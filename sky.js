function updateSky() {
    const now = new Date();
    const hour = now.getHours();

    let colors;

    if (hour >= 6 && hour < 12) {
        // Morning
        colors = ["#34447A", "#8278B5", "#D5A7BD"];
    } else if (hour >= 12 && hour < 18) {
        // Afternoon
        colors = ["#6489BB", "#B7A5D7", "#E9C4D0"];
    } else if (hour >= 18 && hour < 21) {
        // Evening
        colors = ["#1A2257", "#5E438F", "#B36B9D"];
    } else {
        // Night: your original colours
        colors = ["#080B2C", "#242060", "#542477"];
    }

    document.documentElement.style.setProperty(
        "--sky-background",
        `linear-gradient(135deg, ${colors.join(", ")})`
    );
}

updateSky();

// Check for changes every minute
setInterval(updateSky, 60000);