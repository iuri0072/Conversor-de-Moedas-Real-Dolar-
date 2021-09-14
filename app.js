function ConverterDolarReal() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value) * 5.24;
    //console.log(valor);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é: R$ " + valor.toFixed(2);
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterRealDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value) / 5.24;
    //console.log(valor);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dólar é: U$ " + valor.toFixed(2);
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  