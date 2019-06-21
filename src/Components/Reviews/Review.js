import React, { Component } from "react";
import "../Frontpage/Mobirise Templates/assets/web/assets/mobirise-icons/mobirise-icons.css";
import "../Frontpage/Mobirise Templates/assets/tether/tether.min.css";
import "../Frontpage/Mobirise Templates/assets/bootstrap/css/bootstrap.min.css";
import "../Frontpage/Mobirise Templates/assets/bootstrap/css/bootstrap-grid.min.css";
import "../Frontpage/Mobirise Templates/assets/bootstrap/css/bootstrap-reboot.min.css";
import "../Frontpage/Mobirise Templates/assets/dropdown/css/style.css";
import "../Frontpage/Mobirise Templates/assets/theme/css/style.css";
import "../Frontpage/Mobirise Templates/assets/mobirise/css/mbr-additional.css"; 
import arnold from "../Frontpage/Mobirise Templates/assets/images/anold-240x240.jpg"
import dronning from "../Frontpage/Mobirise Templates/assets/images/dronninglol-210x316.jpg"
import oldmanpic from "../Frontpage/Mobirise Templates/assets/images/oldmanpic-240x319.jpg"
// import "../Frontpage/Mobirise Templates/assets/"




export default class Review extends Component {
  render() {
    return (
      <div>

        {/* User reviews ---------------------------------------------------- */}

        <section className="testimonials1 cid-rtKaIkMvyv" id="testimonials1-7">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 align-center">
                <h2 className="pb-3 mbr-fonts-style display-2">
                  Hvad borgerne selv siger om vores service
                </h2>
                <h3 className="mbr-section-subtitle mbr-light pb-3 mbr-fonts-style display-5">
                  Alle bruger anmeldelser er baseret på virkelige kunder*
                </h3>
              </div>
            </div>
          </div>
          <div className="container pt-3 mt-2">
            <div className="media-container-row">
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src={arnold} alt="swnigga" title />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7">
                      HomeCare er helt i top, jeg får besøg flere gange om
                      dagen. Jeg er meget tilfreds med deres service.
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">
                      Hans Larsen 64 år
                    </div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7">
                      Kunde i 4 år
                    </small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img
                        src={oldmanpic}
                        alt="oldmanpic"
                        title
                      />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7">
                      Jeg har haft HomeCare længe og jeg kan kun sige gode ting
                      om dem. De er altid smilende og utroligt hjælpsomme.
                      <br />
                      &nbsp;De hjælpere jeg har haft hos mig er altid
                      imødekommende og flittige.
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">
                      Lars Hansen 89 år
                    </div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7">
                      Kunde 2 i år
                    </small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img
                        src={dronning}
                        alt="da queen"
                        title
                      />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7">
                      Jeg bruger også selv HomeCare, da jeg mener de levere den
                      bedste service for pengene. Kan varmt anbefale(befale) at
                      benytte deres hjemmeservice
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">
                      Margrethe .2
                    </div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7">
                      Dronning og kunde i 6 år
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
