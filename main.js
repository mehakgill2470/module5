function initMap() {

    let college = {
        lat: 44.4121016,
        lng: -79.6667645
    };

    let house = {
        lat: 44.3909634,
        lng: -79.6792909
    };

    let div = document.querySelector('div');

    let map = new google.maps.Map(div, {
        zoom: 14,
        house: house
    });

    var marker2 = new google.maps.Marker({
        position: college,
        map: map,
        title: 'College!'
    });

    var marker2 = new google.maps.Marker({
        position: house,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: 'House!'
    });


}

fetch('https://mehakgill2470.github.io/module4/main.json')
.then((resp) => resp.json())
.then(function(data) {
let keepProduct = data;
putProducts(keepProduct);

});

function putProducts(jsonObj) {
    let putProducts = jsonObj.putProducts;
    for (let i = 0; i < putProducts.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let list = document.createElement('ul');
        let hr = document.createElement('hr');
        let br = document.createElement('br');
        let section = document.querySelector('section');
        img.setAttribute('src', 'https://mehakgill2470.github.io/module4/img/' + putProducts[i].image);
        img.setAttribute('alt', putProducts[i].name);
        img.setAttribute('height', '400px');
        img.setAttribute('width', '400px');
        h2.textContent = putProducts[i].name;
        p.textContent = 'Price: ' +
            putProducts[i].price;
        let uses = putProducts[i].uses;
        for (let j = 0; j < uses.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = uses[j];
            list.appendChild(listItem);
        }
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(list);
        article.appendChild(hr);
        article.appendChild(br);
        section.appendChild(article);
    }
}

