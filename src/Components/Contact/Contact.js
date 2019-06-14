import React, { Component } from "react";



class Contact extends Component {
  render() {
    return (
      <main className="main">
        <section className="info">
          <div className="åbningstider">
            <h4>Office phone hours</h4>
            <p>Mon-Fri: 8:00-18:00</p>
            <p>Saturdays: 10:00-21:00</p>
            <p>Sundays: 10:00-16:00</p>
            <p />
          </div>
          <div className="adresse">
            <h4>Find os</h4>
            <br />
            <div className="aarhus">
              <h5>Århus</h5>
              <p>Adresse: hestevejen 20</p>
              <p>Postnr: 7000</p>
              <p>Danmark</p>
              <p />
            </div>
            <div className="kbh">
              <h5>København</h5>
              <p>Adresse: hestegade 29</p>
              <p>Postnr: 9000</p>
              <p>Danmark</p>
              <p />
            </div>
            <div className="berlin">
              <h5>Berlin</h5>
              <p>Adresse: hesteStraße 9</p>
              <p>Postnr: 10115</p>
              <p>Germany</p>
            </div>
          </div>
          <div className="links">
            <p>
              Telefon: <a href="88888888">88888888</a>
            </p>
            <p>
              E-mail: <a href="info@HomeHelper.com">info@HomeHelper.com</a>
            </p>
          </div>
        </section>
      </main>
    );
  }
}
export default Contact;
