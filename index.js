var fsystem = require("fs");
var foldr = "./test";

const 
     videoFiles = [],
     subtitleFiles = [];

function usarTodosArquivos(err, namesOfFiles) {
  

  for (let fle in namesOfFiles){ 
    let 
      actualName = namesOfFiles[fle];
        if(actualName.search(".srt")!=-1)//Se for legenda
          subtitleFiles.push(actualName);
          else
           videoFiles.push(actualName);    
  }

  for(let video in videoFiles){
   let
    selectedVideo = videoFiles[video];

    for(let subtitl in subtitleFiles){
      let
        selectedSubtitle = subtitleFiles[subtitl];
        
//testPrpse        if(selectedSubtitle.search())
            fsystem.rename('./test/'+selectedSubtitle+'','./test/subtitlo.srt',
            (err) => {
              err ? console.log("er: " + err) : console.log("")
          })
              
  
    }
  }
}
fsystem.readdir(foldr, usarTodosArquivos);

//rascunhos

