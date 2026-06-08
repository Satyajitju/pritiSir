import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";
import "./Publications.css";

export class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    const url =
      "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=projects";

    const response = await axios.get(url);

    this.setState({
      projects: response.data.data,
    });
  }

  render() {
    return (
      <div>
        <Heading title="Research Projects" />

        <div className="container py-5">

          <div className="mb-5">
            <h2 className="fw-bold">
              Sponsored & Completed Research Projects
            </h2>

            <p className="text-muted">
              Research projects funded by DST, DBT, CSIR, UGC, SERB and
              international collaborative programmes.
            </p>
          </div>

          {this.state.projects.length === 0 ? (
            <div className="loader-container">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="row">

              {this.state.projects.map((project, index) => (
                <div className="col-lg-6 mb-4" key={index}>

                  <div className="project-card">

                    <div className="project-header">

                      <span className="agency-badge">
                        {project.Agency}
                      </span>

                      <span className="year-badge">
                        {project.Year}
                      </span>

                    </div>

                    <h4 className="project-title">
                      {project.Title}
                    </h4>

                    <div className="project-meta">

                      <p>
                        <strong>Funding Type:</strong>{" "}
                        {project["Funding Type"]}
                      </p>

                      <p>
                        <strong>Grant No:</strong>{" "}
                        {project["Grant No."]}
                      </p>

                      <p>
                        <strong>Status:</strong>{" "}
                        {project.Status}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}
        </div>
      </div>
    );
  }
}

export default People;