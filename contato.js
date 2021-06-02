var set1 = 0;
var set2 = 0;

window.onload = () => {
    login.onsubmit = () => {
      console.log({ id: id.value, mensagem: senha.value });
      return true;
    };
};

function btn_techlink(){   
    set1++;
    if (set1>=1){
        set1 = 1;
    }        
    if_contato();
}

function x_techlink(){
    set1--;   
    if_contato();
}

function if_contato(){
    let x = document.getElementById("contate-techlink");
    let y = document.getElementById("contate-contratante");
      
    if (set1 == 1){
         x.style.display = "block";
    }  else {
        x.style.display = "none";
    }
    if (set2 == 1){
        y.style.display = "block";
    }  else {
        y.style.display = "none";
    }  
}

function btn_contratante(){   
    set2++;
    if (set2>=1){
        set2 = 1;
    }  
    if_contato();
}

function x_contratante(){
    set2--;   
    if_contato();
}

function enviado() {
    var inputId= document.getElementById("txtid");
    var inputNome= document.getElementById("txtnome");
    var inputMsg= document.getElementById("txtmsg");
    
    localStorage.setItem("ID", inputId.value);
    localStorage.setItem("Nome", inputNome.value);
    localStorage.setItem("Mensagem", inputMsg.value);
    
};






/*function btn_contratante(){
    let y = document.getElementById("contate-contratante");
    if (y.style.display == "none"){
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function btn_contratante(){
    let y = document.getElementById("contate-contratante");
    if (y.style.display == "none"){
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}*/



