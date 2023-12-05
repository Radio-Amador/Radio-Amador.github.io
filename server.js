// Obtém o elemento de áudio
var audioPlayer = document.getElementById('audioPlayer');
// Adicione ao seu arquivo script.js
function openPopup(title, content, imageUrl) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerText = content;
    document.getElementById('popup-image').src = imageUrl;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


// // Adiciona um evento de clique para pausar/play ao clicar no player
// audioPlayer.addEventListener('click', function () {
//     if (audioPlayer.paused) {
//         audioPlayer.play();
//     } else {
//         audioPlayer.pause();
//     }
// });
function enviarPedido() {
    // Obtenha os valores dos campos do formulário
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pedidoDeMusica = document.getElementById('songRequest').value;

    // Configuração do objeto de dados a ser enviado
    var data = {
        service_id: 'service_fjvrpto',
        template_id: 'template_2q1ff81',
        user_id: 'SXxsgzElBJ6047-b1',  // Chave pública
        template_params: {
            'nome': nome,
            'email': email,
            'pedidoDeMusica': pedidoDeMusica
        }
    };

    // Envie os dados usando o EmailJS
    emailjs.send(data.service_id, data.template_id, data.template_params, data.user_id)
        .then(function (response) {
            console.log('Pedido enviado com sucesso!', response);
            // Limpe o formulário após o envio
            document.getElementById('musicRequestForm').reset();
        }, function (error) {
            console.log('Erro ao enviar o pedido', error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector('.auto-pulse');
    button.classList.add('pulse-animation');
});

function toggleFormVisibility() {
    var formContainer = document.getElementById('musicRequestFormContainer');
    var h2Element = document.querySelector('.auto-pulse h2');

    // Alternar a visibilidade do formulário
    formContainer.style.display = (formContainer.style.display === 'none' || formContainer.style.display === '') ? 'block' : 'none';

    // Alternar a visibilidade do elemento h2
    h2Element.style.display = (formContainer.style.display === 'none') ? 'block' : 'none';
}

