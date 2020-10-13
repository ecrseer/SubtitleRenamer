var fsystem = require("fs");
var foldr = "./test";



const fileNames = ['f21irst s4e5a'];
fileNames.push("ARQV");
fileNames.push("ARQV2");


function usarTodosArquivos(err, namesOfFiles) {
  var 
     videoFiles = [],
     subtitleFiles = [];

  for (var fle in namesOfFiles){ 
    let 
      actualName=namesOfFiles[fle];
        if(actualName)
          fileNames.push()
    
  }
}


fsystem.readdir(foldr, usarTodosArquivos);
fsystem.rename("./tsllll.txt", "tsllll.txt", (err) => {
  err ? console.log("er: " + err) : console.log("sucess");
});

setTimeout(()=>
{
  let numerosDoArq = fileNames[0].replace(/\D+/g, "");
  search(numerosDoArq)==
},1100);
