function generate() {
    let out = Math.floor(Math.random() * 7) + 1;
    if (out==7){
        let div = document.getElementById('output');
        div.innerText=out
        div.style.textDecoration='underline'
    
    }
    else{
        let div = document.getElementById('output');
        div.innerText=out
                div.style.textDecoration='none'
              
    }


  }
  