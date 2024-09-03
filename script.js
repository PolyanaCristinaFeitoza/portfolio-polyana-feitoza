document.addEventListener('DOMContentLoaded', () => {
    // apenas exibir a header na página inicial
    if (location.pathname !== '/' && !location.pathname.includes('index.html')) {
        loadPage(location.pathname.substring(1));
    }
});

function loadPage(url) {
    event.preventDefault(); // previne o comportamento padrão do link

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar a página: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
            history.pushState(null, '', url);
        })
        .catch(err => {
            console.error(err);
            document.getElementById('content').innerHTML = '<h1>Página não encontrada</h1>';
        });
}
