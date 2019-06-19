import React, { Component } from "react";
import "./assets/web/assets/mobirise-icons/mobirise-icons.css";
import "./assets/tether/tether.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-grid.min.css";
import "./assets/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/dropdown/css/style.css";
import "./assets/theme/css/style.css";
import "./assets/mobirise/css/mbr-additional.css";
import basis from "./assets/images/basis.jpg";
import besøgsven from "./assets/images/besøgsven.jpg";
import sygeplejerske from "./assets/images/sygeplejerske.jpg"

export default class PriceTypes extends Component {
  render() {
    return (
      <div>
     
        <section className="features13 cid-rtPhVAOsgT" id="features13-c">
          <div className="container">
            <h2 className="mbr-section-title pb-3 mbr-fonts-style align-center display-2">
              Vi tilbyder disse typer af hjemmepleje
            </h2>
            <div className="media-container-row">
              <div className="card col-12 col-md-6 align-center col-lg-4">
                <div className="card-wrap">
                  <div className="card-img">
                    <img
                      src={basis}
                      alt="basis"
                      title
                    />
                  </div>
                  <div className="card-box p-5">
                    <h4 className="card-title py-2 mbr-fonts-style align-center mbr-white display-5">
                      Basis hjemmehjælp
                    </h4>
                    <p className="mbr-text mbr-fonts-style mbr-white display-7">
                      Vi tilbyder en fast aftale om hjemmebesøg fra en af vores
                      kompetente hjemmeplejere. Plejeren hjælper med pligter
                      eller opgaver, holde husstanden, madlavning, tøjvask,
                      købmand og andre husholdningsartikler.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card col-12 col-md-6 align-center col-lg-4">
                <div className="card-wrap">
                  <div className="card-img">
                    <img src={besøgsven} alt="besøgsven" />
                  </div>
                  <div className="card-box p-5">
                    <h4 className="card-title py-2 mbr-fonts-style align-center mbr-white display-5">
                      Besøgsven
                    </h4>
                    <p className="mbr-text mbr-fonts-style mbr-white display-7">
                      Vi tilbyder sociale relationer gennem en besøgsven
                      <br />
                      Nogle patienter, der er hjemme alene, kan kræve en
                      følgesvend for at give komfort og tilsyn. Nogle ledsagere
                      kan også udføre husstandsopgaver.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card col-12 col-md-6 align-center col-lg-4">
                <div className="card-wrap">
                  <div className="card-img">
                    <img src={sygeplejerske} alt="sygeplejerske" />
                  </div>
                  <div className="card-box p-5">
                    <h4 className="card-title py-2 mbr-fonts-style align-center mbr-white display-5">
                      Sygeplejerske besøg
                    </h4>
                    <p className="mbr-text mbr-fonts-style mbr-white display-7">
                      I samråd med lægen etablerer en sygeplejerske en plan for
                      pleje. Plejen kan omfatte sårforbinding, stomipleje,
                      administration af medicin, overvågning af patientens
                      generelle helbred og anden sundhedsmæssig støtte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="pricing-table1 cid-rtPi0tBftT"
          id="pricing-tables1-d"
        >
          <div className="container">
            <div className="media-container-row">
              <div className="plan col-12 mx-2 my-2 justify-content-center col-lg-4">
                <div className="plan-header text-center pt-5">
                  <h3 className="plan-title mbr-fonts-style display-5">
                    Basis hjemmehjælp
                  </h3>
                  <div className="plan-price">
                    <span className="price-value mbr-fonts-style display-5">
                      dkk
                    </span>
                    <span className="price-figure mbr-fonts-style display-1">
                      170
                    </span>
                    <small className="price-term mbr-fonts-style display-7">
                      /måned
                    </small>
                  </div>
                </div>
                <div className="plan-body pb-5">
                  <div className="plan-list align-center">
                    <ul className="list-group list-group-flush mbr-fonts-style display-7">
                      <li className="list-group-item">
                        <br />
                      </li>
                      <li className="list-group-item">Årlig plan: 2000kr/år</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="plan col-12 mx-2 my-2 justify-content-center col-lg-4">
                <div className="plan-header text-center pt-5">
                  <h3 className="plan-title mbr-fonts-style display-5">
                    Besøgsven
                  </h3>
                  <div className="plan-price">
                    <span className="price-value mbr-fonts-style display-5">
                      dkk
                    </span>
                    <span className="price-figure mbr-fonts-style display-1">
                      120
                    </span>
                    <small className="price-term mbr-fonts-style display-7">
                      /måned
                    </small>
                  </div>
                </div>
                <div className="plan-body pb-5">
                  <div className="plan-list align-center">
                    <ul className="list-group list-group-flush mbr-fonts-style display-7">
                      <li className="list-group-item">
                        <br />
                      </li>
                      <li className="list-group-item">Årlig plan: 1200kr/år</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="plan col-12 mx-2 my-2 justify-content-center col-lg-4">
                <div className="plan-header text-center pt-5">
                  <h3 className="plan-title mbr-fonts-style display-5">
                    Sygeplejeske besøg
                  </h3>
                  <div className="plan-price">
                    <span className="price-value mbr-fonts-style display-5">
                      dkk
                    </span>
                    <span className="price-figure mbr-fonts-style display-1">
                      190
                    </span>
                    <small className="price-term mbr-fonts-style display-7">
                      /måned{" "}
                    </small>
                  </div>
                </div>
                <div className="plan-body pb-5">
                  <div className="plan-list align-center">
                    <ul className="list-group list-group-flush mbr-fonts-style display-7">
                      <li className="list-group-item">
                        <br />
                      </li>
                      <li className="list-group-item">Årlig plan: 2100kr/år</li>
                    </ul>
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
