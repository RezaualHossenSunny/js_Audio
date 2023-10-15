for( var i=0; i<2; i++){
    document.querySelectorAll(".mybtn")[i].addEventListener('click',function(){
      
        var text=this.innerHTML
        console.log(text);
        audio(text);
        
       

        
     
    });
}

function audio(text){
    switch(text){
        case "Song One":
            var audio=new Audio("audio/s1.mp3");
            audio.play();
            break;

            case "Song two":
                var audio=new Audio("audio/s2.mp3");
                audio.play();
                break;
    }
}

