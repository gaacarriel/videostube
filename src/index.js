document.addEventListener('DOMContentLoaded', async () => {
    const mfDrawerContainer = document.getElementById('mf-drawer');
    const contentFrame = document.getElementById('content-frame');
    
    await fetch('http://localhost:3000/')
        .then(response => response.text())
        .then(html => {
            console.log(mfDrawerContainer)
            console.log(html)
            mfDrawerContainer.innerHTML = html;

            updateContentFrame();
        })
        .catch(error => console.error('Erro ao carregar o mf_drawer:', error));

    function updateContentFrame() {
        const params = new URLSearchParams(window.location.search);
        const page = params.get('page');
        if (page === 'favoritos') {
            contentFrame.src = 'http://localhost:3008/favoritePage/index.html';
        } else {
            contentFrame.src = 'http://localhost:3008/';
        }
    }

    window.addEventListener('popstate', updateContentFrame);
});