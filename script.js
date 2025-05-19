function appendValue(value){
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let values = document.getElementById('display').value
    if(arr.includes(value)){
        document.getElementById('display').value += value;
    } else {
        console.log(arr.includes(values.charAt(values.length-1)))
        if(arr.includes(values.charAt(values.length-1))){
            document.getElementById('display').value += value;
        }
    }
}



function clearDisplay(){
    document.getElementById('display').value = '';
}  

function deleteLast(){
    let value = document.getElementById('display').value;
    document.getElementById('display').value = value.substring(0, (value.length-1));
}

function calculateResult (){
    const display = document.getElementById('display');

    try{
        display.value = eval(display.value);
    }catch{
        display.value = 'Error';
    }
}