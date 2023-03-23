function clr(){
    document.getElementById("inPut").innerHTML= " ";
}
function press(num){
    document.getElementById("inPut").innerHTML+=num;
}
function ans(){
    let value = document.getElementById("inPut").innerText;
    let answer = eval(value)
    document.getElementById("inPut").innerHTML = answer;
}