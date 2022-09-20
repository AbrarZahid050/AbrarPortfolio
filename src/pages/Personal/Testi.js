// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Star Rating
import StarRatings from "react-star-ratings";

import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

//Import Images
import bg02 from "../../assets/images/personal/bg02.jpg";
import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

class Testi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 1,
          image: client1,
          name: "Qutreey",
          post: "C.E.O",
          rating: 5,
          desc: "Abrar is very professional. Clear in language and execution of thoughts. I have more project and I'll certainly be rehiring. One of my best experiences",
        },
        {
          id: 2,
          image: client2,
          name: "ktraetey",
          post: "P.A",
          rating: 5,
          desc: "Patient and very skilled freelancer , Knows what he is doing + he is a good listener . We will definitely hire him for next project",
        },
        {
          id: 3,
          image: client3,
          name: "Barbara McIntosh",
          post: "M.D",
          rating: 5,
          desc: "HIGHLY RECOMMEND. Abrar went above and beyond to deliver our project(React js ).",
        },
        {
          id: 4,
          image: client4,
          name: "Jill Webb",
          post: "Manager",
          rating: 5,
          desc: "Abrar is a great developer.. he listened to my ideas, and incorporated them well into the design, he worked hard to deliver a quality product",
        },
        {
          id: 5,
          image: client5,
          name: " Dean Tolle",
          post: "Developer",
          rating: 5,
          desc: "Abrar is a great developer very experienced and professional. Highly recommend Abrar cuz he goes above and beyond  ",
        },
        {
          id: 6,
          image: client6,
          name: "Christa Smith",
          post: "Designer",
          rating: 5,
          desc: "Abrar has been amazing! he's a very talented designer also has some development skills. 10/10 experience!",
        },
      ],
      activeIndex: 0,
    };
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.clients.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.clients.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" style={{ background: "#283353" }}>
          {/* <div className="bg-overlay"></div> */}
          <Container>
            <Row className="justify-content-center">
              <Col lg="7" className="text-center">
                <Carousel
                  activeIndex={this.state.activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  {this.state.clients.map((client, key) => (
                    <CarouselItem
                      key={key + 1}
                      onExiting={this.onExiting()}
                      onExited={this.onExited()}
                    >
                      <div key={key} className="customer-testi text-center">
                        <p className="text-light para-dark h6 font-italic">
                          " {client.desc} "
                        </p>
                        <StarRatings
                          rating={client.rating}
                          starRatedColor="#F17425"
                          numberOfStars={5}
                          name="rating"
                          starDimension="15px"
                          className="list-unstyled mb-0 mt-3"
                        />
                        <h6 className="text-light title-dark">
                          {" "}
                          {client.name}{" "}
                        </h6>
                        <img
                          src={client.image}
                          style={{ height: 65, width: 65 }}
                          className="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow"
                          alt="testimonial"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                  <CarouselControl
                    direction="prev"
                    onClickHandler={this.previous}
                  >
                    <span className="carousel-control-prev-icon"></span>
                    <span className="sr-only">Previous</span>
                  </CarouselControl>
                  <CarouselControl direction="next" onClickHandler={this.next}>
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                  </CarouselControl>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testi;
