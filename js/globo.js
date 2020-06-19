onload = () => {
    btnGlobo.onclick = (evento) => {
        console.log("HELP")
        const Key = "8e6ca302e24947d1be592b5fbfe2295d"
        let query = pesquisa.value;
        let requestGlobo = new XMLHttpRequest()

        requestGlobo.onload = showNews;
        requestGlobo.open("GET", `https://newsapi.org/v2/everything?apiKey=${Key}&sources=Globo&q=${query}`)
        requestGlobo.send();
        evento.preventDefault;
    }

    btnBBC.onclick = (evento) => {
        console.log("HELP")
        const Key = "8e6ca302e24947d1be592b5fbfe2295d"
        let query = pesquisa.value;
        let requestBBC = new XMLHttpRequest()

        requestBBC.onload = showNews;
        requestBBC.open("GET", `https://newsapi.org/v2/everything?apiKey=${Key}&sources=bbc-news&q=${query}`)
        requestBBC.send();
        evento.preventDefault;
    }

    btnCNN.onclick = (evento) => {
        console.log("HELP")
        const Key = "8e6ca302e24947d1be592b5fbfe2295d"
        let query = pesquisa.value;
        let requestCNN = new XMLHttpRequest()

        requestCNN.onload = showNews;
        requestCNN.open("GET", `https://newsapi.org/v2/everything?apiKey=${Key}&sources=cnn&q=${query}`)
        requestCNN.send();
        evento.preventDefault;
    }

    btnNYT.onclick = (evento) => {
        console.log("HELP")
        const Key = "8e6ca302e24947d1be592b5fbfe2295d"
        let query = pesquisa.value;
        let requestCNN = new XMLHttpRequest()

        requestCNN.onload = showNews;
        requestCNN.open("GET", `https://newsapi.org/v2/everything?apiKey=${Key}&sources=the-washington-post&q=${query}`)
        requestCNN.send();
        evento.preventDefault;
    }
}

function showNews() {
    dados = JSON.parse(this.responseText).articles;
    div = document.getElementById("newsContainer");
    console.log(dados)
    let texto = ""
    for (i = 0; i < dados.length; i++) {
        texto += `
        <div class="boxNoticia my-2">
            <div class="row">
                <div class="col-4">
                    <img src="${dados[i].urlToImage}" class="img-fluid rounded">
                </div>
                <div class="col-8">
                    <h3 class="text-light">${dados[i].title}</h3>
                    <p class="text-light">${dados[i].description}<br>
                        <a href="${dados[i].url}"></a>
                    </p>
                </div>
            </div>
        </div>
                `
    }
    div.innerHTML = texto;
}