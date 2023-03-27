var botones=["7","8","9","+","4","5","6","-","1","2","3","*","0",".","=","/"];

function renderizarGUI(){
    //crear elementos
    const divCalculadora = document.createElement("div");

    //Agregar atributos
    divCalculadora.setAttribute("id","calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style","width:50%; margin:0px auto; background-color: aqua; border:1px solid white; border-radius: 5px; padding:18px; margin-top:30px;");
    //Insertar elemento en el DOM
    document.body.appendChild(divCalculadora);

    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id","divPantalla");
    divCalculadora.appendChild(divPantalla);

    const pantalla = document.createElement("input");
    pantalla.setAttribute("id","pantalla");
    pantalla.setAttribute("type","text");
    pantalla.setAttribute("value","0");
    pantalla.setAttribute("disabled","true");
    pantalla.setAttribute("class","form-control text-right")

    divPantalla.appendChild(pantalla);

    const divBotones = document.createElement("div");
    divBotones.setAttribute("id","botones");
    divBotones.setAttribute("style", "padding:15px;");
    divCalculadora.appendChild(divBotones);

    for(let i=0;i<botones.length;i++){
        if(i%4==0){
            const divFila = document.createElement("div");
            divFila.setAttribute("class","row");
            divBotones.appendChild(divFila);

        }
        let boton = document.createElement("button");
        boton.setAttribute("id","boton"+botones[i]);
        boton.setAttribute("class","btn btn-primary col-3 border-white");
        boton.innerHTML = botones[i];
        divBotones.appendChild(boton);

        boton.addEventListener("click", function(){
            procesarEvento(boton);
         });
   
    }


    const botonBorrar = document.createElement("button");
    botonBorrar.setAttribute("class", "btn btn-danger col-3");
    botonBorrar.setAttribute("style","font-weight:bold; color:gray; position:relative; top:0px; right:205px;");
    botonBorrar.innerHTML = "C";
    divBotones.appendChild(botonBorrar);


    botonBorrar.addEventListener("click", function(){
        LimpiarPantalla();
     });
}


function procesarEvento(boton){
    let Mipantalla = document.getElementById("pantalla");
       if(Mipantalla.value=="C"){
        console.log("Borrar");
    }
    if(Mipantalla.value=="0"){
        Mipantalla.value="";
    }
    if(boton.innerHTML!="="){
        Mipantalla.value+= boton.innerHTML; 
    }else
        {
        //Evaluando expresiones con math.js
        try{
            let resultado = math.evaluate(Mipantalla.value);
            Mipantalla.value = resultado;   
        }catch{
            Mipantalla.value = "";
        }
    }
 
    
}

function LimpiarPantalla(){
    pantalla.value="0";
}

renderizarGUI();