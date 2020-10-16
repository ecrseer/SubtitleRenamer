const fileNames = ['f21irst s4e5a'];
fileNames.push("ARQV");
fileNames.push("ARQV2");


fsystem.rename("./tsllll.txt", "tsllll.txt", (err) => {
  err ? console.log("er: " + err) : console.log("sucess");
});

setTimeout(()=>
{
  let numerosDoArq = fileNames[0].replace(/\D+/g, "");
//  search(numerosDoArq)==
}
,1100);


function saudarUsuario(entrada=0){
  if(typeof entrada!=='string')
      return "Olá,Mundo!";
  entrada = entrada.match(/[a-zA-Z]+/g);//deixa só letras
  const array = entrada;

  if(!array)  
    return "Olá,Mundo!";

  const reducer = (accumulator, currentValue) =>
                     accumulator + currentValue;
  entrada = array.reduce(reducer);//reune o conjunto de letras do array formado pelo match

    entrada=
      entrada.charAt(0).toUpperCase() + //só a primeira letra será maiuscula.
      entrada.substring(1,entrada.length).toLowerCase();
return "Olá,"+entrada;
}

