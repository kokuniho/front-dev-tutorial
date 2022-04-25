const arry = [1,2,3,4,5];

arry.reduce(function(accu, curr){
    console.log(accu, curr);
    return accu + curr;
}
,10);

//currには配列の値が渡ってくる。

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  return `${accu}<${curr}>`;
}, "")

//return `${accu}<${curr}>`; 変数は波括弧でかこう。文字列（＜＞）はそのまま。足し算の場合。

console.log(result);