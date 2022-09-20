import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";

class ProcessBox extends Component {
  render() {
    var length = this.props.processes.length;
    return (
      <React.Fragment>
        {this.props.processes.map((process, key) => (
          <Col md="4" className="mt-4 pt-2" key={key}>
            <Card className="work-process border-0 rounded shadow">
              <CardBody>
                <h4 className="title" style={{ fontWeight: "500" }}>
                  {process.title}
                </h4>
                <p className="text-muted para">{process.desc}</p>

                <ul className="list-unstyled d-flex justify-content-between mb-0 mt-2">
                  <li className="step h1 mb-0 font-weight-bold">
                    Step {key + 1}.
                  </li>
                  <li className="step-icon">
                    <i
                      className={
                        key + 1 === length
                          ? "mdi mdi-check-all mdi-36px icon-green"
                          : "mdi mdi-chevron-double-right mdi-36px icon-blue"
                      }
                    ></i>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ProcessBox;
