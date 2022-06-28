var currentNumberWrapper = document.getElementById('currentnumber');
var currentNumber = 0;
var contadorAdd = document.getElementById('adic');
var contadorSub = document.getElementById('subt');

contadorAdd.addEventListener("click",function increment(){
    if (currentNumber >= 10){
        document.getElementById('currentnumber').style.color= "red";
    }
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    corInicial();
})

contadorSub.addEventListener("click",function decrement(){
    if (currentNumber > 0){
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;  
    }
    else{
        msg()
    }
    corInicial();
})

function msg(){
    alert("Valor negativo");
}

function corInicial(){
    if(currentNumber <= 10){
        document.getElementById('currentnumber').style.color="black";
    }
}