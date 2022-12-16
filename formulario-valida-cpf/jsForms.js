function valida(cpf) {
  var aux = true; //declaracao variaveis
  var verifica1 = 0;
  var verifica2 = 0;
  var j = 10;
  var k = 11;

  if (cpf.length != 11) {
    //entra se o cpf nao tiver 11 digitos
    alert("CPF invalido");
    return;
  }

  for (var i = 0; i < cpf.length - 3 && aux; i++) {
    //confere se os digitos do cpf sao todos iguais
    aux = cpf[i] == cpf[i + 1];
  }

  if (aux) {
    //entra se cpf todo igual
    alert("CPF invalido DIGITOS IGUAIS");
    return;
  }

  for (var i = 0; i < cpf.length - 2; i++) {
    //verifica primeiro digito
    verifica1 = verifica1 + cpf[i] * j;
    j--;
  }
  verifica1 = 11 - (verifica1 % 11);

  for (var i = 0; i < cpf.length - 1; i++) {
    //verifica segundo digito
    verifica2 = verifica2 + cpf[i] * k;
    k--;
  }
  verifica2 = 11 - (verifica2 % 11);

  if (verifica1 >= 10) {
    verifica1 = 0;
  }
  if (verifica2 >= 10) {
    verifica2 = 0;
  }

  if (cpf[9] != verifica1 || cpf[10] != verifica2) {
    //entra se cpf for invalido
    alert("CPF invalido");
    return;
  }
}

function dadosEnviados(){
  alert("Cadastro realizado com sucesso!"); 
  return;
}
