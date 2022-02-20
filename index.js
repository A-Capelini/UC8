console.log("por favor escolha uma opção");
console.log("1 - Para realizar Inscrição");
console.log("2 - Para visualizar eventos");
console.log("3 - Para Sair");

var opcao = 1;
function realizarInsc ()
{
    // variavel idade deveria ser inserida pelo usuario 
   let idade = 18;
    if (idade >= 18) {
        console.log("Cadastro permitido!");
        
              }
    else {
        console.log("Cadastro não permitido, menor de idade!");
      }
}

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