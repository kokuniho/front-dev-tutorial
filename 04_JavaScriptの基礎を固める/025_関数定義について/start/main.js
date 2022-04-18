const hello = function (name, age){
  // 無名関数（function以下）
  console.log('hello' + name + age);
  //戻り値
  return name + age;
}
//１.関数（hello）を定義する 2.変数（name）に引数を挿入
hello('code mafia', 10);
const returnVal = hello('code m 2', 20);
console.log(returnVal);

