const btn = document.querySelector('#btn');
const h1  = document.querySelector('h1');

function changeColor(){
  h1.style.color = 'red';
};
function changeBgColor(){
  h1.style.backgroundColor = 'green';
};
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);

// btn.removeEventListener('click', changeBgColor);
//addEventListenerは複数の関数を定義できる！

// btn.onclick = changeColor;
//複数はできないので、後から記述されたものに上書きされてしまう。（イベントハンドラ）