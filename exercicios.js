// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log("Soma:" ,soma(6, 8))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
console.log("Hello!")

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Qual altura do retângulo:"));
  const largura = Number(prompt("Qual largura do retângulo:"));
  const area = altura*largura 

  console.log(altura);
  console.log(largura);
  console.log(area);
  
}


// EXERCÍCIO 02
function imprimeIdade() {
  //implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual seu ano atual:"));
  const nascimento = Number(prompt("Qual seu nascimento:"));
  
    console.log(anoAtual - nascimento)  

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

    const imc = peso / (altura*altura)
    return imc 

  }

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Qual seu nome?");
  const idade = prompt("Qual sua idade?");
  const email = prompt("Qual sua idade?");
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
 
  }

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("Informe sua 1 cor favoritas") 
  const cor2 = prompt("Informe sua 2 cor favoritas") 
  const cor3 = prompt("Informe sua 3 cor favoritas") 

  const resposta1 = cor1
  const resposta2 = cor2
  const resposta3 = cor3

  respostaCores = [resposta1 , resposta2 , resposta3]
  console.log(respostaCores)
   
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

   
  return string.toUpperCase()

}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  
  return string1 > string2 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 // implemente sua lógica aqui

  
 return array[0]
 
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length-1]
  
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const primeiro = array[0]
  const ultimo = array[array.length-1]
  array[0] = array[array.length-1]
  array[array.length-1] = primeiro

  return array
   
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    
  return string1.toLowerCase() === string2.toLowerCase() 

  
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}