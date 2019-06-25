import React from "react";
import "./Mobirise Templates/assets/web/assets/mobirise-icons/mobirise-icons.css";
import "./Mobirise Templates/assets/tether/tether.min.css";
import "./Mobirise Templates/assets/bootstrap/css/bootstrap.min.css";
import "./Mobirise Templates/assets/bootstrap/css/bootstrap-grid.min.css";
import "./Mobirise Templates/assets/bootstrap/css/bootstrap-reboot.min.css";
import "./Mobirise Templates/assets/dropdown/css/style.css";
import "./Mobirise Templates/assets/theme/css/style.css";
import "./Mobirise Templates/assets/mobirise/css/mbr-additional.css";

export default class Frontpage extends React.Component {
  render() {
    return (
      <div>
        <section
          className="cid-qTkA127IK8 mbr-fullscreen mbr-parallax-background"
          id="header2-1"
        >
          <div
            className="mbr-overlay"
            style={{ opacity: "0.8", backgroundColor: "rgb(178, 204, 210)" }}
          />
          <div className="container align-center">
            <div className="row justify-content-md-center">
              <div className="mbr-white col-md-10">
                <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
                  <span style={{ fontWeight: "normal" }}>
                    <em>Privat Hjemmepleje hos </em>
                  </span>
                  HomeCare
                  <br />
                </h1>
                <p className="mbr-text pb-3 mbr-fonts-style display-5">
                  Hvad enten, det er handicaphjælp, hjemmehjælp, hjemmesygepleje
                  eller rehabilitering foregår den bedste pleje på borgerens
                  præmisser.
                </p>
                <div className="mbr-section-btn">
                  <a
                    className="btn btn-md btn-secondary-outline display-4"
                    href="http://localhost:3000/guide"
                  >
                    Læs mere
                  </a>
                  <a
                    className="btn btn-md btn-primary-outline display-4"
                    href="http://localhost:3000/contact"
                  >
                    Find os
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
