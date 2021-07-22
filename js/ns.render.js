// Elements
    const div_container = CreateElm("div")
    const inputs = new Array()
    // Append Value in input array
        for(let i = 0; i < 2; i++){
            inputs.push(Input({
                class: "input-num",
                id: `num${i + 1}`,
                placeholder: `${i + 1}º Número` ,
            }))
        }
    const btn_action = Btn({text: "Somar", class: "btn"})
    const div_result = Div({
        style: {
            borderTop: "0.1rem solid #ff9900",
            margin: "0.5rem auto",
            width: "100%"
        }
    })
// Event Listener
    btn_action.Click(()=>{
        let values = new Array()
        // Append Value in input array
        for(let v of inputs){
            values.push(v.value)
        }
        if(IsNum(values[0]) && IsNum(values[1])){
            div_result.SetHTML(`A soma entre ${values[0]} mais ${values[1]} é igual a ${ToNum(values[0]) + ToNum(values[1])}`)
        }else{
            alert("Número invalido!")
        }
    })
/* 
    Append
    in nhacScript: childElement.Append(featherElement)
*/
    div_container.Append(document.body)
    for(let inp of inputs){
        createElm.Label({text: inp.placeholder}).Append(div_container)
        inp.Append(div_container)
    }
    btn_action.Append(div_container)
    div_result.Append(div_container)