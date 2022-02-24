let div = document.createElement('div');
let textNode = document.createTextNode('Анекдот');
document.body.append(div);
div.append(textNode);
div.classList.add('goose');
let goose = document.querySelector('.goose');
goose.style.margin = "50px";
let textmaen = document.createElement('div');
let textaen = document.createTextNode('появился в зоне черный сталкер');
document.body.append(textmaen);
textmaen.append(textaen)
 
let horse = document.createElement ('ol');
let textNode2 = document.createTextNode('Черный сталкер');
let pipka = document.createElement('li');
document.body.append(horse);
horse.append(pipka);
pipka.append(textNode2);
let text = document.createTextNode('Лолик');
let kirka = document.createElement('li');
horse.append(kirka);
kirka.append(text);
