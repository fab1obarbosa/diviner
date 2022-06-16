const elementoResposta = document.querySelector('#answer')

const elementoPergunta = document.querySelector('#question')

const questionButton = document.querySelector('#questionButton')

const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// Fazer pergunta

function fazerPergunta() {
  if (elementoPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  const pergunta = '<div>' + elementoPergunta.value + '</div>'

  //Gerar um número aleatório

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  //Desaparecer com a resposta depois de 3 segundos

  setTimeout(function () {
    elementoResposta.style.opacity = 0
    questionButton.removeAttribute('disabled')
  }, 3000)
}
