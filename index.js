document.getElementById("button").addEventListener("click", displayWorks)
    


function displayWorks(){

    value = document.querySelector("input").value

    if (value != ""){

    const box = document.createElement("div")
    box.id = "box"
    document.body.appendChild(box);
    
    const clickerDiv = document.createElement("div")
    clickerDiv.id = "div1"
    clickerDiv.className = "group"
    const clicker = document.createElement("input")
    clicker.type = "checkbox"
    clicker.id = "checkbox"
    clickerDiv.appendChild(clicker)
    box.appendChild(clickerDiv)
    clicker.addEventListener("click",()=>{
        if (clicker.checked){
            box.style.backgroundColor ="lightgray"
        }else{
            box.style.backgroundColor ="lightgray"
        }
        
    })

    const textDiv = document.createElement("div")
    textDiv.id = "div2"
    textDiv.className = "group"
    const text = document.createElement("p")
    text.id = "texted"
    text.innerHTML = value
    textDiv.appendChild(text)
    box.appendChild(textDiv)

    const buttonDiv = document.createElement("div")
    buttonDiv.id = "div3"
    buttonDiv.className = "group"
    const button2 = document.createElement("i")
    button2.className = "fa-sharp fa-solid fa-trash fa-2x"
    button2.id = "but"

    button2.addEventListener("click", ()=>{
        document.body.removeChild(box)
    })
    buttonDiv.appendChild(button2)
    box.appendChild(buttonDiv)
    document.querySelector("input").value = ""
}
}
