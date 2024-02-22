document.addEventListener('DOMContentLoaded', () => {
    const comidaInput = document.getElementById('comida');
    const confirmarComidaBtn = document.getElementById('confirmarComida');
    const frutaCheckbox = document.getElementById('fruta-checkbox');
    const laticinioCheckbox = document.getElementById('laticinio-checkbox');
    const congeladosCheckbox = document.getElementById('congelados-checkbox');
    const docesCheckbox = document.getElementById('doces-checkbox');

    // Inicializa as listas de comida
    const listaFrutas = document.getElementById('lista-frutas').querySelector('ul');
    const listaLaticinios = document.getElementById('lista-laticinios').querySelector('ul');
    const listaCongelados = document.getElementById('lista-congelados').querySelector('ul');
    const listaDoces = document.getElementById('lista-doces').querySelector('ul');

    // Função para adicionar comida a uma lista específica
    function addComidaToList(comida, lista) {
      const li = document.createElement('li');
      li.textContent = comida;
      lista.appendChild(li);
    }

    // Função para limpar o campo de entrada de comida
    function clearComidaInput() {
      comidaInput.value = '';
    }

    // Função para adicionar comida
    function addComida() {
      const comida = comidaInput.value;
      if (comida) {
        const tiposSelecionados = [];
        if (frutaCheckbox.checked) tiposSelecionados.push(frutaCheckbox.value);
        if (laticinioCheckbox.checked) tiposSelecionados.push(laticinioCheckbox.value);
        if (congeladosCheckbox.checked) tiposSelecionados.push(congeladosCheckbox.value);
        if (docesCheckbox.checked) tiposSelecionados.push(docesCheckbox.value);

        tiposSelecionados.forEach(tipo => {
            switch (tipo) {
              case 'Fruta':
                addComidaToList(comida, listaFrutas);
                break;
              case 'Laticínio':
                addComidaToList(comida, listaLaticinios);
                break;
              case 'Congelados':
                addComidaToList(comida, listaCongelados);
                break;
              case 'Doces':
                addComidaToList(comida, listaDoces);
                break;
            }
          });
  
          clearComidaInput(); // Limpa o campo de entrada após a adição à lista
        } else {
          alert('Por favor, digite o nome da comida.');
        }
      }
  
      confirmarComidaBtn.addEventListener('click', addComida);
  
      // Ocultar a confirmação inicial
      document.getElementById('confirmacao').style.display = 'none';
  
      // Exibir as listas lado a lado
      document.getElementById('listas-comida').style.display = 'flex';
  });
  
          
