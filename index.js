console.log("por favor escolha uma opção");
console.log("1 - Para realizar Inscrição");
console.log("2 - Para visualizar eventos");
console.log("3 - Para Sair");

<<<<<<< HEAD

=======
>>>>>>> test
var opcao = 1;
function realizarInsc ()
{
    // variavel idade deveria ser inserida pelo usuario 
   let idade = 18;
    if (idade >= 18) {
        console.log("Cadastro permitido!");
<<<<<<< HEAD
let listaDeInscrito = ["Lucas","Francisco","Anderson","Flávia","Chico", "Mário", "José", "Maria"];
let quantidadeDeinscritos = listaDeInscrito.length;
if (quantidadeDeinscritos < 100) {
   // aqui deveria ter um comando para o usuaria colocar os seus dados e ser capturado pelo sistema e armazenado
      listaDeInscrito.push("João");
    console.log("Incrição realizada com sucesso")
    console.log("Lista de insscrito até o momento");
    console.log(listaDeInscrito);
} else {
    console.log("Cadastro não realizado, limite de inscrição excedido");
}

=======
        
>>>>>>> test
              }
    else {
        console.log("Cadastro não permitido, menor de idade!");
      }
}

//inicio incerção
//fim inserção



if ((opcao == 1 ) || (opcao == 2) || (opcao == 3 ))
{
switch (opcao) {
    case 1:
        realizarInsc ();
        console.log ("opcao 1 escolhida");
    break;
    case 2:
        console.log ("opcao 2 escolhida");
    break;
    case 3:
        console.log ("opcao 3 escolhida");
    break;
    }
 } 
    else {
        console.log ("por favor digite uma opção valida");
         }