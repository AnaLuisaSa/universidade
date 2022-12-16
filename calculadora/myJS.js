var total; //declracao variavel

function soma(num1, num2) {
  //cria funcao
  total = eval(num1) + eval(num2); //soma
  document.querySelector("#resultado").value = total;
}
function subtrai(num1, num2) {
  total = num1 - num2;
  document.querySelector("#resultado").value = total;
}
function dividir(num1, num2) {
  if (num2 == 0) {
    total = "Dividendo nao pode ser 0";
    document.querySelector("#resultado").value = total;
  } else {
    total = num1 / num2;
    document.querySelector("#resultado").value = total;
  }
}
function multiplica(num1, num2) {
  total = num1 * num2;
  document.querySelector("#resultado").value = total;
}
function pot(num1, num2) {
  total = Math.pow(num1, num2);

  document.querySelector("#resultado").value = total;
}
function fat(num1) {
  var fatorial = 1;
  for (var i = 1; i <= num1; i++) {
    fatorial *= i;
  }
  document.querySelector("#resultado").value = fatorial;
}
function e(num1) {
  total = Math.exp(num1);
  document.querySelector("#resultado").value = total;
}
function fib(num1) {
  var F = 0; // atual
  var ant = 0; // anterior

  for (var i = 1; i <= num1; i++) {
    if (i == 1) {
      F = 1;
      ant = 0;
    } else {
      F += ant;
      ant = F - ant;
    }
  }
  document.querySelector("#resultado").value = ant;
}
function inv(num1) {
  total = 1 / num1;
  document.querySelector("#resultado").value = total;
}
function ln(num1) {
  total = Math.log(num1);
  document.querySelector("#resultado").value = total;
}
function seno(num1) {
  total = Math.sin((num1 * Math.PI) / 180);
  document.querySelector("#resultado").value = total;
}
function cosseno(num1) {
  total = Math.cos((num1 * Math.PI) / 180);
  document.querySelector("#resultado").value = total;
}
function tgn(num1) {
  total = Math.tan((num1 * Math.PI) / 180);
  document.querySelector("#resultado").value = total;
}
function modulo(num1, num2) {
  total = num1 % num2;
  document.querySelector("#resultado").value = total;
}
function binario(num1) {
  var bin = "";
  var aux = num1;

  while (aux > 0) {
    if (aux % 2 == 0) {
      bin = "0" + bin;
    } else {
      bin = "1" + bin;
    }

    aux = Math.floor(aux / 2); //retorna somente a perte inteira do valor que está em aux
  }

  document.querySelector("#resultado").value = bin;
}
function octa(num1) {
  var oct = "";
  var aux = num1;

  while (aux > 0) {
    oct = (aux % 8) + oct;

    aux = Math.floor(aux / 8); //retorna somente a perte inteira do valor que está em aux
  }

  document.querySelector("#resultado").value = oct;
}
function hexa(num1) {
  var hex = "";
  var aux = num1;

  while (aux > 0) {
    if (aux % 16 == 10) {
      hex = "A" + hex;
    } else if (aux % 16 == 11) {
      hex = "B" + hex;
    } else if (aux % 16 == 12) {
      hex = "C" + hex;
    } else if (aux % 16 == 13) {
      hex = "D" + hex;
    } else if (aux % 16 == 14) {
      hex = "E" + hex;
    } else if (aux % 16 == 15) {
      hex = "F" + hex;
    } else {
      hex = (aux % 16) + hex;
    }

    aux = Math.floor(aux / 16);
  }

  document.querySelector("#resultado").value = hex;
}
function basen(num1, num2) {
  var res = "";
  var aux = num1;

  if (num2 == 2) {
    while (aux > 0) {
      if (aux % 2 == 0) {
        res = "0" + res;
      } else {
        res = "1" + res;
      }
      aux = Math.floor(aux / 2); //retorna somente a perte inteira do valor que está em aux
    }
  } else if (num2 == 8) {
    while (aux > 0) {
      res = (aux % 8) + res;

      aux = Math.floor(aux / 8); //retorna somente a perte inteira do valor que está em aux
    }
  } else if (num2 == 16) {
    while (aux > 0) {
      if (aux % 16 == 10) {
        res = "A" + res;
      } else if (aux % 16 == 11) {
        res = "B" + res;
      } else if (aux % 16 == 12) {
        res = "C" + res;
      } else if (aux % 16 == 13) {
        res = "D" + res;
      } else if (aux % 16 == 14) {
        res = "E" + res;
      } else if (aux % 16 == 15) {
        res = "F" + res;
      } else {
        res = (aux % 16) + res;
      }

      aux = Math.floor(aux / 16);
    }
  } else {
    while (aux > 0) {
      res = (aux % num2) + res;

      aux = Math.floor(aux / num2); //retorna somente a perte inteira do valor que está em aux
    }
  }

  document.querySelector("#resultado").value = res;
}

