// Dark/light mode button
const darkMode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

// Auto dark/light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}