var audio=document.getElementById("audio");var video=document.getElementById("video");function Continue(){audio.volume=0.1;audio.play()
    video.play()}
    document.onkeydown=function(e){if(event.keyCode==123){return false;}
    if(e.ctrlKey&&e.shiftKey&&e.keyCode=="I".charCodeAt(0)){return false;}
    if(e.ctrlKey&&e.shiftKey&&e.keyCode=="C".charCodeAt(0)){return false;}
    if(e.ctrlKey&&e.shiftKey&&e.keyCode=="J".charCodeAt(0)){return false;}
    if(e.ctrlKey&&e.keyCode=="U".charCodeAt(0)){return false;}}
    var divider=document.getElementById("divider");var links=document.querySelectorAll("a");links.forEach(function(element){element.addEventListener("mouseover",function(event){divider.style="margin: auto; width: 90%; background: #fff; box-shadow: 0px 0px 12px #CCCCCC;";});});links.forEach(function(element){element.addEventListener("mouseout",function(event){divider.style="margin: auto; width: 90%; background: #9e9e9e;";});});document.addEventListener('contextmenu',event=>event.preventDefault());function Home(){window.location.href='/';}
    const img=document.querySelector('img')
    img.setAttribute("draggable",false);