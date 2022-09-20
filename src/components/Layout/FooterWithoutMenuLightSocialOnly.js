import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class FooterWithoutMenuLightSocialOnly extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <footer className={"footer footer-bar " + this.props.class}>
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © 2019-20 Landrick. Develop by{" "}
                    <a
                      href="https://themesbrand.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success"
                    >
                      Themesbrand
                    </a>
                    .
                  </p>
                </div>
              </Col>

              <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled social-icon social text-sm-right mb-0">
                  <li className="list-inline-item mb-0 ml-1">
                    <Link to="#" className="rounded mr-1">
                      <i>
                        <FeatherIcon
                          icon="facebook"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
                  </li>
                  <li className="list-inline-item mb-0 ml-1">
                    <Link to="#" className="rounded mr-1">
                      <i>
                        <FeatherIcon
                          icon="instagram"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
                  </li>
                  <li className="list-inline-item mb-0 ml-1">
                    <Link to="#" className="rounded mr-1">
                      <i>
                        <FeatherIcon
                          icon="twitter"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
                  </li>
                  <li className="list-inline-item mb-0 ml-1">
                    <Link to="#" className="rounded mr-1">
                      <i>
                        <FeatherIcon
                          icon="linkedin"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
                  </li>
                  <li className="list-inline-item mb-0 ml-1">
                    <Link to="#" className="rounded mr-1">
                      <i>
                        <FeatherIcon
                          icon="github"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </Link>
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

export default FooterWithoutMenuLightSocialOnly;
