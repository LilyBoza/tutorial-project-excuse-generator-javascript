window.onload = ()=>{
    // aquí se define el evento para que al oprimir el boton se cambie la excusa
    document.querySelector('#buttonExcuse').addEventListener("click", () =>{
        // con innerHTML logro escribir sobre el HTML para colocar la nueva frase
      document.querySelector('#excuse').innerHTML = NewPhrase();
    })
}

// Se crea la función que dará las excusas random
function NewPhrase(){
    // aquí se definen los diferentes arreglos con las frases que tienen la excusa
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    
    // se utiliza el Math.floor(Math.random() para obtener el valor random entero 
        // e ir cambiando el index de los diferentes arreglos

    let WhoIndx = Math.floor(Math.random() * who.length);   
    let actionIndx = Math.floor(Math.random() * action.length);  
    let WhatIndx = Math.floor(Math.random() * what.length);  
    let WhenIndx = Math.floor(Math.random() * when.length);
    
    return who[WhoIndx]+ ' '+action[actionIndx]+ ' '+what[WhatIndx]+' '+when[WhenIndx];

}

