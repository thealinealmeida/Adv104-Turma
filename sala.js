const firebaseConfig = {




    
}





inicializar();
function inicializar(){

    const nomeUsuario = localStorage.getItem("nomeUsuario");
    console.log(nomeUsuario);
    //colocar nome na tela
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";

}


function addSala(){
    const nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);

}