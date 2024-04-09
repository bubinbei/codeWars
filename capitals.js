// Find the capitals
// 'CodEWaRs' => [0, 3, 4, 6]

var capitals = word => [...word].map((el,i)=>(el===el.toUpperCase())?i:undefined).filter(el=>el!==undefined)