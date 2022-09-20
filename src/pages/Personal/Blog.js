// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import img1 from "../../assets/images/client/upwork.svg";
import img2 from "../../assets/images/client/fiver.png";
//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import BlogBox from "../../components/Shared/BlogBox";

// import images
import personal01 from "../../assets/images/personal/1.jpg";
import personal02 from "../../assets/images/personal/2.jpg";
import personal03 from "../../assets/images/personal/3.jpg";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          image: personal01,
          title: "Design your apps in your own way",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 2,
          image: personal02,
          title: "How apps is changing the IT world",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
        {
          id: 3,
          image: personal03,
          title: "Smartest Applications for Business",
          like: "33",
          comment: "08",
          autor: "Calvin Carlo",
          date: "13th August, 2019",
        },
      ],
      Contactvisible: false,
      partners: [
        {
          image: img1,
          href: "https://www.upwork.com/freelancers/~01fe9079a582e4747e?viewMode=1",
        },
        {
          image: img2,
          href: "https://www.fiverr.com/abrarzahid925?up_rollout=true",
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container className="mt-100 mt-60" id="contact">
            {/* section title */}
            <SectionTitle isLeft={true} title="Contact Me" />
            <section className="py-4 border-bottom border-top border-right border-left">
              <Container>
                <Row className="justify-content-center">
                  {this.state.partners.map((partner, key) => (
                    <Col
                      lg={2}
                      md={2}
                      xs={6}
                      key={key}
                      className="text-center py-4"
                    >
                      <a href={partner.href} target="blank">
                        <img
                          src={partner.image}
                          className="avatar avatar-ex-sm"
                          alt="Landrick"
                        />
                      </a>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
            <Row>
              <Col lg="4" md="6" className="mt-4 pt-2">
                <Card className="rounded shadow border-0">
                  <CardBody className="py-5">
                    <h4>Get In Touch !</h4>
                    <div className="custom-form mt-3">
                      <div id="message"></div>

                      <Form
                        method="post"
                        onSubmit={this.handleSubmit}
                        name="contact-form"
                        id="contact-form"
                      >
                        <Row>
                          <Col md="12">
                            <FormGroup className="position-relative">
                              <Label>
                                My Name:{" "}
                                <span className="text-primary">
                                  Abrar Zahid
                                </span>
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="12">
                            <FormGroup>
                              <Label>
                                My Email:{" "}
                                <span className="text-primary">
                                  abrar.zahid050@gmail.com
                                </span>
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="12">
                            <FormGroup>
                              <Label>
                                WhatsApp:{" "}
                                <span className="text-primary">
                                  +92 3364073936
                                </span>
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="8" md="6" className="pl-md-3 pr-md-3 mt-4 pt-2">
                <Card className="border-0 shadow rounded">
                  <div className="map map-height-two map-gray">
                    <iframe
                      title="abrar zahid"
                      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=faisal town 357 block C&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      style={{ border: 0 }}
                      className="rounded"
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
