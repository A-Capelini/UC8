var opcao = 1;
function realizarInsc ()
{
   let idade = 17;
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