
function alert() {
    window.alert('123');
}

function top_percent(value) {

    cost = document.getElementById("valueDisplayField 1").value / 100 * value;

    document.getElementById("valueDisplayField 2").value = cost ;
    document.getElementById("valueDisplayWalker 2").value = cost;
}

function years(value) {
    document.getElementById("valueDisplayWalker 3").value = value;
    document.getElementById("valueDisplayField 3").value = value;

}

function bottom_percent(value) {
    document.getElementById("valueDisplayWalker 4").value = value;
    document.getElementById("valueDisplayField 4").value = value;
}


function calculating() {
    month = document.getElementById("valueDisplayField 3").value * 12;
    month_percent = document.getElementById("valueDisplayField 4").value / 12 / 100;
    kredit = document.getElementById("valueDisplayField 1").value - document.getElementById("valueDisplayField 2").value;
    koef = (month_percent * (1 + month_percent)**month) / ((1 + month_percent)**month - 1)
    document.getElementById("monthly_summ").textContent = Math.round(koef * kredit).toLocaleString('ru') + " P";
    document.getElementById("int_kredit").textContent = kredit.toLocaleString('ru') + " P";
    document.getElementById("int_percents").textContent = (Math.round(koef * kredit * 240) - kredit).toLocaleString('ru') + " P";
    document.getElementById("int_percents_credit").textContent = Math.round(koef * kredit * 240).toLocaleString('ru') + " P";
    document.getElementById("int_income").textContent = Math.round(koef * kredit * 1.6).toLocaleString('ru') + " P";;

}

