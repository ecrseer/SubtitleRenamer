var fsystem = require("fs");
var foldr = "./test";

const 
     videoFiles = [],
     subtitleFiles = [];

function RelataErro(err){ 
    err ? console.log("er: " + err) : console.log("")

}

function RenomeiaRespectivo(selectedSubtitle,selectedVideo){
  let
    numerosDoVid =
     selectedVideo.replace(/\D+/g, "");

   if(selectedSubtitle.search(numerosDoVid)){
      /* fsystem.rename('./test/'+selectedSubtitle+'',
        './test/'+'removeNum'+'',
        RelataErro); */
      console.log(selectedSubtitle);
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
    for(let subtitl in subtitleFiles){
      let
        selectedSubtitle = subtitleFiles[subtitl];        
        RenomeiaRespectivo(selectedSubtitle,selectedVideo);
    }

  }
}
fsystem.readdir(foldr, UsarTodosArquivos);

//rascunhos

