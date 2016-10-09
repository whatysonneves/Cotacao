var url = "http://api.promasters.net.br/cotacao/v1/valores";
$(document).ready(function() {
	$.ajax({
		method: "GET",
		url: url,
		timeout: 5000,
		dataType: "JSON"
	}).fail(function() {
		alert("Houve erro no servidor ao tentar recuperar dados de: "+url);
	}).done(function(json) {
		if(json.status) {
			var dolar = (json.valores.USD.valor).toFixed(2).replace(/\./i, ",");
			var eur = json.valores.EUR.valor;
			$("div.container span").html(dolar);
		} else {
			alert("A ferramenta está com problemas");
		}
	});
});
