function appendToDisplay(value){
    document.getElementById('display').value +=value;
}
function cleardisplay(){
    document.getElementById('display').value ='';
}
function calculate(){
    try{
        const display = document.getElementById('display');
        display.value= eval(display.value);

    }
    catch(error){
        docuument.getElementById('display').value='error';
    }
}
function backspace(){
    const display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
}