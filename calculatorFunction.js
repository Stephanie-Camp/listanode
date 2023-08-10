const input = require('synchro-prompt');
let calculator = (op, x, y) => {
    switch(op){
        case 1:
            return x + y;
            break;
        case 2:
            return x - y;
            break;
        case 3:
            return x * y;
            break;
        case 4:
            return x / y;
            break;
        case 5:
            return x % y;
            break;
        case 6:
            return x ** y;
            break;
        case 7:
            return x ** (1/y);
            break;
    }
}

while(opc != 0){
    var opc = Number(input(`\n       WELCOME!
. ------------------ .
| 1 - ADDITION        | 
| 2 - SUBTRACTION     |
| 3 - MULTIPLICATION  |         . ------------------------------- .
| 4 - DIVISION        |        |  SELECT AN OPERATION DO YOU WANT  |
| 5 - REMAINDER       |        |       OR PRESS  0  TO EXIT.       |
| 6 - EXPONENTIAL     |         -----------------------------------
| 7 - ROOT            |
| 0 - EXIT            |      
 --------------------- 
 CHOOSE A OPERATION: `));

    if(opc > 0 && opc <= 7){
    var a = Number(input(" Insert a number: "));
    var b = Number(input(" Insert other number: "));
    console.log('Answer =', calculator(opc, a, b));
    }else if(opc === 0){ 
        console.log('You left.');
        break;
    }else{  console.log(' Invalid operation! \n Please, make a valid choice.');  }
}
