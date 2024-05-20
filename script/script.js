const container = document.querySelector('.imagens-carrossel');
let xInicial, xAtual, rolando;

container.addEventListener('mousedown', (e) => {
    xInicial = e.clientX;
    rolando = true;
    container.style.cursor = 'grabbing'; 
    container.addEventListener('mousemove', manipularMovimentoMouse);
});

const manipularMovimentoMouse = (e) => {
    if (rolando) {
        xAtual = e.clientX;
        const deltaX = xAtual - xInicial;
        const scrollEsquerdo = container.scrollLeft - deltaX;
        container.scrollLeft = scrollEsquerdo;
    }
};

container.addEventListener('mouseup', () => {
    rolando = false;
    container.style.cursor = 'grab'; 
    container.removeEventListener('mousemove', manipularMovimentoMouse);
});

container.addEventListener('touchstart', (e) => {
    xInicial = e.touches[0].clientX;
    rolando = true;
    container.style.cursor = 'grabbing';
    container.addEventListener('touchmove', manipularMovimentoToque);
});

const manipularMovimentoToque = (e) => {
    if (rolando) {
        xAtual = e.touches[0].clientX;
        const deltaX = xAtual - xInicial;
        const scrollEsquerdo = container.scrollLeft - deltaX;
        container.scrollLeft = scrollEsquerdo;
    }
};

container.addEventListener('touchend', () => {
    rolando = false;
    container.style.cursor = 'default'; // Resetar o cursor
    container.removeEventListener('touchmove', manipularMovimentoToque);
});
