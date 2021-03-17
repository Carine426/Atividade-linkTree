'mode strict'
 
const links = {
    "nome": "Carine Mendes Ferreira",
    "img": "./imagem/OIP.jfif",
    "links": [
        {
            "titulo": "site pessoal",
            "url": "https://www.facebook.com/carine.ferreira.98622/"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/channel/UC4J0ivUwknEv16mswPeyweA"
        },
        {
            "titulo": "instagram",
            "url": "https://www.instagram.com/carineferreir/"
        }
    ]
}

const fiona = document.getElementById('fiona');
fiona.src = links.img;
 
const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;
 
const  site = document.getElementsByTagName('a')[0];
site.textContent = links.links[0].titulo;
site.href = links.links[0].url;
 
const  youtube = document.getElementsByTagName('a')[1];
youtube.textContent = links.links[1].titulo;
youtube.href = links.links[1].url;
 
const instagram = document.getElementsByTagName('a')[2];
instagram.textContent = links.links[2].titulo;
instagram.href = links.links[2].url;