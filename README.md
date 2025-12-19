# atividade_Joguinho_
esse repositório tem o objetivo de simular um algorítimo de escalonamento!

# 🎮 Jogo de Simulação de Escalonamento de Processos (SEO)

## 📌 Descrição do Projeto

Este repositório contém um **jogo educativo simples** desenvolvido para **simular o funcionamento de um algoritmo de escalonamento de processos**, inspirado em conceitos de **Sistemas Operacionais (SEO)**.

A ideia principal é **transformar processos e threads em personagens**, permitindo visualizar, de forma didática, como o sistema decide **qual processo será executado**, **quem acessa os recursos primeiro** e **como ocorrem as trocas de execução**.

O projeto foi pensado para ser **simples, visual e fácil de entender**, tanto no código quanto na lógica, servindo como apoio para estudos acadêmicos.

---

## 🧠 Conceito Central

No jogo:

* Cada **processo** é representado por um **professor/personagem**.
* O **escalonador** é representado por um sistema de **batalhas**.
* A **batalha** decide qual processo será executado primeiro.
* O jogo simula conceitos como **tempo de execução**, **prioridade**, **quantum** e **loteria**.

Tudo isso é apresentado de forma **gamificada**, sem complexidade excessiva.

---

## 👨‍🏫 Personagens (Processos)

Os personagens do jogo representam processos/threads do sistema:

* Yalen
* Jefferson
* Sequefe
* Michael
* Milon
* Ivan
* Wanderson
* Givago

Cada personagem possui atributos baseados em escalonamento de processos.

---

## 📊 Atributos dos Processos

Cada personagem (processo) possui os seguintes atributos:

| Conceito do Jogo | Conceito de SO | Explicação Simples                                         |
| ---------------- | -------------- | ---------------------------------------------------------- |
| **HP**           | Burst Time     | Quantidade de tempo que o processo precisa para finalizar  |
| **Batalha**      | Escalonamento  | Decisão de qual processo será executado                    |
| **Prioridade**   | Prioridade     | Processos com maior prioridade têm mais chance de execução |
| **Quantum**      | Time Slice     | Tempo máximo que o processo pode executar por vez          |
| **Bilhetes**     | Loteria        | Quanto mais bilhetes, maior a chance de ser escolhido      |
| **Chegada**      | Arrival Time   | Momento em que o processo entra no sistema                 |

O **HP diminui** conforme o processo é executado, até chegar a zero (processo finalizado).

---

## ⚔️ Sistema de Batalha (Escalonamento)

A **batalha** representa a decisão do escalonador:

* Dois ou mais processos entram em disputa
* O sistema avalia atributos como:

  * Prioridade
  * Quantum
  * Bilhetes (loteria)
* O processo vencedor **executa**, consumindo HP
* Se o HP chegar a zero, o processo é encerrado
* Caso contrário, ele volta para a fila

Esse ciclo se repete até todos os processos finalizarem.

---

## 🧩 Estrutura do Projeto (Planejada)

```
📁 projeto-escalonamento-jogo
│
├── index.html   # Estrutura do jogo
├── style.css    # Estilo simples (2D básico)
├── script.js    # Lógica do escalonamento e batalhas
└── README.md    # Documentação do projeto
```

---

## 🎯 Objetivo Educacional

Este projeto tem como objetivo:

* Facilitar o entendimento de **escalonamento de processos**
* Ajudar a visualizar conceitos de **Sistemas Operacionais**
* Unir teoria + prática de forma leve e interativa
* Servir como trabalho acadêmico e material de estudo

---

## 🛠️ Tecnologias Utilizadas

* **HTML** – Estrutura do jogo
* **CSS** – Estilização simples (movimento 2D básico)
* **JavaScript** – Lógica do escalonamento e batalhas

Nenhuma biblioteca externa é utilizada, mantendo o projeto acessível e fácil de compreender.

---

## 📚 Inspiração

O projeto foi inspirado em um repositório acadêmico semelhante, porém esta versão foi desenvolvida com foco em:

* Simplicidade
* Clareza no código
* Facilidade de entendimento

---

## 🚀 Próximos Passos

* Implementar a lógica de escalonamento em JavaScript
* Criar animações simples em 2D
* Integrar totalmente HTML, CSS e JS
* Simular diferentes algoritmos futuramente

---

## ✍️ Autor

Eric Vinícius dos Santos OLiveira
Projeto desenvolvido para fins acadêmicos, com foco em aprendizado e prática de Sistemas Operacionais.

---

Se você está estudando escalonamento de processos, este jogo foi feito para ajudar você a **entender na prática** como tudo funciona.
