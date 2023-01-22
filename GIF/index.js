let gifContent = "";
fetch(`https://api.giphy.com/v1/gifs/search?api_key=xvwoI1mfFUGtXvrR43V2axGvFuciGtrL&q=cats&limit=5&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(gifs =>  {
        for (let i=0; i<gifs.data.length; i++) {
        gifContent += ` <div class="card"> 
        <img class="img" src="${gifs.data[i].images.downsized.url}">
        </div>`;
    }
        document.querySelector('.gallery').innerHTML = gifContent;
    })
    .catch(err => console.log(err))