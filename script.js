// Definindo os pontos da nova história
const story = [
  {
    text: "Você é um jovem aventureiro em busca do lendário Cristal de Luminor. Seu caminho começa em uma pequena aldeia.",
    options: [
      { text: "Perguntar ao ancião sobre a localização do cristal", next: 1 },
      { text: "Partir sozinho pela floresta", next: 2 }
    ]
  },
  {
    text: "O ancião lhe diz que o Cristal de Luminor está escondido nas Montanhas Sombras, mas é guardado por uma fera feroz. O que você faz?",
    options: [
      { text: "Aceitar a missão e ir para as Montanhas Sombras", next: 3 },
      { text: "Desistir e voltar para a aldeia", next: 4 }
    ]
  },
  {
    text: "Você decide seguir sozinho pela floresta. Após um longo dia de caminhada, você encontra uma clareira com uma cabana.",
    options: [
      { text: "Entrar na cabana em busca de ajuda", next: 5 },
      { text: "Acampar na floresta e esperar o amanhecer", next: 6 }
    ]
  },
  {
    text: "Nas Montanhas Sombras, você se depara com a fera: um dragão enorme. Ele olha nos seus olhos, esperando sua decisão.",
    options: [
      { text: "Enfrentar o dragão com coragem", next: 7 },
      { text: "Tentar negociar com o dragão", next: 8 }
    ]
  },
  {
    text: "Você volta para a aldeia, onde encontra segurança, mas seu sonho de encontrar o cristal se desfaz. Fim da jornada.",
    options: []
  },
  {
    text: "Dentro da cabana, você encontra uma velha maga que lhe oferece um feitiço para localizar o Cristal de Luminor. Você aceita?",
    options: [
      { text: "Aceitar o feitiço da maga", next: 9 },
      { text: "Recusar e continuar sua jornada sozinho", next: 10 }
    ]
  },
  {
    text: "Você acampa na floresta e, durante a noite, é atacado por um bando de lobos. Você luta, mas infelizmente não sobrevive. Fim da jornada.",
    options: []
  },
  {
    text: "Você enfrenta o dragão com bravura, mas a batalha é difícil. No final, o dragão te respeita e te deixa passar. Você consegue alcançar o Cristal de Luminor. Parabéns, você venceu!",
    options: []
  },
  {
    text: "Você tenta negociar com o dragão, oferecendo tesouros, mas ele recusa e te expulsa da montanha. Sua jornada termina aqui.",
    options: []
  },
  {
    text: "A maga lança o feitiço e você localiza o Cristal de Luminor. No entanto, ao tocar o cristal, uma maldição é liberada, e você cai em um sono eterno. Fim da jornada.",
    options: []
  },
  {
    text: "Você continua sua jornada sozinho, mas sem a ajuda da maga, acaba se perdendo e nunca encontra o Cristal de Luminor. Fim da jornada.",
    options: []
  }
];

let currentStep = 0; // Começamos na primeira etapa da história

// Função para exibir a história e as opções
function displayStory() {
  const storyText = document.getElementById('story');
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const restartButton = document.getElementById('restart-button');

  // Exibe o texto da história
  storyText.innerHTML = story[currentStep].text;

  // Exibe as opções se houver
  if (story[currentStep].options.length > 0) {
    button1.style.display = 'inline-block';
    button2.style.display = 'inline-block';
    restartButton.style.display = 'none'; // Esconde o botão de reiniciar

    button1.innerHTML = story[currentStep].options[0].text;
    button2.innerHTML = story[currentStep].options[1].text;

    // Define as ações para os botões
    button1.onclick = () => {
      currentStep = story[currentStep].options[0].next;
      displayStory();
    };
    button2.onclick = () => {
      currentStep = story[currentStep].options[1].next;
      displayStory();
    };
  } else {
    // Se não houver opções, desativa os botões
    button1.style.display = 'none';
    button2.style.display = 'none';

    // Exibe o botão de reiniciar
    restartButton.style.display = 'inline-block';

    // Ação para o botão de reinício
    restartButton.onclick = () => {
      currentStep = 0;  // Volta ao início
      displayStory();
    };
  }
}

// Inicializa a história ao carregar a página
displayStory();

