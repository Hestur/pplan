import React, { Component } from "react";
import "./assets/web/assets/mobirise-icons/mobirise-icons.css";
import "./assets/tether/tether.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-grid.min.css";
import "./assets/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/dropdown/css/style.css";
import "./assets/theme/css/style.css";
import "./assets/mobirise/css/mbr-additional.css"; 
import arnold from "./assets/images/anold-240x240.jpg"
import dronning from "./assets/images/dronninglol-210x316.jpg"
import oldmanpic from "./assets/images/oldmanpic-240x319.jpg"





export default class Review extends Component {
  render() {
    return (
      <div>

        {/* User reviews ---------------------------------------------------- */}


        <section className="menu cid-qTkzRZLJNu" once="menu" id="menu1-5">
          <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="hamburger">
                <span />
                <span />
                <span />
                <span />
              </div>
            </button>
            <div className="menu-logo">
              <div className="navbar-brand">
                <span className="navbar-caption-wrap">
                  <a
                    className="navbar-caption text-secondary display-2"
                    href="http://localhost:3000"
                  >
                    HomeCare
                  </a>
                </span>
              </div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav-dropdown nav-right"
                data-app-modern-menu="true"
              >
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="https://localhost:3000/list"
                  >
                    <span className="mbri-numbered-list mbr-iconfont mbr-iconfont-btn" />
                    List &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="https://localhost:3000/calender"
                  >
                    <span className="mbri-calendar mbr-iconfont mbr-iconfont-btn" />
                    Kalender{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="https://localhost:3000/create"
                  >
                    <span className="mbri-edit mbr-iconfont mbr-iconfont-btn" />
                    Opret ny &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="https://localhost:3000/contact"
                  >
                    <span className="mbri-search mbr-iconfont mbr-iconfont-btn" />
                    Find os &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="https://localhost:3000/map"
                  >
                    <span className="mbri-map-pin mbr-iconfont mbr-iconfont-btn" />
                    Kort &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="https://localhost:3000/reviews"
                  >
                    <span className="mbri-cust-feedback mbr-iconfont mbr-iconfont-btn" />
                    Anmeldelser{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="https://localhost:3000/guide"
                  >
                    <span className="mbri-like mbr-iconfont mbr-iconfont-btn" />
                    Regler &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="https://localhost:3000/pricing"
                  >
                    <span className="mbri-shopping-bag mbr-iconfont mbr-iconfont-btn" />
                    Vi tilbyder/priser
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>


        {/* Social media ----------------------------------------------------------- */}

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
                      Dronning kunde i 6 år
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
