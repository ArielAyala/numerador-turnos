import React, { Component } from "react";

class Numerador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Turnos: {
        TurnoCredito: 0,
        TurnoDesembolso: 0
      }
    };
  }

  aumentarNumerador = opcion => {
    if (opcion === "creditos") {
      const nuevoTurnos = { ...this.state.Turnos };
      console.log("Nuevos turnos", nuevoTurnos);
      nuevoTurnos.TurnoCredito = this.state.Turnos.TurnoCredito + 1;
      this.setState({ Turnos: nuevoTurnos });
    }
    if (opcion === "desembolso") {
      const nuevoTurnos = { ...this.state.Turnos };
      nuevoTurnos.TurnoDesembolso = this.state.Turnos.TurnoDesembolso + 1;
      this.setState({ Turnos: nuevoTurnos });
    }
  };

  render() {
    return (
      <div className="numerador-container">
        <div className="creditos-container opcion-container">
          <label className="textos">Créditos</label>
          <button
            className="botones textos"
            onClick={() => this.aumentarNumerador("creditos")}
          >
            {/* {this.state.TurnoCredito} */}
            {this.state.Turnos.TurnoCredito}
          </button>
        </div>
        <div className="desembolso-container opcion-container">
          <label className="textos">Desembolso</label>
          <button
            className="botones textos"
            onClick={() => this.aumentarNumerador("desembolso")}
          >
            {/* {this.state.TurnoDesembolso} */}
            {this.state.Turnos.TurnoDesembolso}
          </button>
        </div>
      </div>
    );
  }
}

export default Numerador;
