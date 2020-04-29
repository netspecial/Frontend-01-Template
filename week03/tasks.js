function convertStringToNumber(string, x){
    if(arguments.length < 2){
        x = 10;
    }

    var number = 0;

    isScience = /[eE]/.test(string);
    if(!isScience){
        var chars = string.split('');
         
        var i = 0;
        while(i < chars.length && !chars[i] != '.'){
            number = number * x;
            number += chars[i].codePointAt(0) - '0'.codePointAt(0);
            i++
        }

        if(chars[i] === '.'){
            i++;
        }

        var fraction = 1;
        
        while(i < chars.length){
            fraction = fraction / x;
            number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
            i++;
        }

        return number;
    }else{
        var decimal = 10;
        var result = /(\d.?\d*)[eE]-?(\d*)/.exec(string);
        var bNumber = Number(result[1]);
        var pNumber = Number(result[2]);

        isNegtiveE = /[eE]-/.test(string);
        if (!isNegtiveE){
            number = bNumber * Math.pow(decimal, pNumber);
        }else{
            number = bNumber * Math.pow(1/decimal, pNumber);
        }

        return number;
    }
}

function convertNumberToString(number, x){
    var integer = Math.floor(number);
    var fraction = (number - integer).toFixed(10);
    var string = '';
    
    while(integer > 0){
        string = String(integer % x) + string;
        integer = Math.floor(integer / x);
    }

    var fractionStr = "";
    if(fraction > 0){
        fractionStr = ".";
    }
    var temp = 0;
    while(fraction > 0){
        temp = Math.floor(fraction * x);
        fractionStr += String(temp);
        fraction = (fraction * x - temp).toFixed(10);
    }

    return string + fractionStr;
}
