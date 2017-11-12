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

    criarMensagem({
        enviador: 'usuario',
        mensagem: ev.target.value
    });
    
    var client = new XMLHttpRequest();
    client.open("GET", "http://9.232.16.79:8081/api", true);
    client.setRequestHeader("Content-type", "application/json");
    client.setRequestHeader("TextoUsuario", ev.target.value);
    client.send();

    ev.target.value = '';

    client.onreadystatechange = function() {
        if (client.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(client.responseText);
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