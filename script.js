/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a,b){
    this.a=a
    this.b=b
}
Calculator.prototype.sum =function(){
    console.log(`suma = ${this.a+this.b}`)
    return this.a+this.b
}
Calculator.prototype.subtraction =function(){
    console.log(`atimtis = ${this.a-this.b}`)
    return this.a-this.b
}
Calculator.prototype.multiplication =function(){
    console.log(`daugyba = ${this.a*this.b}`)
    return this.a*this.b
}
Calculator.prototype.division =function(){
    console.log(`dalyba = ${this.a/this.b}`)
    return this.a/this.b
}

var skaiciai = new Calculator(10,5)

console.log(skaiciai.sum(),
skaiciai.subtraction(),
skaiciai.multiplication(),
skaiciai.division())