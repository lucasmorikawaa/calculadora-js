function calc(operacao){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output;

    switch(operacao){
        case 'soma' : output = num1 + num2; break;
        case 'subtracao' : output = num1 - num2; break;
        case 'multiplicacao' : output = num1 * num2; break;
        case 'divisao' : output = num1 / num2; break;
    }

    document.getElementById("output").value = output;
}