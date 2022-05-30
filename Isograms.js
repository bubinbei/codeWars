//поиск повторяющихся символов в строке
function isIsogram(str){
  //приведение всех символов к нижнему регистру
  str = str.toLowerCase()
  const data = {}
  let sum = 0
  //если в обекте нет ключа с данным символом, добавляется с значением 1
  // если ключ есть, +1
  for(let i=0 ; i < str.length ; i++){
    data[str[i]] ? data[str[i]] += 1 : data[str[i]] = 1
  }
  //сколько ключей со значением более 1
  for (key in data) {
    data[key] > 1 ? sum++ : 0
  }
  return sum < 1
}
