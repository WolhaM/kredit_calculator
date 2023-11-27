var elem = document.querySelector(".table");

function deleteOld() {
    try {
        var old = document.getElementById('table');
        old.parentNode.removeChild(old);
    }
    catch {
    }
}

function createTable(parent) {
    
    deleteOld();

    var table = document.createElement('table');
    table.id = 'table'
    var tr = document.createElement('tr');
    var list = ["Номер платежа", "Дата платежа", "Остаток долга", "В погашении кредита", "В погашении процентов", "Платеж"];

    for (el in list) {
        var td = document.createElement('td');
            td.textContent = list[el];
            tr.appendChild(td);
    }

    table.appendChild(tr);

    var kredit = document.getElementById("valueDisplayField 1").value - document.getElementById("valueDisplayField 2").value;
    var month = document.getElementById("valueDisplayField 3").value * 12;
    var month_percent = document.getElementById("valueDisplayField 4").value / 12 / 100;
    var koef = (month_percent * (1 + month_percent)**month) / ((1 + month_percent)**month - 1);
    var to_pay = (koef * kredit).toFixed(2);
    var n = 1
    var somedate = new Date();

    var dolg = 0
    var percent = 0

    while(1) {
        list = [n, somedate.toLocaleDateString(), kredit.toFixed(2), (to_pay-(kredit * month_percent)).toFixed(2), (kredit * month_percent).toFixed(2), to_pay]

        var tr = document.createElement('tr');
        
        for (el in list) {
            var td = document.createElement('td');
            td.textContent = list[el];
            tr.appendChild(td);
        }
        table.appendChild(tr);

        n += 1;
        somedate.setMonth(somedate.getMonth() + 1);
        dolg += parseFloat(list[3]);
        percent += parseFloat(list[4]);

        if (n > month){
            var tr = document.createElement('tr');
            var td0 = document.createElement('td')
            var td1 = document.createElement('td')
            td1.textContent = "Итого";
            var td2 = document.createElement('td')
            td2.textContent = dolg;
            var td3 = document.createElement('td')
            td3.textContent = percent;
            
            tr.appendChild(td1)
            tr.appendChild(td0)
            tr.appendChild(td2)
            tr.appendChild(td3)
            table.appendChild(tr);

            console.log(dolg);
            console.log(percent);
            break;
        }
        kredit -= list[3];
    }
    parent.appendChild(table);
}
