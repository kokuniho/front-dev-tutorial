const arry = [1,2,3,4,5];
arry.forEach(function(v, i, ary){
  console.log(v, i, ary);
})

//簡略化
// arry.forEach(v => console.log(v));
//記述が簡単なためfor文よりもforEach文の方が良い！！

//v :値　i :添字　ary :配列
