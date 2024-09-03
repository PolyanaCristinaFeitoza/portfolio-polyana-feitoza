document.addEventListener('DOMContentLoaded', () => {
    // apenas exibir a header na página inicial
    if (location.pathname !== '/' && !location.pathname.includes('index.html')) {
        loadPage(location.pathname.substring(1));
    }
});

