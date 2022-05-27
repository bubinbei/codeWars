function findNextSquare(sq) {
  //излечение корня
  sq = Math.sqrt(sq)
  //проверка на дробность
  if(Number.isInteger(sq)){
    //если число оказалось целым, возвращается квадрат следующего числа
    return (sq+1)*(sq+1);
  }
  // иначе возвращается -1
  return -1;
}
