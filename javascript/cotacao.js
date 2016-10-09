var url = "http://api.promasters.net.br/cotacao/v1/valores";
function cotacao() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			var dolar = (json.valores.USD.valor).toFixed(2).replace(/\./i, ",");
			var euro = json.valores.EUR.valor;
			document.querySelector("div.container span").innerHTML = dolar;
			console.log("O euro está custando R$ "+euro);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}
cotacao();
