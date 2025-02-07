function generate() {
    let out = Math.floor(Math.random() * 7) + 1;
    let div = document.getElementById('output');
    let colourBox = document.getElementById('colourBox');
    let button = document.getElementById('buttonOut');
    button.innerHTML+='<br><button onclick="generate()">click to play</button>'
    if (out==7){
        div.innerText=out
        div.style.textDecoration='underline'
        colourBox.style.backgroundColor='red'
    }
    else{

        div.innerText=out
                div.style.textDecoration='none'
                colourBox.style.backgroundColor='aqua'
              
    }


  }
  