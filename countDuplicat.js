//поиск повторяющихся символов в строке
function duplicateCount(text){
  //приведение всех символов к нижнему регистру
  text = text.toLowerCase()

  const data = {}
  let sum = 0
  //если в обекте нет ключа с данным символом, добавляется с значением 1
  // если ключ есть, +1
  for(let i=0 ; i < text.length ; i++){
    data[text[i]] ? data[text[i]] += 1 : data[text[i]] = 1
  }
  //сколько ключей со значением более 1
  for (key in data) {
    data[key] > 1 ? sum++ : 0
}
  return sum
}
