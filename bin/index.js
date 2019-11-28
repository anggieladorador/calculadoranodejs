#!/usr/bin/env node

'use strict'

const yargs = require("yargs")
const math = require("./math")
const options = yargs
  .usage("Usage -a <addition> -s <substraction> ")
  .option("a", {
      alias: "add",
      describe: "addition between  num1 y num2"
  })
  .option("s",{
      alias: "substract",
      describe:"substraction between  num1 y num2"
  })
  .option("m",{
      alias:"multiply",
      describe:"multiplies between  num1 y num2"
  })
  .option("d",{
      alias:"divide",
      describe:"divides between  num1 y num2"
  })
  .argv

  let params = yargs.argv
if(options.add){
    console.log(yargs.argv)
    if(params.num1 && params.num2){
        if(isNaN(params.num1) || isNaN(params.num2)){
            console.log("por favor ingrese sólo numeros")
        }else{
            var n1 = parseInt(params.num1)
            var n2 = parseInt(params.num2)
            console.log(math.add(n1, n2))
            
        }
    }else{
        
        console.log(`no hay nada qué sumar `)
    }
}
else if(options.substract){
    
    if(params.num1 && params.num2){
        if(isNaN(params.num1) || isNaN(params.num2)){
            console.log("por favor ingrese sólo numeros")
        }else{
            var n1 = parseInt(params.num1)
            var n2 = parseInt(params.num2)
            console.log(math.subs(n1, n2))
            
        }
    }else{
        console.log(`no hay nada qué restar `)
    }
}
else if(options.multiply){
    if(params.num1 && params.num2){
        if(isNaN(params.num1) || isNaN(params.num2)){
            console.log("por favor ingrese sólo numeros")
        }else{
            var n1 = parseInt(params.num1)
            var n2 = parseInt(params.num2)
            console.log(math.mult(n1, n2))  
        }
    }else{
        console.log(`no hay nada qué multiplicar `)
    }
}
else if(options.divide){
    if(params.num1 && params.num2){
        if(isNaN(params.num1) || isNaN(params.num2)){
            console.log("por favor ingrese sólo numeros")
        }else{
            var n1 = parseInt(params.num1)
            var n2 = parseInt(params.num2)
            console.log(math.div(n1, n2))
            
        }
    }else{
        console.log(`no hay nada qué dividir `)
    }
}