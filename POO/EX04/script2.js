//b. Altere o texto do parágrafo com id "p1" para "Está um dia de chuva"
document.getElementById('p1').innerHTML = "Está um dia de chuva";

//c. Altere a imagem existente para uma outra com o seguinte endereço:                     
// https://www.altominho.tv/site/wp-content/uploads/2019/02/chuva.jpg
document.querySelector('img').src = 'https://www.altominho.tv/site/wp-content/uploads/2019/02/chuva.jpg';

//d. Altere a cor de fundo do segundo parágrafo para amarelo
let para = document.querySelector('#p2');
para.style.backgroundColor = 'yellow';