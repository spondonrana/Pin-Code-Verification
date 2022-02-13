function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
   document.getElementById('display-pin').value = pin;
    
}

// 
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    } else {
        
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
    
     
})

function verfyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const success = document.getElementById('notify-match');
    const wrongCode = document.getElementById('notify-failed');

    if(pin == typedNumbers){
        
        success.style.display = 'block';
        wrongCode.style.display = 'none';

    } else{
        success.style.display = 'none';
        wrongCode.style.display = 'block';
    }
}

let count = 0;
console.log(parseInt())