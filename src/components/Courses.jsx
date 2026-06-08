import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";
import "./Publications.css";

export class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      awards: [],
    };
  }

  async componentDidMount() {
    const url =
      "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=awards";

    const response = await axios.get(url);

    this.setState({
      awards: response.data.data,
    });
  }

  render() {
    const { awards } = this.state;

    return (
      <div>
        <Heading title="Awards & Honors" />

        <div className="container py-5">

          <div className="publication-header">
            <h2>Academic Recognition & Distinctions</h2>

            <p>
              International fellowships, academic appointments,
              travel grants and research awards.
            </p>
          </div>

          {awards.length === 0 ? (
            <div className="loader-container">
              <div className="spinner"></div>
              <div className="loader-text">
                Loading awards...
              </div>
            </div>
          ) : (
            <>
              <div className="award-stats">

                <div className="stat-box">
                  <h3>{awards.length}</h3>
                  <span>Awards & Honors</span>
                </div>

                <div className="stat-box">
                  <h3>2</h3>
                  <span>International Fellowships</span>
                </div>

                <div className="stat-box">
                  <h3>1</h3>
                  <span>Best Paper Award</span>
                </div>

                <div className="stat-box">
                  <h3>1</h3>
                  <span>Visiting Professorship</span>
                </div>

              </div>

              <div className="publication-grid">

                {awards.map((award, index) => (
                  <div
                    className="publication-card"
                    key={index}
                  >
                    <div className="publication-top">

                      <span className="publication-number">
                        {award.Type}
                      </span>

                      <span className="publication-year">
                        {award.Year}
                      </span>

                    </div>

                    <h4 className="publication-title">
                      {award.Title}
                    </h4>

                    <p className="publication-authors">
                      {award.Organization}
                    </p>

                  </div>
                ))}

              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Courses;