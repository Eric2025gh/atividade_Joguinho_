// GARANTIA: o código só roda depois que o HTML carregar
window.onload = function () {

  const processos = [
    { nome: 'Iallen', area: 'POO', hp: 5, bilhetes: 10 },
    { nome: 'Jerfferson', area: 'Análise de Projetos', hp: 3, bilhetes: 5 },
    { nome: 'Sekeff', area: 'Arquitetura de Computadores', hp: 8, bilhetes: 20 },
    { nome: 'Maycol', area: 'Sistemas Operacionais', hp: 6, bilhetes: 15 },
    { nome: 'Mayllon', area: 'Engenharia de Dados', hp: 4, bilhetes: 10 },
    { nome: 'Ivan', area: 'Extensão', hp: 2, bilhetes: 12 },
    { nome: 'Wanderson', area: 'Banco de Dados', hp: 7, bilhetes: 18 },
    { nome: 'Jivago', area: 'Estrutura de Dados', hp: 5, bilhetes: 8 }
  ];

  const arena = document.getElementById('arena');
  const log = document.getElementById('log');
  const btn = document.getElementById('btnExecutar');

  function renderizar() {
    arena.innerHTML = '';

    processos.forEach((p, index) => {
      const div = document.createElement('div');
      div.className = 'personagem';
      div.id = 'proc-' + index;
      div.innerHTML = `
        <strong>${p.nome}</strong><br>
        ${p.area}<br>
        HP: ${p.hp}
      `;
      arena.appendChild(div);
    });
  }

  function executarBatalha() {
    const vivos = processos.filter(p => p.hp > 0);

    if (vivos.length === 0) {
      log.innerText = 'Todos os processos finalizaram.';
      return;
    }

    // Escalonamento por loteria (simples)
    let sorteio = [];
    vivos.forEach(p => {
      for (let i = 0; i < p.bilhetes; i++) {
        sorteio.push(p);
      }
    });

    const escolhido = sorteio[Math.floor(Math.random() * sorteio.length)];
    escolhido.hp--;

    log.innerText = 'Processo executado: ' + escolhido.nome;

    renderizar();
  }

  btn.addEventListener('click', executarBatalha);

  renderizar();
};