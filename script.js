console.log("i am working")
var songindex= 0;
let playcard=document.getElementsByClassName('playcard');
let icon=document.getElementById('icons')
console.log(icon)


let songs = [
    { songname: "Travis Scott - 1", filepath: "Travis Scott - 1.mp3", coverpath: "1.jpg" },
    { songname: "Travis Scott - 2", filepath: "Travis Scott - 2.mp3", coverpath: "2.jpg" },
     { songname: "Travis Scott - 3", filepath: "Travis Scott - 3.mp3", coverpath: "3.jpg" },
      { songname: "Travis Scott - 4", filepath: "Travis Scott - 4.mp3", coverpath: "4.jpg" },
       { songname: "Travis Scott - 5", filepath: "Travis Scott - 5.mp3", coverpath: "5.jpg" },
        { songname: "Travis Scott - 6", filepath: "Travis Scott - 6.mp3", coverpath: "6.jpg" }, 
        { songname: "Travis Scott - 7", filepath: "Travis Scott - 7.mp3", coverpath: "8.jpg" },
         { songname: "Travis Scott - 8", filepath: "Travis Scott - 8.mp3", coverpath: "8.jpg" },
          { songname: "Travis Scott - 9", filepath: "Travis Scott - 9.mp3", coverpath: "9.jpg" },
          { songname: "Travis Scott - 10", filepath: "Travis Scott - 10.mp3", coverpath: "10.jpg" }
];
console.log(songs[songindex].filepath)
let audioelement= new Audio(songs[songindex].filepath) 
   let play=icon.querySelector('#pay')
     play.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play()
        
    }
    
   }
)
let pause=icon.querySelector('#pus')
     pause.addEventListener('click',()=>{
    if(audioelement.played||audioelement.currentTime>=0){
        audioelement.pause()
    }
    
   }
)

   let pev=icon.querySelector('#back');
pev.addEventListener('click',()=>{
    audioelement.pause()
if(songindex==0){
    songindex=9;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
else{
    songindex=songindex-1;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
console.log(songindex);

audioelement=new Audio(songs[songindex].filepath);
audioelement.play();
})

let dpev=icon.querySelector('#dback');
dpev.addEventListener('click',()=>{
    audioelement.pause()
if(songindex==1){
    songindex=9;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
else if(songindex==0){
    songindex=8;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
else{
    songindex=songindex-2;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
console.log(songindex);

audioelement=new Audio(songs[songindex].filepath);
audioelement.play();
})

let fow=icon.querySelector('#fow');
fow.addEventListener('click',()=>{
    audioelement.pause()
if(songindex==9){
    songindex=0;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
//    photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
else{
    songindex=songindex+1;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
console.log(songindex);

audioelement=new Audio(songs[songindex].filepath);
audioelement.play();
})

let dfow=icon.querySelector('#dfow');
dfow.addEventListener('click',()=>{
    audioelement.pause()
if(songindex>=9){
    songindex=1;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
else if(songindex==8){
    songindex=0;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src="songs[songindex].coverpath" alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
else{
    songindex=songindex+2;
    let playdetail=document.getElementsByClassName('playdetails')
   let photo= playdetail[0].querySelector('#photo');
   photo.innerHTML='<img id="playing" src=songs[songindex].coverpath alt="photo" width="100px" />'
   let nphoto= playdetail[0].querySelector('#nphoto');
   nphoto.innerHTML='<img id="playing" src=songs[songindex+1].coverpath alt="photo" width="100px" />'
}
console.log(songindex);

audioelement=new Audio(songs[songindex].filepath);
audioelement.play();
})
myprogressbar=document.getElementById('probar');
 myprogressbar.addEventListener('change',()=>{
     audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
     
 })
 
 audioelement.addEventListener('timeupdate',()=>{
     console.log('timepudate');
     progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
     console.log(progress);
     
     myprogressbar.value=progress;
 })