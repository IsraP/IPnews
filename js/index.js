Bloco_Onload: {
    onload = () => {
        requestData();
    }
}

Funções: {
    function dateFormat(date) {
        let ano = date.slice(0, 4);
        let mes = date.slice(5, 7);
        let dia = date.slice(8, 10);
        return `${dia}/${mes}/${ano}`;
    }

    
    function requestData() {
        console.log("RequestData ---")
        const Key = "8e6ca302e24947d1be592b5fbfe2295d"
        let xhr = new XMLHttpRequest;
        xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=br&apiKey=${Key}`)
        xhr.send();
        xhr.onload = showData;
    }

    function showData() {
    console.log("ShowData ---")
        let noticia = JSON.parse(this.responseText).articles;

        Bloco_Carrossel: {
            let div = document.getElementsByClassName("carroItem");
            for(i = 0; i < div.length; i++){
                let texto = "";
                texto = `<img
                src="${noticia[i].urlToImage}"
                class="d-block img-fluid w-100" alt="no" >
              <div class="carousel-caption d-none d-md-block ">
                <h5>${noticia[i].title}</h5>
                <a href="${noticia[i].url}" target="_blank">Read more -></a>`;
                div[i].innerHTML = texto;
            }  
        }

        Bloco_Destaques: {
            let div = document.getElementsByClassName("destaqueid");
            let img = document.getElementsByClassName("destaqueimg");
            for (i = 0; i < div.length; i++) {
                let texto = "";
                texto = `
            <p class='fontexclusive text-light mt-5 pt-4'><i>Updated ${dateFormat(noticia[i + 3].publishedAt)}<br></i></p>
            <h5 class="text-light">${noticia[i + 3].title}</h5>
            <p class="text-light text-justify">${noticia[i + 3].description}
            </p>
            <a href="${noticia[i + 3].url}" target="_blank">Continue lendo -></a>
            `;
                div[i].innerHTML = texto;
            }
            for (i = 0; i < img.length; i++) {
                let conteudo = "";
                conteudo = `
            <img
                  src="${noticia[i + 3].urlToImage}"
                  class="eximg img-responsive align-self-start mb-5 border rounded border-secondary kawhi"
                   >
            `;
                img[i].innerHTML = conteudo;
            }
        }

        Bloco_Noticias: {
            let div = document.getElementsByClassName("noticiaNews");
            console.log(div);
            for (i = 0; i < div.length; i++){
                let texto = "";
                texto = `
                <p class="text-light"><small>${dateFormat(noticia[i + 5].publishedAt)}</small></p>
                <h5 class="text-light">${noticia[i + 5].title}</h5>
                <img src="${noticia[i + 5].urlToImage}" class="img-fluid">
                <p class="text-light pt-3">${noticia[i + 5].description}
                  <a href="${noticia[i + 5].urlToImage}" target="_blank"><br>Continue lendo -></a>
                </p>
                `
                div[i].innerHTML = texto;
            }
        }

    }
}