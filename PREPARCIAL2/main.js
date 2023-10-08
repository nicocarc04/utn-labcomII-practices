var precios = {
    dolares: 900,
    euros: 400
};


function calculo() {
    var pesos = parseInt(document.getElementById("pesos").value);
    var divisas = document.getElementById("selector").value;

    if (!isNaN(pesos) && divisas != "-") {
        var total = pesos / precios[divisas];
        document.getElementById("resultado").innerHTML = `El total es: $${total} ${divisas}`;
    } else {
        alert("faltan campos por completar");
    }
   
}


function newMoneda() {
    var monedaExtranjeraSelect = document.getElementById("selector");
    var agregarmoneda = document.getElementById("newmoneda").value;
    var costo = document.getElementById("valor").value;
    
        var monedaExtranjeraOption = document.createElement("option");
        monedaExtranjeraOption.text = agregarmoneda;
        monedaExtranjeraOption.value = agregarmoneda;
        monedaExtranjeraSelect.appendChild(monedaExtranjeraOption);
        //monedaExtranjeraSelect.option.add(New Option(agregarmoneda,agregarmoneda))
        precios[agregarmoneda] = costo;

    


}