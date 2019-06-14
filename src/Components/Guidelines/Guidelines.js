import React, { Component } from "react";
import oldman from './gammel.jpg'

export default class Guide extends Component {
  render() {
    return (
      <main className="main">
            <img src={oldman} alt="oldman" className="oldman"/>
        <section className="rules">
        <h2>Regler i hjemmeplejen</h2>
            <div className="borger">
              <h5>Borger</h5>
              <p>
                Ifølge servicelovens §83 kan du som borger vælge frit, om det er
                den kommunale eller private hjemmepleje, der varetager
                ydelserne, du modtager.
              </p>
            </div>
            <div className="pårørende">
              <h5>Pårørende</h5>
              <p>
                Vi bestræber os på at få et meget tæt samarbejde med de
                pårørende til vores borgere. Det øger kvaliteten af vores
                hjemmepleje.
              </p>
            </div>
            <div className="kommuner">
              <h5>Kommuner</h5>
              <p>
                Pt. yder vi hjemmepleje, dvs. hjemmehjælp, sygepleje og
                rehabilitering i Københavns, Hvidovre, Gladsaxe, Gentofte og
                Tårnby kommune - og i samarbejde med Hauskrankenpflege der
                Deutschland også i Berlin.
              </p>
            </div>
            <div className="døgnåbent">
              <h5>Døgnåbent</h5>
              <p>
                Vi yder hjælp 24 timer i døgnet 365 dage om året. Har du brug
                for akut hjælp, kommer vi med det samme. Du kan altid komme i
                kontakt med os, når du har behov.
              </p>
            </div>
            <div className="fasthjemmehjælp">
              <h5>Fast hjemmehjælp</h5>
              <p>
                Samme hjemmeplejere kommer hos dig hver dag. Sygefraværet i
                Human Care ligger helt i bund ift. andre aktører i den danske
                plejesektor, men skulle en medarbejder blive syg, har vi 100%
                dækningsgaranti og stiller med en kvalificeret vikar.
              </p>
            </div>
            <div className="fastbesøgstid">
              <h5>Faste besøgstider</h5>
              <p>
                Vi kommer på de samme tidspunkter hver dag. Ad hoc-ændringer til
                dagsrytmen imødekommer vi gerne og hos os er en aftale en aftale
                hver gang
              </p>
            </div>
          
        </section>
      </main>
    );
  }
}
