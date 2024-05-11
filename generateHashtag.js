// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

export  function generateHashtag(str) {
    let temp = 0
  return (
    [...str].map(el=> {
        if(el===" ") temp = 1
        if(temp===1) {
            temp = 0
            return el.toUpperCase()}
        else return el===" " ? "" : el
    }).join('')
  )
}
