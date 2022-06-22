const old_operation = document.getElementById("old_operation");
const result_div = document.getElementById("result_div");
const operator_div = document.getElementById("operator_div");

let invert_num1 = false;
let invert_num2 = false;

let num1 = "",
    num2 = "",
    operator = "",
    calc = "",
    result = 0.0

function insert(num) {
    calc = `${num1}${operator}${num2}`;    

    if(num1 != ""){
        if((num == "/") || (num == "+") || (num == "-") || (num == "*")){
            operator = num;
        }    
    }

    if (operator == ""){
            num1 += num;
            num1 = num1.replace('+', '').replace('-', '').replace('/', '').replace('*', '');
            result_div.innerHTML = num1;
            calc += num;
            old_operation.innerHTML = calc;
    }
    if(operator != ""){
        result_div.innerHTML = "";
        num2 += num;
        num2 = num2.replace('+', '').replace('-', '').replace('/', '').replace('*', '');
        
        if(invert_num2 == true){
            num2 = num2 * -1
            result_div.innerHTML = num2; 
            calc += num;
            old_operation.innerHTML = calc;
        }else{
            result_div.innerHTML = num2; 
            calc += num;
            calc = `${num1}${operator}${num2}`;    
            old_operation.innerHTML = calc;
        }

    }
}

function clean() {
    num1 = "";
    num2 = "";
    operator = "";
    calc = "";
    invert_num1 = false;
    invert_num2 = false;
    result = 0.0;
    old_operation.innerHTML = "";
    result_div.innerHTML = "";
}

function calcular() {
    let parsednum1 = parseFloat(num1);
    let parsednum2 = parseFloat(num2);

    if(num1 != "" & num2 != ""){
        switch(operator){
            case '+':
                old_operation.innerHTML = "";
                result = parsednum1 + parsednum2;
                calc = result;
                num1 = calc;
                num2 = "";
                operator = "";
                old_operation.innerHTML = num1;
                result_div.innerHTML = result;
                invert_num1 = false;
                invert_num2 = false;  
                break;

            case '-':
                old_operation.innerHTML = "";
                result = parsednum1 - parsednum2;
                calc = result;
                num1 = calc;
                num2 = "";
                operator = "";
                old_operation.innerHTML = num1;
                result_div.innerHTML = result;
                invert_num1 = false;
                invert_num2 = false;
                break;
            
            case '*':
                old_operation.innerHTML = "";
                result = parsednum1 * parsednum2;
                calc = result;
                num1 = calc;
                num2 = "";
                operator = "";
                old_operation.innerHTML = num1;
                result_div.innerHTML = result;
                invert_num1 = false;
                invert_num2 = false;
                break;
            
            case '/':
                old_operation.innerHTML = "";
                result = parsednum1 / parsednum2;
                calc = result;
                num1 = calc;
                num2 = "";
                operator = "";
                old_operation.innerHTML = num1;
                result_div.innerHTML = result;
                invert_num1 = false;
                invert_num2 = false;
                break;
        }
    }
}


function invertNum(){
    if(operator == "" & num1 != ""){
        invert_num2 = false;
        invert_num1 = true;
        num1 = parseFloat(num1) * -1;
        calc = parseFloat(calc) * -1;

        old_operation.innerHTML = calc;
        result_div.innerHTML = num1;

    }else{
        if(num2 != ""){

        
        invert_num1 = false;
        invert_num2 = true;
        num2 = parseFloat(num2) * -1;
        calc = parseFloat(calc) * -1;

        calc = `${num1}${operator}${num2}`

        old_operation.innerHTML = calc;
        result_div.innerHTML = num2;
        }
    }
}