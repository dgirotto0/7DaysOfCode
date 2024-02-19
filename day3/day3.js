document.addEventListener('DOMContentLoaded', () => {
    const questionEl = document.getElementById('question');
    const option1El = document.getElementById('option1');
    const option2El = document.getElementById('option2');
    const techInputContainerEl = document.getElementById('tech-input-container');
    const techInputEl = document.getElementById('tech-input');
    const addTechEl = document.getElementById('add-tech');
    const techListEl = document.getElementById('tech-list');  

    let stage = 0;
    let path = '';

    const stages = [
        {
            question: 'Você quer seguir para área de Front-End ou seguir para a área de Back-End?',
            options: ['Front-End', 'Back-End'],
            action: (choice) => {
                path = choice;
                stage++;
                updateStage();
            }
        },
        {
            question: 'Qual tecnologia você quer aprender?',
            options: ['React', 'Vue', 'C#', 'Java'],
            action: (choice) => {
                path += ' > ' + choice;
                stage++;
                updateStage();
            }
        },
        {
            question: 'Você quer se especializar na área escolhida ou se tornar Fullstack?',
            options: ['Especializar', 'Fullstack'],
            action: (choice) => {
                path += ' > ' + choice;
                stage++;
                updateStage();
            }
        }
    ];

    function updateStage() {
        if (stage < stages.length) {
          const currentStage = stages[stage];
          questionEl.textContent = currentStage.question;
      
          // Verificar se é a primeira etapa ou uma etapa subsequente
          if (stage === 0 || stage === 2) {
            option1El.textContent = currentStage.options[0];
            option2El.textContent = currentStage.options[1];
          } else if (stage === 1 && path === 'Front-End') {
            option1El.textContent = 'React';
            option2El.textContent = 'Vue';
          } else if (stage === 1 && path === 'Back-End') {
            option1El.textContent = 'C#';
            option2El.textContent = 'Java';
          }
      
          option1El.style.display = 'block';
          option2El.style.display = 'block';
          techInputContainerEl.style.display = 'none';
          option1El.onclick = () => currentStage.action(option1El.textContent);
          option2El.onclick = () => currentStage.action(option2El.textContent);
        } else {
          questionEl.textContent = 'Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?';
          option1El.style.display = 'none';
          option2El.style.display = 'none';
          techInputContainerEl.style.display = 'block';
        }
      }
    

    const endGameBtn = document.getElementById('endGameBtn');

    function endGame() {
        questionEl.textContent = 'Parabéns por definir seu caminho de aprendizado!';
        option1El.style.display = 'none';
        option2El.style.display = 'none';
        techInputContainerEl.style.display = 'none';
        endGameBtn.style.display = 'none';
        techListEl.style.display = 'none';
        document.querySelector('h1').style.display = 'none'; // Ocultar o título
        alert('Fim do jogo! Você pode revisar as tecnologias escolhidas na lista abaixo.');
    }
    

    endGameBtn.addEventListener('click', endGame);

    function showEndGameButton() {
        endGameBtn.classList.remove('hidden');
    }

    addTechEl.addEventListener('click', () => {
        const tech = techInputEl.value;
        if (tech) {
            const li = document.createElement('li');
            li.textContent = tech;
            techListEl.appendChild(li);
            techInputEl.value = '';
            if (!confirm('Tem mais alguma tecnologia que você gostaria de aprender?')) {
                showEndGameButton();
            }
        }
    });

    updateStage();
});
