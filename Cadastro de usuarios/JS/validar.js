function validar() {
  console.clear();

  var nome = document.getElementById("exampleInputName").value;

  var padrao = /[^a-zà-ú]/gi;

  var valida_nome = nome.match(padrao);

  if (valida_nome || !nome) {
    console.log("Nome possui caracteres inválidos ou é vazio");
  } else {
    console.log("Nome Ok!");
  }

  function setMask(inputCpf) {
    var cpf = inputCpf;

    setTimeout("aplicar()", 250);
  }

  function ValidaCPF() {
    var RegraValida = document.getElementById("RegraValida").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(RegraValida) == true) {
      console.log(cpfValido);
    } else {
      console.log("CPF Inválido");
    }
  }
  function fMasc(objeto, mascara) {
    obj = objeto;
    masc = mascara;
    setTimeout("fMascEx()", 1);
  }

  function fMascEx() {
    obj.value = masc(obj.value);
  }

  function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
  }

  function validarEndereco() {
    console.clear();

    var nome = document.getElementById("exampleInputEndereco").value;

    var padrao = /[^a-zà-ú]/gi;

    var valida_nome = nome.match(padrao);

    if (valida_nome || !nome) {
      console.log("Nome possui caracteres inválidos ou é vazio");
    } else {
      console.log("Endereço Ok!");
    }
  }
}

function setMask(inputCpf) {
  var cpf = inputCpf;

  setTimeout("aplicar()", 250);
}

function ValidaCPF() {
  var RegraValida = document.getElementById("RegraValida").value;
  var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  if (cpfValido.test(RegraValida) == true) {
    console.log(cpfValido);
  } else {
    console.log("CPF Inválido");
  }
}
function fMasc(objeto, mascara) {
  obj = objeto;
  masc = mascara;
  setTimeout("fMascEx()", 1);
}

function fMascEx() {
  obj.value = masc(obj.value);
}

function mCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
}

function validarEndereco() {
  console.clear();

  var nome = document.getElementById("exampleInputEndereco").value;

  var padrao = /[^a-zà-ú]/gi;

  var valida_nome = nome.match(padrao);

  if (valida_nome || !nome) {
    console.log("Endereço possui caracteres inválidos ou é vazio");
  } else {
    console.log("Endereço Ok!");
  }
  function validaNumero() {
    var numero = document.getElementById("exampleInputNumero").value;
    var padrao = /[a-zA-Z0-9]/gi;
    var valida_nomeero = numero.match(padrao);
    if (valida_nomeero || !numero) {
      console.log("Numéro possui caracteres inválidos ou é vazio");
    } else {
      console.log("Numéro Ok!");
    }
  }

  function validarComplemento() {
    console.clear();

    var complemento = document.getElementById("exampleInputCompl").value;

    var padrao = /[^a-zà-ú]/gi;

    var valida_complemento = nome.match(padrao);

    if (valida_complemento || !complemento) {
      console.log("Complemento possui caracteres inválidos ou é vazio");
    } else {
      console.log("Complemento Ok!");
    }
  }
}
// var capturando = "";
// function capturar() {
//   capturando = document.getElementById("exampleInputName").value;
//   document.getElementById("valorDigitado").innerHTML = capturando;
//   alert(capturando + " " + "seu cadastro foi realizado com sucesso.");
// }
