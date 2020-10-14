var fsystem = require("fs");
var foldr = "./test";

const 
     videoFiles = [],
     subtitleFiles = [];

function RenomeiaRespectivo(selectedSubtitle){
  //testPrpse        if(selectedSubtitle.search())
  fsystem.rename('./test/'+selectedSubtitle+'','./test/subtitlo.srt',
  (err) => {
    err ? console.log("er: " + err) : console.log("")
})
}


function AtualizaListagemVideoSubs(nomesArquivos){
  for (let fle in nomesArquivos){ 
    let 
      actualName = nomesArquivos[fle];
        if(actualName.search(".srt")!=-1)//Se for legenda
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
    for(let subtitl in subtitleFiles){
      let
        selectedSubtitle = subtitleFiles[subtitl];        
        RenomeiaRespectivo(selectedSubtitle)  
    }

  }
}
fsystem.readdir(foldr, UsarTodosArquivos);

//rascunhos

