document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addParagrafoBtn");
    var paragrafoContainer = document.getElementById("paragrafoContainer");
    var paragrafoCount = 0;

    addButton.addEventListener("click", function() {
        paragrafoCount++;
        var novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = "Parágrafo " + paragrafoCount;
        novoParagrafo.classList.add(getRandomStyle()); // Adiciona uma classe de estilo aleatória
        paragrafoContainer.appendChild(novoParagrafo);
    });

    // Função para obter um estilo aleatório
    function getRandomStyle() {
        var styles = ["paragraph-style1", "paragraph-style2", "paragraph-style3"];
        return styles[Math.floor(Math.random() * styles.length)];
    }
});
