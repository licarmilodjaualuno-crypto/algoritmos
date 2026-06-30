// LISTA DE PROJETOS E ENTREGAS - ADICIONE MAIS AQUI QUANDO QUISER
const meusProjetos = [
    {
        id: 1,
        titulo: "Atividade 1: Conceitos de Algoritmos e Lógica",
        objetivo: "Compreender os fundamentos da lógica de programação, a construção de fluxogramas e a escrita de pseudocódigos estruturados.",
        tecnologias: ["Lógica", "Pseudocódigo", "Fluxograma"],
        resultados: "Absorção dos conceitos de variáveis, constantes e operadores matemáticos para resolução de problemas sequenciais simples.",
        linkGithub: "https://github.com/licarmilodjaualuno-crypto/algoritmos",
        linkVisualizacao: "https://licarmilodjaualuno-crypto.github.io/algoritmos/"
    },
    {
        id: 2,
        titulo: "Atividade 2: Estruturas Condicionais (Se / Senão)",
        objetivo: "Aplicar desvios condicionais simples e compostos para tomada de decisões lógicas nos algoritmos.",
        tecnologias: ["Python", "JavaScript", "Condicionais"],
        resultados: "Desenvolvimento de um sistema de validação de dados capaz de direcionar fluxos diferentes baseado na entrada do usuário.",
        linkGithub: "https://github.com/licarmilodjaualuno-crypto/algoritmos",
        linkVisualizacao: "https://licarmilodjaualuno-crypto.github.io/algoritmos/"
    },
    {
        id: 3,
        titulo: "Atividade 3: Estruturas de Repetição e Vetores",
        objetivo: "Implementar laços de repetição (Para / Enquanto) combinados com arrays/vetores para manipulação de listas de dados.",
        tecnologias: ["Python", "Arrays", "Laços de Repetição"],
        resultados: "Otimização de códigos repetitivos, permitindo a leitura e o processamento de múltiplos dados de forma automatizada e eficiente.",
        linkGithub: "https://github.com/licarmilodjaualuno-crypto/algoritmos",
        linkVisualizacao: "https://licarmilodjaualuno-crypto.github.io/algoritmos/"
    }
];

const gridProjetos = document.getElementById("projects-grid");
const modal = document.getElementById("project-modal");
const btnFecharModal = document.getElementById("close-modal-btn");
const modalTitulo = document.getElementById("modal-project-title");
const modalObjetivo = document.getElementById("modal-project-objective");
const modalResultados = document.getElementById("modal-project-results");

function renderizarProjetos() {
    if(!gridProjetos) return;
    gridProjetos.innerHTML = "";
    meusProjetos.forEach(projeto => {
        const tagsHTML = projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join("");
        const cardHTML = `
            <div class="project-card">
                <div>
                    <h3>${projeto.titulo}</h3>
                    <div class="project-tags">${tagsHTML}</div>
                </div>
                <div class="project-actions">
                    <button class="btn-primary" onclick="abrirDetalhes(${projeto.id})">
                        <i class="fas fa-plus"></i> Ver Detalhes
                    </button>
                    <a href="${projeto.linkGithub}" target="_blank" class="btn-secondary">
                        <i class="fab fa-github"></i> Código
                    </a>
                </div>
            </div>
        `;
        gridProjetos.innerHTML += cardHTML;
    });
}

function abrirDetalhes(id) {
    const projetoSelecionado = meusProjetos.find(p => p.id === id);
    if (projetoSelecionado) {
        modalTitulo.textContent = projetoSelecionado.titulo;
        modalObjetivo.textContent = projetoSelecionado.objetivo;
        modalResultados.textContent = projetoSelecionado.resultados;
        modal.classList.add("active");
    }
}

btnFecharModal.addEventListener("click", () => modal.classList.remove("active"));
window.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("active"); });

renderizarProjetos();
