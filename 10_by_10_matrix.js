
function pulaLinha(){
    console.log("<br>");
}

function montaMatriz(elemento){
    for(var linha = 1; linha <= 10; linha++){
        for(var coluna = 1; coluna <= 10; coluna++){
            console.log(elemento);
        }
        pulaLinha();
    }
}

var elementoDaMatriz = parseString(prompt("Informe o elemento que montará a matriz 10x10:"));
montaMatriz(elementoDaMatriz);