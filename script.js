function EnterNumber(ele) {
    var value = document.getElementById("Answer").value;
    document.getElementById("Answer").value = value + ele;
}
function EnterClear() {
    document.getElementById("Answer").value = "";
}

function EnterEqual() {
    var sum = document.getElementById("Answer").value;
    if (sum) {
        document.getElementById("Answer").value = eval(sum);
    }

}