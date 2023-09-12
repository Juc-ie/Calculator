let displayValue = "";
function calculate(){
    displayValue = eval(displayValue)
    document.querySelector('#display').value = displayValue
}
function handleButton(value){
    displayValue+=value
    document.querySelector('#display').value = displayValue
}
function clearDisplay(){
    displayValue = ''
    document.querySelector('#display').value = displayValue
}