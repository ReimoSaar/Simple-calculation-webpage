function calculate() {
    var value1 = parseInt(document.getElementsByTagName("input")[0].value);
    var value2 = parseInt(document.getElementsByTagName("input")[1].value);
    var sign = document.getElementById("sign").value;
    var answer;

    if (sign == "+") {
        answer = value1 + value2;
    } else if (sign == "-") {
        answer = value1 - value2;
    } else if (sign == "*") {
        answer = value1 * value2;
    } else if (sign == "/") {
        answer = value1 / value2;
    }

    document.getElementsByTagName("p")[0].innerHTML = answer;
}
