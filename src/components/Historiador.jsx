import ReactDOM from "react-dom";
import React, { Component } from 'react'
import '../Styles/index.css'

export default class GeneradorDeHistoria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historia: [],
      id: this.props.id,
      letra: this.props.letra,
      mostrar: true

    }
    this.escogera = this.escogera.bind(this)
    this.escogerb = this.escogerb.bind(this)
  }

  escogera = () => {



    this.setState({ id: this.state.id + 1, letra: "a" })

  }
  escogerb = () => {



    this.setState({ id: this.state.id + 1, letra: "b" })


  }


  componentDidMount() {
    alert("escoge Con sabiduria")

  }
  componentDidUpdate() {
    if (this.state.id < 5) {

      ReactDOM.render(<p className="recordatorio">Opcion anterior{" " + this.state.letra}</p>, document.getElementById("caso"))
    }
  }

  componentWillUnmount() {

    alert("Has sido muy sabio")
  }


  render() {

    if (this.state.id >= 6) {
      this.componentWillUnmount()

      return (<div id="caso" className="layout"><h1 className="historia" key="1"> Ayos</h1>
        <p className="recordatorio" key="2">FIN</p></div>
      )
    } else {

      return (

        <div className="layout">
          <h2 className="historia">{this.props.historia.find(coso => (coso.id === this.state.id.toString() + this.state.letra)).historia}</h2>
          <div className="opciones">

            <button onClick={this.escogera} id="a" className="botones">a</button>
            <p className="opcion">{this.props.historia.find(coso => (coso.id === this.state.id.toString() + this.state.letra)).opciones.a}</p>
            <button id="b" className="botones" onClick={this.escogerb}>b</button>
            <p className="opcion">{this.props.historia.find(coso => (coso.id === this.state.id.toString() + this.state.letra)).opciones.b}</p>
          </div>
          <div id="caso"></div>
        </div>
      )
    }


  }
}
