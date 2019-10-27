function testar(){
    let input1 = document.querySelector("#crm").value;
    let input2 = document.querySelector("#uf").value;
    let form = document.querySelector("#formulario");

    let expressao1 = new RegExp(/\d{3}\.\d{3}-\d/g);
    let expressao2 = new RegExp(/RS|SC|PR/g);

    if(expressao1.test(input1) == true && expressao2.test(input2) == true){
        alert('Tudo certo!');
    }
    else{
        alert('Ta tudo cagado!');
    }

}