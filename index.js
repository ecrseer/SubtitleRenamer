var fsystem = require("fs");
var foldr = "./test";

var 
     videoFiles = [],
     subtitleFiles = [];

function RelataErro(err){ 
    err ? console.log("er: " + err) : console.log("")

}

function RenomeiaRespectivo(selectedVideo,i){
  let
    numerosDoVid =
     selectedVideo.replace(/\D+/g, "");

   if(subtitleFiles[i].search(numerosDoVid)){
      /* fsystem.rename('./test/'+selectedSubtitle+'',
        './test/'+'removeNum'+'',
        RelataErro); */
        
        subtitleFiles[i]='4242424242';        
        console.log(subtitleFiles);
   }

 }


function AtualizaListagemVideoSubs(nomesArquivos){
  for (let fle in nomesArquivos){ 
    let 
      actualName = nomesArquivos[fle];
        if((actualName.search(".srt")!=-1)
        ||
           actualName.search(".ass")!=-1)//Se for legenda
          subtitleFiles.push(actualName);
          else
           videoFiles.push(actualName);    
  }
}


function UsarTodosArquivos(err, namesOfFiles) {
  
    AtualizaListagemVideoSubs(namesOfFiles);
  

  for(let video in videoFiles){
   let
    selectedVideo = videoFiles[video];
    for(let i=0; i<subtitleFiles.length;i++){
        RenomeiaRespectivo(selectedVideo,i);
    }
    console.log("____");
  }
}
fsystem.readdir(foldr, UsarTodosArquivos);

//rascunhos

