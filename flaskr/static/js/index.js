const darkMode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}
