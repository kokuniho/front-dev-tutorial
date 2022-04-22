const arry = [1,2,3,4,5,6, 'moji', false];
arry.unshift( 'new item' );
//一番最初に入り込む
const val1 = arry.pop();
//一番最後の文字列を削除
const val2 = arry.shift();
//一番最初の文字列を削除
console.log(val2);
console.log(arry);
