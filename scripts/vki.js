function vki() {
    var boy = document.querySelector(".boy").value;
    boy = boy / 100.00;
    var kilo = document.querySelector(".kilo").value;
    var vkih;
    vkih = kilo / (boy * boy);
    if (vkih > 0 && vkih < 18.4) {
        document.querySelector(".sonuc").innerHTML = vkih + "<br>" + "Zayıf";

    }
    if (vkih > 18.5 && vkih < 24.9) {
        document.querySelector(".sonuc").innerHTML = vkih + "<br>" + "Normal";

    }
    if (vkih > 25 && vkih < 29.9) {
        document.querySelector(".sonuc").innerHTML = vkih + "<br>" + "Fazla Kilolu";

    }
    if (vkih > 30 && vkih < 34.9) {
        document.querySelector(".sonuc").innerHTML = vkih + "<br>" + "Şişman";

    }
    if (vkih > 30 && vkih < 34.9) {
        document.querySelector(".sonuc").innerHTML = vkih + "<br>" + "Şişman 1. Derece Obez";

    }
    if (vkih > 35 && vkih < 44.9) {
        document.querySelector(".sonuc").innerHTML = vkih + "<br>" + "Şişman 2. Derece Obez";

    }
    if (vkih > 45) {
        document.querySelector(".sonuc").innerHTML = vkih + "<br>" + " Aşırı Şişman 3. Derece Obez";

    } else {

    }
}
var tikla = document.querySelector(".hesapla");
tikla.onclick = vki;