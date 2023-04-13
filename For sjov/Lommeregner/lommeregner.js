
//Viser værdien som indtastes på lommeregneren
function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function calculate(){
    var p = document.getElementById("result").value   
    var q = eval(p)
    if (q === undefined){
        document.getElementById("result").value = "";

    } else {
        document.getElementById("result").value = q;
    }
    

}