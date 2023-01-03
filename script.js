function clean() {
    document.getElementById('result').innerHTML = ""
}

function back() {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number.substring(0, number.length - 1)

}

function insert(input_number) {
    var number = document.getElementById('result').innerHTML
    var lastdigit = document.getElementById('result').innerHTML = number.slice(-1)
    if((number.toString().length)+1 <= 30){
        console.log(number.toString().length)
    if ((lastdigit == '+' || lastdigit== '-' || lastdigit == '/' || lastdigit == '*') && (input_number == '+' || input_number == '-' || input_number == '/' || input_number == '*')){
        document.getElementById('result').innerHTML = number.substring(0, number.length - 1) + input_number
    }else if(number == '' && (input_number == '+' || input_number == '-' || input_number == '/' || input_number == '*')){
        document.getElementById('result').innerHTML = ''
    
    }
    else{
    document.getElementById('result').innerHTML = number + input_number
    }
    if(number.toString().length >=22){
        console.log('entrou');
        document.getElementById('result').style.fontSize = '12px'
    }
    else{
        document.getElementById('result').style.fontSize = '25px'
    }
}
else{
    document.getElementById('result').innerHTML = number 
}


}

function calculate() {
    var number = document.getElementById('result').innerHTML;
    if (number) {
        var eval_number = eval(number)
        console.log(eval_number.toString().length)
        if (eval_number.toString().length < 22){         
            document.getElementById('result').style.fontSize = '25px'   
            document.getElementById('result').innerHTML = eval_number.toExponential(2)
            
        }
        else{
    
        document.getElementById('result').innerHTML = eval_number
        
        }
    }
    else{
        document.getElementById('result').innerHTML = ""
    }

}