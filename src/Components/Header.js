import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <section className="menu cid-qTkzRZLJNu" once="menu" id="menu1-0">
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
                    href="http://localhost:3000/"
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
                    href="http://localhost:3000/list"
                  >
                    <span className="mbri-numbered-list mbr-iconfont mbr-iconfont-btn" />
                    List &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="http://localhost:3000/calender"
                  >
                    <span className="mbri-calendar mbr-iconfont mbr-iconfont-btn" />
                    Kalender{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="http://localhost:3000/create"
                  >
                    <span className="mbri-edit mbr-iconfont mbr-iconfont-btn" />
                    Opret ny &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="http://localhost:3000/contact"
                  >
                    <span className="mbri-search mbr-iconfont mbr-iconfont-btn" />
                    Find os &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="http://localhost:3000/map"
                  >
                    <span className="mbri-map-pin mbr-iconfont mbr-iconfont-btn" />
                    Kort &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="http://localhost:3000/reviews"
                  >
                    <span className="mbri-like mbr-iconfont mbr-iconfont-btn" />
                    Anmeldelser
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="http://localhost:3000/guide"
                  >
                    <span className="mbri-cust-feedback mbr-iconfont mbr-iconfont-btn" />
                    Regler &nbsp; &nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-white display-4"
                    href="http://localhost:3000/pricing"
                  >
                    <span className="mbri-shopping-bag mbr-iconfont mbr-iconfont-btn" />
                    Vi tilbyder/priser
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
