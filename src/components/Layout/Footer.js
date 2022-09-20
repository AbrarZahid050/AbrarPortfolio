import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import americanEx from "../../assets/images/payments/american-ex.png";
import discover from "../../assets/images/payments/discover.png";
import masterCard from "../../assets/images/payments/master-card.png";
import paypal from "../../assets/images/payments/paypal.png";
import visa from "../../assets/images/payments/visa.png";
// import { FiChevronLeft } from "react-icons/fi";
import { SiUpwork, SiFiverr, SiDiscord } from "react-icons/si";

//Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "About us", link: "/page-aboutus" },
        { title: "Services", link: "/page-services" },
        { title: "Team", link: "/page-team" },
        { title: "Pricing", link: "/page-pricing" },
        { title: "Project", link: "/page-work" },
        { title: "Careers", link: "/page-jobs" },
        { title: "Blog", link: "/page-blog" },
        { title: "Login", link: "/page-cover-login" },
      ],
      grid2: [
        { title: "Terms of Services", link: "/page-terms" },
        { title: "Privacy Policy", link: "/page-privacy" },
        { title: "Documentation", link: "/documentation" },
        { title: "Changelog", link: "/changelog" },
        { title: "Components", link: "/components" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © 2021-22 . Develop by{" "}
                    <a
                      href="https://www.upwork.com/freelancers/~01fe9079a582e4747e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success"
                    >
                      Abrar Zahid
                    </a>
                    .
                  </p>
                </div>
              </Col>

              <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item ml-1">
                    <a
                      href="https://github.com/abrarzahid050"
                      className="rounded"
                      target="blank"
                    >
                      <i>
                        <FeatherIcon
                          icon="github"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </a>
                  </li>

                  <li className="list-inline-item ml-1">
                    <a
                      target="blank"
                      href="https://www.fiverr.com/abrarzahid925?up_rollout=true"
                    >
                      <i>
                        <SiFiverr />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item ml-1">
                    <a
                      href="https://www.upwork.com/freelancers/~01fe9079a582e4747e"
                      className="rounded"
                      target="blank"
                    >
                      <i>
                        <SiUpwork className="fea icon-sm fea-social" />
                      </i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
