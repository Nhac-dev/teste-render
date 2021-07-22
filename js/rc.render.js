const root = document.getElementById("root")

class Container extends React.Component{
    render() {
        return (
            <div>
                <Input id="0" placeholder="1º Número"/>
                <Input id="1" placeholder="2º Número"/>
                <Btn_Action/>
                <Result/>
            </div>
        );
    }
} 
class Input extends React.Component{
    render() {
        return (
            <div>
                <label>{this.props.placeholder}</label>
                <input id={`num`+this.props.id} className="input-num" placeholder={this.props.placeholder}/>
            </div>
        );
    }
}
class Btn_Action extends React.Component{
    constructor(){
        super()
        this.somar = ()=>{
            let value_1 = document.getElementById("num0").value 
            let value_2 = document.getElementById("num1").value
            if((value_1 < 0 || value_1 > -1) && (value_2 < 0 || value_2 > -1)){
                document.getElementById("result").innerHTML = `A soma entre ${value_1} + ${value_2} é igual a: ${Number(value_1)+Number(value_2)}`
            }else{
                alert("Me mostre um número valido!")
            }
        }
    }
    render() {
        return (
             <button className="btn" onClick={this.somar}>Somar</button>
        );
    }
}
class Result extends React.Component{
    render() {
        return (
            <div id="result" style={{borderTop: "0.1rem solid #ff9900", margin: "0.5rem auto", width: "100%"}}>
                <p></p>
            </div>
        );
    }
}

ReactDOM.render(<Container/>, root)