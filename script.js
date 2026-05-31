document.addEventListener('DOMContentLoaded', () => {
    // Banco de Dados das Personas
    const personas = [
        {
            id: 1,
            nome: "Sofia (16 anos) - Refém do Infinite Scroll",
            padrao: "Passa 6 horas diárias no TikTok e Reels, principalmente à noite na cama com as luzes apagadas.",
            algoritmo: "Intercala vídeos confortáveis com polêmicos para reter a atenção indefinidamente, sem pontos de parada.",
            danos: [
                "Dopamina: Picos rápidos que causam apatia e desinteresse para estudos e leituras profundas.",
                "Sono: Luz azul inibe a produção de melatonina, gerando até 2 horas de insônia diária.",
                "Rotina: Procrastinação severa das atividades escolares e exaustão matinal."
            ],
            pergunta: "Qual é o principal mecanismo visual que o algoritmo usa para impedir que Sofia vá dormir?",
            opcoes: [
                "Notificações sonoras constantes durante a madrugada.",
                "O Scroll Infinito, que remove as pausas naturais de início e fim de um conteúdo.",
                "Sistemas de chat em grupo."
            ],
            respostaCorreta: 1
        },
        {
            id: 2,
            nome: "Carlos (34 anos) - Doomscroller Noturno",
            padrao: "Lê notícias ruins repetidamente de madrugada no X (Twitter) e em portais de notícias.",
            algoritmo: "Prioriza e sugere manchetes alarmistas e negativas, pois geram medo, indignação e maior tempo de tela.",
            danos: [
                "Dopamina e Cortisol: Mistura perigosa de estresse alto (cortisol) com busca por mais informações (dopamina).",
                "Sono: Insônia de manutenção (o cérebro entra em modo de sobrevivência e alerta e não relaxa).",
                "Rotina: Acorda exausto, depende de excesso de cafeína e apresenta irritabilidade crônica no trabalho."
            ],
            pergunta: "Qual fator psicológico explica por que os algoritmos entregam mais notícias negativas ao Carlos?",
            opcoes: [
                "Emoções negativas e ameaças tendem a prender a atenção do cérebro humano como mecanismo de sobrevivência.",
                "Algoritmos não sabem diferenciar notícias boas de ruins, é apenas um erro de código.",
                "O modo noturno da tela do celular dele atrai conteúdos com palavras negativas."
            ],
            respostaCorreta: 0
        },
        {
            id: 3,
            nome: "Lucas (21 anos) - Caçador de Recompensas",
            padrao: "Joga online até as 3h da manhã. Nunca para após uma derrota, tentando recuperar o 'ranking' perdido.",
            algoritmo: "Uso de 'reforço de razão variável' nos sistemas de partidas ranqueadas e caixas de recompensas.",
            danos: [
                "Dopamina: Totalmente desregulada pelo ciclo intenso de frustração (derrota) e euforia (vitória).",
                "Sono: O excesso de adrenalina no sangue mantém o corpo em alerta físico, mesmo após deitar.",
                "Rotina: Abandono de aulas da manhã e negligência com a alimentação (troca comida por lanches rápidos)."
            ],
            pergunta: "O sistema intermitente que mantém Lucas jogando sem parar utiliza a mesma base psicológica de qual destes itens?",
            opcoes: [
                "Aulas interativas e metodologias ativas.",
                "Máquinas caça-níqueis de cassinos (recompensa incerta/variável).",
                "Relógios despertadores."
            ],
            respostaCorreta: 1
        },
        {
            id: 4,
            nome: "Mariana (26 anos) - Escrava das Notificações",
            padrao: "O celular vibra ou apita dezenas de vezes por dia. Ela não consegue ficar 15 minutos sem checar a tela.",
            algoritmo: "O sistema retém as curtidas para entregá-las em 'lotes', simulando a sensação de popularidade e urgência.",
            danos: [
                "Dopamina: Condicionamento clássico acionado pelo som ou vibração do aparelho (antecipação da recompensa).",
                "Sono: Ansiedade extrema ao acordar. A primeira ação do dia é checar mensagens ainda com os olhos semicerrados.",
                "Rotina: Profunda fragmentação da atenção, reduzindo sua produtividade e capacidade de foco prolongado."
            ],
            pergunta: "A ansiedade e a necessidade de olhar o celular apenas por ouvir um 'bipe' está ligada a qual efeito?",
            opcoes: [
                "Condicionamento Pavloviano (associação direta de um estímulo sonoro a uma recompensa).",
                "Efeito Placebo Digital.",
                "Amnésia Digital."
            ],
            respostaCorreta: 0
        },
        {
            id: 5,
            nome: "Roberto (45 anos) - Vítima do Autoplay",
            padrao: "Senta no sofá exausto e assiste YouTube ou Streaming sem parar, muitas vezes sem escolher o que está passando.",
            algoritmo: "O Autoplay (reprodução automática) junto com recomendações precisas remove qualquer atrito de escolha.",
            danos: [
                "Dopamina: Liberação contínua e monótona, gerando um estado de 'transe', dormência emocional e alienação.",
                "Sono: Redução silenciosa das horas totais de sono simplesmente pela inércia de não conseguir desligar a tela.",
                "Rotina: Sedentarismo extremo e perda de interesse por hobbies que exigem esforço ativo (como ler)."
            ],
            pergunta: "Qual pequena mudança nas configurações das plataformas cortaria imediatamente o ciclo de Roberto?",
            opcoes: [
                "Aumentar o brilho e o contraste da TV.",
                "Desativar a reprodução automática (Autoplay), forçando-o a tomar uma decisão consciente a cada vídeo.",
                "Mudar a velocidade de reprodução dos vídeos para 2x."
            ],
            respostaCorreta: 1
        }
    ];

    let personaAtual = null;

    // Referências do DOM
    const screenSelection = document.getElementById('screen-selection');
    const screenAnalysis = document.getElementById('screen-analysis');
    const screenQuiz = document.getElementById('screen-quiz');
    const screenForm = document.getElementById('screen-form');
    const screenSuccess = document.getElementById('screen-success');
    
    // Funções de Troca de Tela
    function showScreen(screenElement) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screenElement.classList.add('active');
        window.scrollTo(0, 0); // Sobe a página ao trocar de tela
    }

    // Inicializar Grid Principal (Tela 1)
    const grid = document.getElementById('persona-grid');
    personas.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${p.nome.split('-')[0]}</h3><p>${p.nome.split('-')[1].trim()}</p>`;
        card.addEventListener('click', () => carregarAnalise(index));
        grid.appendChild(card);
    });

    // Inicializar Grid de Lembretes (Tela do Formulário)
    const reminderGrid = document.getElementById('reminder-grid');
    personas.forEach(p => {
        const miniCard = document.createElement('div');
        miniCard.className = 'mini-card';
        const nomeCurto = p.nome.split('-')[0].trim();
        const titulo = p.nome.split('-')[1].trim();
        miniCard.innerHTML = `
            <h4>${nomeCurto}</h4>
            <p class="titulo">${titulo}</p>
            <p class="desc">${p.padrao}</p>
        `;
        reminderGrid.appendChild(miniCard);
    });

    // Carregar Análise
    function carregarAnalise(index) {
        personaAtual = personas[index];
        
        document.getElementById('analise-nome').innerText = personaAtual.nome;
        document.getElementById('analise-padrao').innerText = personaAtual.padrao;
        document.getElementById('analise-algoritmo').innerText = personaAtual.algoritmo;
        
        const ulDanos = document.getElementById('analise-maleficios');
        ulDanos.innerHTML = '';
        personaAtual.danos.forEach(dano => {
            const li = document.createElement('li');
            li.innerText = dano;
            ulDanos.appendChild(li);
        });

        showScreen(screenAnalysis);
    }

    // Iniciar Quiz
    document.getElementById('btn-iniciar-quiz').addEventListener('click', () => {
        document.getElementById('pergunta-texto').innerText = personaAtual.pergunta;
        
        const feedback = document.getElementById('feedback');
        feedback.innerText = '';
        feedback.style.color = 'inherit';
        
        document.getElementById('btn-voltar-fim').classList.add('hidden');
        document.getElementById('btn-ir-form').classList.add('hidden');
        
        const container = document.getElementById('opcoes-container');
        container.innerHTML = '';
        
        personaAtual.opcoes.forEach((opcao, index) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.innerText = opcao;
            btn.addEventListener('click', () => verificarResposta(index, btn));
            container.appendChild(btn);
        });

        showScreen(screenQuiz);
    });

    // Verificar Resposta
    function verificarResposta(indexEscolhido, botao) {
        const botoes = document.querySelectorAll('.quiz-option');
        botoes.forEach(b => b.disabled = true);

        const feedback = document.getElementById('feedback');

        if (indexEscolhido === personaAtual.respostaCorreta) {
            botao.classList.add('correct');
            feedback.innerText = "✅ Resposta Correta! Você identificou a raiz do problema.";
            feedback.style.color = "var(--success)";
        } else {
            botao.classList.add('wrong');
            botoes[personaAtual.respostaCorreta].classList.add('correct');
            feedback.innerText = "❌ Incorreto. A resposta destacada em verde mostra como o algoritmo realmente age.";
            feedback.style.color = "var(--danger)";
        }
        
        // Exibe os botões finais
        document.getElementById('btn-voltar-fim').classList.remove('hidden');
        document.getElementById('btn-ir-form').classList.remove('hidden');
    }

    // Navegação dos Botões Base
    document.getElementById('btn-voltar-analise').addEventListener('click', () => showScreen(screenSelection));
    document.getElementById('btn-voltar-fim').addEventListener('click', () => showScreen(screenSelection));
    document.getElementById('btn-ir-form').addEventListener('click', () => showScreen(screenForm));
    document.getElementById('btn-voltar-do-form').addEventListener('click', () => showScreen(screenQuiz));
    document.getElementById('btn-reiniciar-tudo').addEventListener('click', () => showScreen(screenSelection));

    // Lógica Assíncrona de Envio do Formulário (Evita sair da página)
    const form = document.getElementById('my-form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Impede o redirecionamento padrão do HTML

        const submitBtn = document.getElementById('btn-submit-form');
        const originalText = submitBtn.innerHTML;
        
        // Feedback visual de carregamento
        submitBtn.innerHTML = 'Enviando... ⏳';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset(); // Limpa os campos
                showScreen(screenSuccess); // Abre a tela com os links finais
            } else {
                alert('Houve um problema ao enviar o formulário. Tente novamente.');
            }
        } catch (error) {
            alert('Erro de conexão. Verifique sua internet.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
});
