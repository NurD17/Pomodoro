const input = document.querySelector('.description');
const text = document.querySelector('.text');
const btn = document.querySelector('button');

function innerText(){
btn.addEventListener('click', ()  =>{
    text.innerHTML += input.value;
})
}
innerText();
