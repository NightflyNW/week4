// script.js

function nomeatballs() {
    // grab all elements that have class of meatballs
    // remove identified elements
    let meatballs = document.getElementsByClassName('meatball');
    let parent = document.getElementById('sec1');
    for (let ball = 0; ball < meatballs.length; ball++){
        meatballs[ball].removeChild();
    }
}

let section1 = document.getElementById('sec1');
// let newPara = document.createElement('p');
// newPara.innerText = "I like pizza";
// section1.appendChild(newPara);

for (let i = 0; i < 10; i++) {
    let newPara = document.createElement('p');
    newPara.innerText = "I like pizza";
    newPara.className = 'meatball';
    section1.appendChild(newPara);
}









// let p = document.getElementsByTagName('ul');
// let sec1 = document.getElementById('sec1');
// let p = sec1.getElementsByTagName('p');
// let p = document.getElementById('sec1').getElementsByTagName('p');
// let p = document.getElementsByClassName('thing1');
// let p = document.querySelectorAll('.thing1');
// let p = document.querySelectorAll('.thing1');

// let p = document.getElementsByTagName('a');

// for (let index = 0; index < p.length; index++) {
//     p[index].className = 'meatball';
//     p[index].classList.remove('meatball');
//     p[index].setAttribute('data-bruce','pizza');
//     p[index].href = 'http://clark.edu';
//     let thing = p[index].href;
// }


// for (let index = 0; index < p.length; index++) {
//     // alert(p[index].innerHTML);
//     p[index].style.padding = '3em';
//     p[index].style.fontSize = '3em';
//     p[index].style.textAlign = '3em';
//     p[index].style.border = '5px solid black';
//     p[index].style.background= 'orange';

// }

