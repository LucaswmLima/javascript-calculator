function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number.substring(0, number.length - 1)

}

function insert(input_number) {
    var number = document.getElementById('result').innerHTML;
    var lastdigit = document.getElementById('result').innerHTML = number.slice(-1);
    if ((lastdigit == '+' || lastdigit== '-' || lastdigit == '/' || lastdigit == '*') && (input_number == '+' || input_number == '-' || input_number == '/' || input_number == '*')){
        document.getElementById('result').innerHTML = number.substring(0, number.length - 1) + input_number;
    }
    else{
    document.getElementById('result').innerHTML = number + input_number;
    }


}

function calculate() {
    var number = document.getElementById('result').innerHTML;
    if (number) {
        var eval_number = eval(number)
        console.log(eval_number.toString().length);
        if (eval_number.toString().length > 15){            
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