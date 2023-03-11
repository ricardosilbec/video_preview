console.log("page loaded...");

function playPause(videoclip) { 
var myVideo=document.getElementById(clip); 

if (videoclip.paused) 
  myVideo.play(); 

else 
  videoclip.pause(); 
} 