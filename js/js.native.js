// Elements
    const div_container = document.createElement("div")
    const div_result = document.createElement("div")
    const inputs = [
        document.createElement("input"),
        document.createElement("input")
    ]
    const labels = [
        document.createElement("label"),
        document.createElement("label")  
    ]
    const btn_action = document.createElement("button")
// Set attr
    // Class
        for (let inp in inputs) {
            let placeholder_text = `${Number(inp) + 1}º Número`
            inputs[inp].classList.add("input-num")
            inputs[inp].id = "num"+inp
            inputs[inp].placeholder = placeholder_text
            
            labels[inp].innerText = placeholder_text

            div_container.appendChild(labels[inp])
            div_container.appendChild(inputs[inp])
        }
    // Text/Placeholder
        btn_action.innerText = "Somar"
        btn_action.classList.add("btn")
    // Style
        div_result.style.borderTop = "0.1rem solid #ff9900"
        div_result.style.margin = "0.5rem auto"
        div_result.style.width = "100%"
    // Event Listener
        btn_action.addEventListener("click", ()=>{
            let value_1 = inputs[0].value 
            let value_2 = inputs[1].value
            // Verify if is a valid number
            if((value_1 < 0 || value_1 > -1) && (value_2 < 0 || value_2 > -1)){
                div_result.innerHTML = `A soma entre ${value_1} + ${value_2} é igual a: ${Number(value_1)+Number(value_2)}`
            }else{
                alert("Me mostre um número valido!")
            }
        })

/* 
    Append Child in Feather component
    feater.appendChild(child)
*/
    div_container.appendChild(btn_action)
    div_container.appendChild(div_result)
    document.body.appendChild(div_container)