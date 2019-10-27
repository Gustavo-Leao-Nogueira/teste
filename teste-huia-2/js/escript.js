function testar(){
    let input1 = document.querySelector("#crm").value;
    let input2 = document.querySelector("#uf").value;
    let form = document.querySelector("#formulario");
    let dialogo = document.querySelector(".dialog");
    let frase = document.querySelector("body > div > div.dialog > p");

    let expressao1 = new RegExp(/\d{3}\.\d{3}-\d/g);
    let expressao2 = new RegExp(/RS|SC|PR/g);

    if(expressao1.test(input1) == true && expressao2.test(input2) == true){
        event.preventDefault();  
        frase.innerHTML = 'Tudo certo!';
        dialogo.style.display="block";
        dialogo.style.background="green";
    }
    else{
        event.preventDefault();     
        frase.innerHTML = 'Tente digitar um CRM válido ou selecione um Uf  na lista!';
        dialogo.style.display="block";   
        dialogo.style.background="red";
    }

}