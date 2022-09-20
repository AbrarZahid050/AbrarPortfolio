import React, { Component } from "react";

// import Typist from "react-typist";
import Typist from "react-text-typist";
import { Container, Row, Col } from "reactstrap";

import ScrollspyNav from "./ScrollspyNav";
import profilePic from "../../assets/images/client/profilePic.png";
import bg01 from "../../assets/images/personal/bg01.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home rtl-personal-hero  d-flex align-items-center"
          style={{
            // background: `url${bg01} center center`,
            // backgroundColor: "black",
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(40,51,83,1) 30%, rgba(0,198,255,1) 100%)",
          }}
          id="home"
        >
          <Container>
            <Row className="align-items-center justify-content-center d-flex">
              {/* <Col lg="12" md="9" sm="12" xs="12"> */}
              <div className="title-heading mt-4" style={{ color: "white" }}>
                <h1 className="display-3 font-weight-bold mb-3">
                  Hi, I'm
                  <br />
                  <Typist
                    sentences={[
                      "Abrar Zahid",
                      "FullStack Dev",
                      "MERN Stack Dev",
                    ]}
                    loop={true}
                  />
                </h1>
                <p className="para-desc " style={{ color: "white" }}>
                  I am professional web-developer and have experience in
                  designing fully responsive website for mobile app.
                </p>
                <div className="mt-4 pt-2">
                  {/* <ScrollspyNav
                    scrollTargetIds={["portfolio", "contact"]}
                    activeNavClass="active"
                    scrollDuration="800"
                    headerBackground="true"
                  > */}
                  <a
                    href="#portfolio"
                    className="btn btn-primary mt-2 mr-2 mouse-down"
                  >
                    <i className="mdi mdi-camera"></i> Portfolio
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-outline-primary mt-2 mouse-down ml-1"
                  >
                    <i className="mdi mdi-cloud-download">Hire me </i>
                  </a>
                  {/* </ScrollspyNav> */}
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
