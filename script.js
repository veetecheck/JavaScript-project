function spocitej() {
    let mezisoucet = 0;
    let jednotkovaCena = 0;
    let pocet = 0;
    let pocetDni = document.querySelector("#pocet-dni").value;
    let pridavek;
    let cena;
    let i;
    let cenaZakaznik = parseFloat(document.querySelector("#navrh-ceny").value);

    if (document.querySelector("#horske").checked) {
        jednotkovaCena = parseInt(document.querySelector("#horske").value);
        pocet = document.querySelector("#pocet-hor").value;
        mezisoucet += jednotkovaCena * pocet;
    }
    if (document.querySelector("#silnicni").checked) {
        jednotkovaCena = parseInt(document.querySelector("#silnicni").value);
        pocet = document.querySelector("#pocet-sil").value;
        mezisoucet += jednotkovaCena * pocet;
    }
    if (document.querySelector("#gravel").checked) {
        jednotkovaCena = parseInt(document.querySelector("#gravel").value);
        pocet = document.querySelector("#pocet-gra").value;
        mezisoucet += jednotkovaCena * pocet;
    }
    if (document.querySelector("#detske").checked) {
        jednotkovaCena = parseInt(document.querySelector("#detske").value);
        pocet = document.querySelector("#pocet-det").value;
        mezisoucet += jednotkovaCena * pocet;
    }

    for (i = 0; i < 3; i++) {
        if (document.f6.elements[i].checked) {
            pridavek = parseFloat(document.f6.elements[i].value)
        }
    }
    cena = mezisoucet * pocetDni * pridavek
    if (cena > 0) {

        if (cena == cenaZakaznik) {
            document.querySelector("#zprava-zakaznikovi").innerHTML = "Vaše cenová nabídka je shodná s vypočtenou cenou.";
            document.querySelector("#vypocet-ceny").innerHTML = `${Math.round(cena)} Kč`;
        }
        else if ((cena > cenaZakaznik) && (cenaZakaznik > 0)) {
            document.querySelector("#zprava-zakaznikovi").innerHTML = "Vaše cenová nabídka je nedostačující.";
            document.querySelector("#vypocet-ceny").innerHTML = `${Math.round(cena)} Kč`;
        }
        else if (cena < cenaZakaznik) {
            document.querySelector("#zprava-zakaznikovi").innerHTML = "Vaše cenová nabídka převyšuje vypočtenou cenu.";
            document.querySelector("#vypocet-ceny").innerHTML = `${Math.round(cena)} Kč`;
        }
        else {
            document.querySelector("#zprava-zakaznikovi").innerHTML = "Cenová nabídka musí být zadána a ve správném formátu - kladné číslo.";
            document.querySelector("#vypocet-ceny").innerHTML = "";
        }
    }
    else {
        document.querySelector("#zprava-zakaznikovi").innerHTML = "Nebyl vybrán žádný typ kola, vraťte se do nabídky a vyberte si min. jeden typ.";
        document.querySelector("#vypocet-ceny").innerHTML = "";
    }
}

function odesli() {
    let email = document.querySelector("#emailZak").value;
    if (email.includes("@")) {
        alert("Formulář o objednávce odeslán...");
        location.reload();
    }
    else alert("Vyplňte prosím email ve správném tvaru!");
}

function resetuj() {
    document.querySelector("#f1").reset();
    document.querySelector("#f2").reset();
    document.querySelector("#f3").reset();
    document.querySelector("#f4").reset();
    document.querySelector("#f5").reset();
    document.querySelector("#f6").reset();
    document.querySelector("#f7").reset();
    document.querySelector("#vypocet-ceny").innerHTML = "";
    document.querySelector("#zprava-zakaznikovi").innerHTML = "";
}
