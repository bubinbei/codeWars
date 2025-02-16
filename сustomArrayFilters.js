Array.prototype.even = function(){
    // четный
    return this.filter( e=> Number.isInteger(e) && e%2===0 )
}

  Array.prototype.odd = function(){
    // нечетный
    return this.filter( e=> Number.isInteger(e) && e%2!==0 )
  }
  
  Array.prototype.under = function(x){
    // до, ниже(х)
    return this.filter( e=> Number.isInteger(e) && e<x )
  }
  
  Array.prototype.over = function(x){
    // от, свыше(х)
    return this.filter( e=> Number.isInteger(e) && e>x )
  }
  
  Array.prototype.inRange = function(min,max){
    // в диапазоне включительно (min,max)
    return this.filter( e => Number.isInteger(e) && e >= min && e <= max );
  }

