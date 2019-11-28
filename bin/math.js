'use strict'

var math = {
    add: function(num1, num2){
        var addition = num1 + num2
        return `la suma entre ${num1} y ${num2} es ${addition} ` 
    },
    subs:function(num1, num2){
        var substraction = num1 - num2
        return `la resta entre ${num1} y ${num2} es ${substraction}`

    },
    mult:function(num1, num2){
        var multiply = num1 * num2 
        return `la multiplicación entre ${num1} y ${num2} es ${multiply}`
    },
    div:function(num1, num2){
        if(num2 == 0 ){
            return `¿por que crees que dividir por cero funcionará?`
        }
        else{
            var division = num1/num2
            return `la division entre ${num1} y ${num2} es ${division}`
        }
    }
}

module.exports = math