window.onload = async () => {
    let res = await fetch('https://ok.surf/api/v1/cors/news-feed');
    res = await res.json();
    console.log(res);

    const container = document.getElementById('container');

    for (let i = 0; i < 10; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        let title = document.createElement('h1');
        title.textContent=JSON.stringify(res.Sports[i].title);
        card.appendChild(title);

        let img = document.createElement('div');
        let src = JSON.stringify(res.Sports[i].og);
        img.innerHTML = `<img src=${src}>`;
        card.appendChild(img);

        let btnWrap = document.createElement('div');
        btnWrap.classList.add('btnwrap');
        btnWrap.innerHTML = `<button class="more"><a href=${res.Sports[i].link}>More</a></button>`;
        card.appendChild(btnWrap);

        let source = document.createElement('p');
        source.innerHTML = `Source: ${res.Sports[i].source}`;
        card.appendChild(source);
    }

}

