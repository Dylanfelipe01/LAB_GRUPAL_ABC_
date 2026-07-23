const tarjetasVistas = new Set();

function voltear(cardElement) {
  cardElement.classList.add('volteada');

  if (cardElement.classList.contains('volteada')) {
    if (!tarjetasVistas.has(cardElement)) {
      tarjetasVistas.add(cardElement);
      actualizarContador();
    }
  }
}

function actualizarContador() {
  const contadorDOM = document.getElementById('contador');
  contadorDOM.textContent = tarjetasVistas.size;
}

function filtrar(tipo) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (tipo === 'todas') {
      card.classList.remove('oculto');
    } else if (tipo === 'vocales') {
      const esVocal = card.getAttribute('data-tipo') === 'vocal';
      
      if (esVocal) {
        card.classList.remove('oculto');
      } else {
        card.classList.add('oculto');
      }
    }
  });
}