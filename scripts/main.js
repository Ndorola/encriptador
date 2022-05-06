
//FUNCION PARA MOSTRAR MENSAJE + BOTON COPIAR
function showMessage(text) {
    var container = document.getElementById("container")
    var newContainer = container.innerHTML="<div class='containerMessage'>" + "<textArea id='textCopy' value='textCopy' disabled class='showText'>" + text + "</textArea>" + "<button onclick='copy()' id='buttonCopy' class='buttonCopy'>Copiar</button>" + "</div>" 

    container.appendChild(newContainer)
}

//FUNCION PARA COPIAR TEXTO A PORTAPAPELES
function copy() {
        console.log("hola")
        var copyText = document.getElementById("textCopy")
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        .then(() => {
            alert("Mensaje copiado! :)")
        })
        .catch(() => {
            alert("Algo salió mal! :(")
        })
        var clean = document.getElementById("textEntered");
        clean.value = "";
}

//FUNCION PARA CODIFICAR
function encrypt() {
    var buttonEncrypt = document.getElementById("buttonEncrypt")
    buttonEncrypt.addEventListener("click", (e) => {
        var text = document.getElementById("textEntered").value.toLowerCase()
        var encrypted = []
        var message = false
    
        for(var position = 0; position < text.length; position++) {
            if(text[position] == "a") {
                encrypted.push("ai")
            } 
            else if(text[position] == "e") {
                encrypted.push("enter")
            }
            else if(text[position] == "i") {
                encrypted.push("imes")
            }
            else if(text[position] == "o") {
                encrypted.push("ober")
            }
            else if(text[position] == "u") {
                encrypted.push("ufat")
            }
            else {
                encrypted.push(text[position])
            }

            message = true
        }
        if(message == true) {
            showMessage(encrypted.join(''))
        } 
    })
}

//FUNCION PARA DECODIFICAR
function decrypt() {
    var buttonDecrypt = document.getElementById("buttonDecrypt")
    buttonDecrypt.addEventListener("click", (e) => {
        var text = document.getElementById("textEntered").value.toLowerCase() 
        var newText = []
        var message = true

        for (let i = 0; i < text.length; i++) {
            if(text[i] === "a" && text[i + 1] === "i") {
                newText.push("a")
                i += 1
            } else if(text[i] === "e" && text[i + 4] === "r") {
                newText.push("e")
                i += 4
            } else if(text[i] === "i" && text[i + 3] === "s") {
                newText.push("i")
                i += 3
            } else if(text[i] === "o" && text[i + 3] === "r") {
                newText.push("o")
                i += 3
            } else if(text[i] === "u" && text[i + 3] === "t") {
                newText.push("u")
                i += 3
            } else {
                newText.push(text[i])
            }
        }

        if(message == true) {
            showMessage(newText.join(''))
        } 
    })
}

encrypt()
decrypt()
