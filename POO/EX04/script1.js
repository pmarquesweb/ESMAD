//B
let myRefId = document.getElementById('p2');
console.log(myRefId);

//C
let myRefPara = document.querySelectorAll('p');
console.log(myRefPara);

//D
for (let i = 0; i < myRefPara.length; i++) {
    console.log(myRefPara[i]);
}

//E
let myRefRed = document.querySelectorAll('.red');
console.log(myRefRed);

//F
let myRefThree = document.querySelector('p#p3');
console.log(myRefThree);

//G
let myRefP = document.getElementsByTagName('p');
console.log(myRefP);

let myRefDiv = document.getElementsByTagName('div')
console.log(myRefDiv);

//H
let myRefSpan = document.getElementsByTagName('span');
for (let span of myRefSpan) {
    console.log(span.innerHTML)
}

//I
let myRefSpanText = document.querySelector('div span').innerHTML;
console.log(myRefSpanText);

//J
let myRefSpan2 = document.querySelector('body > span');
console.log(myRefSpan2.innerHTML);