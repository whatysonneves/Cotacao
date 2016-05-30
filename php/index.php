<?php

header("Content-Type: text/html; Charset=UTF-8");

$url = "http://api.promasters.net.br/cotacao/v1/valores";

$cURL = curl_init();
curl_setopt($cURL, CURLOPT_URL, $url);
curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
curl_setopt($cURL, CURLOPT_HEADER, false);
curl_setopt($cURL, CURLOPT_USERAGENT, "cURL ".PHP_VERSION." (ProMasters)");
$json = curl_exec($cURL);
curl_close($cURL);

$json = json_decode($json, true);
$valorDolar = $json["valores"]["USD"]["valor"];

echo "O Dólar hoje está R$ ".number_format($valorDolar, "2", ",", ".");
