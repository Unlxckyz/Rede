const textoDigitado = document.getElementById('text');
const btnPostar = document.getElementById('btn-postar');
const tweetsContainer = document.getElementById('tweets-container');
const addSound = new Audio('../sounds/add.mp3')
function publicaTweet() {
    let texto = textoDigitado.value.trim();;
    if(texto === ""){
        return;
    }
    
    

    // Cria um elemento span para o texto do tweet
    let tweetTexto = document.createElement('p');
    tweetTexto.textContent = texto;
    
    let usuario = document.createElement('span');
    usuario.innerHTML = `Unlucky
    <span id="verificado" class="material-symbols-outlined">bolt</span><br><p id="aroba">@Unlucky<p>`;
    let profile = document.createElement('div');
    
   
    // Cria um elemento img para a imagem do usuário
    let imagemUsario = document.createElement('img');
    imagemUsario.src = './logo.jpg'; // Imagem de usuário fictícia
    imagemUsario.classList.add('logo-tweet')
    imagemUsario.alt = 'Imagem do usuário';
    imagemUsario.classList.add('imagem-usuario'); // Classe CSS para a imagem

    // Cria um elemento div para envolver o tweet
    let divTweets = document.createElement('div');
    divTweets.classList.add('all-tweet'); // Classe CSS para a div do tweet

    // Adiciona a imagem e o texto do tweet à div
   profile.appendChild(usuario);
   profile.appendChild(imagemUsario)
   divTweets.appendChild(profile);
   profile.classList.add('profile-portrait')
    
    divTweets.appendChild(tweetTexto);
    
    divTweets.classList.add('divTweets')
    

    // Adiciona a divTweets ao contêiner de tweets
    tweetsContainer.appendChild(divTweets);
    tweetTexto.classList.add('tweets')
    usuario.classList.add('tweets');

    // Limpa o campo de texto após postar
    textoDigitado.value = '';
    addSound.play();

}

let mouseNoBotao = false;
btnPostar.addEventListener('mouseenter',function(){
    mouseNoBotao = true;
})
btnPostar.addEventListener('mouseleave',function(){
    mouseNoBotao = false;
})
document.addEventListener('keydown', function (event) {
    if (event.key === "Enter" && mouseNoBotao) {
        publicaTweet();
    }
})
btnPostar.addEventListener('click', publicaTweet);


