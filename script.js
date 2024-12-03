document.getElementById('formulario').addEventListener("submit", function (event){
    event.preventDefault();

    //Obter as notas inserias pelo usuário
    let nota1 = parseFloat(document.getElementById("NOTA 1").value);
    let nota2= parseFloat(document.getElementById('nota2').value);
    let nota3= parseFloat(document.getElementById('nota2').value);
    // caucular a media
    let media=( nota1 + nota2+nota3)/ 3;

    //Exibir a mensagem de resultado
    let resultadoDiv= document.getElementById('resultado');
    if(media>=6.){
        resultadoDiv.innerHTML= `<p class="aprovado">Aprovado!Sua média
        foi:${media.toFixed(2)}</p>
    }


    });