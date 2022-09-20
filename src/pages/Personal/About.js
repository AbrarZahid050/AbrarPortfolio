// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col, Progress, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Light Box
import Lightbox from "react-image-lightbox";
import "../../../node_modules/react-image-lightbox/style.css";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ProcessBox from "../../components/Shared/ProcessBox";

// import images
import personal01 from "../../assets/images/personal/1.jpg";
import personal02 from "../../assets/images/personal/2.jpg";
import personal03 from "../../assets/images/personal/3.jpg";
import personal04 from "../../assets/images/personal/4.jpg";
import personal05 from "../../assets/images/personal/5.jpg";
import personal06 from "../../assets/images/personal/6.jpg";
import personal07 from "../../assets/images/personal/7.jpg";
import personal08 from "../../assets/images/personal/8.jpg";
import personal09 from "../../assets/images/personal/9.jpg";
//creating array of images for image portfolio
const images = [
  personal01,
  personal02,
  personal03,
  personal04,
  personal05,
  personal06,
  personal07,
  personal08,
  personal09,
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: personal01,
          href: "https://goatsociety.io/",

          title: "Goat Nft",
          subject: "NFT",
          date: "13th August, 2020",
        },
        {
          image: personal02,
          title: "Paper boyz",
          href: "https://paperzboy.netlify.app/",
          subject: "NFT",
          date: "14th May 2021",
        },
        {
          image: personal03,
          title: "Bimify",
          href: "https://bimify.netlify.app/",
          subject: "E-commerce",
          date: "29th Dec, 2021",
        },
        {
          image: personal04,
          title: "Meta Verse",
          href: "https://meta-verse.netlify.app/",
          subject: "NFT",
          date: "22th August, 2022",
        },
        {
          image: personal05,
          title: "Joke Community",
          href: "https://jungle-cats-nft.netlify.app/",
          subject: "NFT",
          date: "30th August, 2022",
        },
        {
          image: personal06,
          title: "Paykart",
          href: "https://paykaart.netlify.app/dashboard",
          subject: "Music & E-Commerce",
          date: "1th May, 2022",
        },
        {
          image: personal07,
          title: "Cafe Gitana",
          href: "http://3.142.67.220/home",
          subject: "Cafe Website",
          date: "20th Dec, 2020",
        },
        {
          image: personal08,
          title: "Virtual UX",
          href: "https://thevirtualux.com/",
          subject: "Marketing",
          date: "20th August, 2022",
        },
        {
          image: personal09,
          title: "Premium Health",
          href: "https://premiumhealthcare.com/",
          subject: "Health",
          date: "31th August, 2022",
        },
      ],
      processes: [
        {
          id: 1,
          title: "Planning",
          desc: " The basics of the project (whatever it is) is discussed in this phase with the project managers and the developers and an hierarchy is set.",
        },
        {
          id: 2,
          title: "Website Or Mobile app Development",
          desc: " This phase consists of the replication of the pages that we initially designed (or were provided with). ",
          link: "#",
        },
        {
          id: 3,
          title: "Beta testing & Deployment",
          desc: " This is particularly for the website/ web app development. We will be setting the website live for the public and connect with the domain provided with the live IP. ",
          link: "#",
        },
      ],
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                <div className="section-title">
                  <h4 className="title">About Me</h4>
                  <h6 className="text-primary mb-4">
                    I'm Passionate Full Stack Developer
                  </h6>
                  <p className="text-muted mb-0">
                    I am professional MERN-developer and have experience in
                    designing fully responsive websites. Overall my skills are
                    in React-JS, Tailwind CSS, AWS, GitHub, SQL, NodeJS, Express
                    & MongoDB. If you need any kind of work related to these
                    technologies, I have over 5 years of experience in website
                    development.
                  </p>
                  <div className="mt-4">
                    {/* <Link to="#contact" className="btn btn-primary mouse-down">
                      <i className="mdi mdi-phone"></i> Contact Me
                    </Link> */}
                  </div>
                </div>
              </Col>

              <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-md-4">
                  <div className="progress-box">
                    <h6 className="title text-muted">MERN Stack developer</h6>
                    <Progress
                      value={95}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        95%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">NodeJS / MONGODB</h6>
                    <Progress
                      value={90}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        90%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">React / JavaScript</h6>
                    <Progress
                      value={91}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        91%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">HTML</h6>
                    <Progress
                      value={95}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        95%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">CSS</h6>
                    <Progress
                      value={93}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        93%
                      </div>
                    </Progress>
                  </div>
                  <div className="progress-box mt-4">
                    <h6 className="title text-muted">NEXT.JS/Three.JS</h6>
                    <Progress
                      value={93}
                      color="primary"
                      barClassName="position-relative"
                    >
                      <div className="progress-value d-block text-muted h6">
                        93%
                      </div>
                    </Progress>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60" id="portfolio">
            {/* section title */}
            <SectionTitle isLeft={true} title="My Work & Portfolio" />

            <Row>
              {this.state.projects.map((project, key) => (
                <Col lg="4" md="6" key={key} className="mt-4 pt-2">
                  <Card className="border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                    <CardBody className="p-0">
                      <img
                        src={project.image}
                        className="img-fluid"
                        alt="work"
                      />
                      <div className="overlay-work bg-dark"></div>
                      <div className="content">
                        <h5 className="mb-0">
                          <Link
                            to="page-work-detail"
                            className="text-white title"
                          >
                            {project.title}
                          </Link>
                        </h5>
                        <h6 className="text-light tag mb-0">
                          {project.subject}
                        </h6>
                      </div>
                      <div className="icons text-center">
                        <Link
                          to="#"
                          onClick={() =>
                            this.setState({ isOpen: true, photoIndex: key })
                          }
                          className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"
                        >
                          <i>
                            <FeatherIcon
                              icon="camera"
                              className="fea icon-sm"
                            />
                          </i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                  <div>
                    <a href={project.href} target="blank">
                      <p
                        style={{
                          textAlign: "center",
                          color: "blue",
                          fontWeight: "900",
                          marginTop: "10px",
                        }}
                      >
                        <strong style={{ color: "black", fontWeight: "500" }}>
                          Click to open the link {"->"}
                        </strong>{" "}
                        {project.title}
                      </p>
                      <p></p>
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
            {/* lightbox for portfolio images */}
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                imagePadding={100}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Container>

          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle isLeft={true} title="Work Process" />

            <Row>
              {/* process box */}
              <ProcessBox processes={this.state.processes} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
