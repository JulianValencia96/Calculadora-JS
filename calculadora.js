function renderizarGUI(){
    //crear elementos
    const divCalculadora = document.createElement("div");

    //Agregar atributos
    divCalculadora.setAttribute("id","calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style","width:50%; margin:0px auto;");
    //Insertar elemento en el DOM
    document.body.appendChild(divCalculadora);

    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id","divPantalla");
    divCalculadora.appendChild(divPantalla);

    const divBotones = document.createElement("div");
    divBotones.setAttribute("id","botones");
    divCalculadora.appendChild(divBotones);

    const pantalla = document.createElement("input");
    pantalla.setAttribute("id","pantalla");
    pantalla.setAttribute("type","text");
    pantalla.setAttribute("value","0");
    pantalla.setAttribute("disabled","true");
    pantalla.setAttribute("class","form-control text-right")

    divPantalla.appendChild(pantalla);
}

renderizarGUI();