document.addEventListener('DOMContentLoaded', function(){
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split("");
  
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/|s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
  //trim = spaceを開けないため！
  // let concatStr = '';
  // for(let c of str) {
  //   c = c.replace(' ', '&nbsp;');
  //   //正規表現　= /|s+/ = ' ' = space
  //     concatStr += `<span class="char">${c}</span>`;
  // }
  // el.innerHTML = concatStr;
});