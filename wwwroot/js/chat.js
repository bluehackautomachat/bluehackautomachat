var mensagens = [
    {
        mensagem: "Por favor, Mostre para a câmera algum documento com foto",
        enviador: "bot"
    }, {
        mensagem: "o documento do usuário",
        enviador: "usuario"
    }, {
        mensagem: "Ótimo, Thiago. Agora preciso confirmar sua carteira de convênio e seu código de cliente, mande uma foto por favor?",
        enviador: "bot"
    }, {
        mensagem: "A foto do usuário",
        enviador: "usuario"
    }, {
        mensagem: "Bom Thiago muito obrigado pela confirmação dirija-se ao 3º andar sala 15. Obrigado pela preferência",
        enviador: "bot"
    }
];

mensagens.forEach(criarMensagem);

function criarMensagem(item) {
    var mensagem = document.createElement("div");
    mensagem.classList = "mensagem mensagem-" + item.enviador;

    var imagem = document.createElement("img");
    imagem.src = "img/" + item.enviador + ".jpeg";
    mensagem.appendChild(imagem);

    var balao = document.createElement("div");
    balao.className = "balao";
    balao.innerHTML = item.mensagem;
    mensagem.appendChild(balao)

    document.querySelector(".mensagens").appendChild(mensagem);
}

document.getElementById('inputUsuario').addEventListener('change', function(ev) {
    var client = new XMLHttpRequest();
    client.open("GET", "http://9.232.16.79:8081/api", true);
    client.setRequestHeader("Content-type", "application/json");
    client.setRequestHeader("TextoUsuario", ev.target.value);
    client.send();

    client.onreadystatechange = function() {
        if (client.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(client.responseText);
            console.log(response);
            console.log(response.message);
            if(response.success != false) {
                criarMensagem({
                    enviador: 'bot',
                    mensagem: response.message
                });
            } else {
                alert('Deu ruim');
            }
        }
    }

});
