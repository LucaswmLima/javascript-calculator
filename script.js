function clean() {
    document.getElementById('result').innerHTML = ""
    resize()
    
}

function back() {
    var number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number.substring(0, number.length - 1)
    resize()

}

function resize() {
    var result_lenght = (document.getElementById('result').innerHTML).toString().length
    if (result_lenght < 22) {
        document.getElementById('result').style.fontSize = '25px'

    }
    else {
        document.getElementById('result').style.fontSize = '12px'

    }
    
}

function insert(input_number) {
    var number = document.getElementById('result').innerHTML
    var lastdigit = document.getElementById('result').innerHTML = number.slice(-1)
    if ((number.toString().length) + 1 <= 30) {
        if ((lastdigit == '+' || lastdigit == '-' || lastdigit == '/' || lastdigit == '*') && (input_number == '+' || input_number == '-' || input_number == '/' || input_number == '*')) {
            document.getElementById('result').innerHTML = number.substring(0, number.length - 1) + input_number

        } else if (number == '' && (input_number == '+' || input_number == '-' || input_number == '/' || input_number == '*')) {
            document.getElementById('result').innerHTML = ''

        }
        else {
            document.getElementById('result').innerHTML = number + input_number

        }
        
    }
    else {
        document.getElementById('result').innerHTML = number

    }
    resize()


}

function calculate() {
    var number = document.getElementById('result').innerHTML
    if (number) {
        var eval_number = eval(number)
        console.log(eval_number.toString().length)
        if (eval_number.toString().length >= 22) {
            document.getElementById('result').innerHTML = eval_number.toExponential(2)

        }
        else {

            document.getElementById('result').innerHTML = eval_number

        }
    }
    else {
        document.getElementById('result').innerHTML = ""
    }

    resize()


}

function keyboard_input() {

    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case 'c':
                clean()
                break;
            case 'Escape':
                clean()
                break;
            case 'Backspace':
                back()
                break;
            case 'Enter':
                calculate()
                break;
            case '=':
                calculate()
                break;
            case '1':
                insert('1')
                break;
            case '2':
                insert('2')
                break;
            case '3':
                insert('3')
                break;
            case '4':
                insert('4')
                break;
            case '5':
                insert('5')
                break;
            case '6':
                insert('6')
                break;
            case '7':
                insert('7')
                break;
            case '8':
                insert('8')
                break;
            case '9':
                insert('9')
                break;
            case '0':
                insert('0')
                break;
            case '.':
                insert('.')
                break;
            case ',':
                insert('.')
                break;
            case '+':
                insert('+')
                break;
            case '-':
                insert('-')
                break;
            case '*':
                insert('*')
                break;
            case '/':
                insert('/')
                break;

        }

    })
}

keyboard_input()

