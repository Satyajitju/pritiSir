import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";
import "./Students.css";

export class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      type: "phd",
      loading: false,
    };
  }

  cleanKeys = (obj) =>
    Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k.trim(), v])
    );

  async fetchStudents(page, type) {
    this.setState({
      type,
      loading: true,
      students: [],
    });

    const url = `https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=${page}`;

    try {
      const response = await axios.get(url);

      const cleanedData = response.data.data.map(
        this.cleanKeys
      );

      this.setState({
        students: cleanedData,
        loading: false,
      });
    } catch (error) {
      console.error(error);

      this.setState({
        loading: false,
      });
    }
  }

  componentDidMount() {
    this.fetchStudents("students", "phd");
  }

  courseChangeToPhd = () =>
    this.fetchStudents("students", "phd");

  courseChangeToCurrentPhd = () =>
    this.fetchStudents("Current_phd", "current_phd");

  courseChangeToMsc = () =>
    this.fetchStudents("msc", "msc");

  courseChangeToPostDoc = () =>
    this.fetchStudents("Post_doc_fellow", "post_doc");

  render() {
    const { students, type, loading } = this.state;

    return (
      <div>
        <Heading title="Students & Fellows" />
        <section className="research-group-section">

  <div className="container">

    <div className="text-center mb-5">

      <h2>
        Mathematical Biology Research Group
      </h2>

      <p>
        Department of Mathematics · Jadavpur University
      </p>

    </div>

    <img
      src="/research-group.png"
      alt="Research Group"
      className="research-group-image"
    />

    <div className="research-group-description">

      <p>
      The Mathematical Biology Research Group, led by Prof. Priti Kumar Roy at Jadavpur University, brings together doctoral researchers, postdoctoral fellows, and collaborators working on infectious disease dynamics, mathematical epidemiology, therapeutic optimization, ecological systems, and computational biology, with a strong focus on addressing real-world biomedical and public health challenges through mathematical modelling.

      </p>

    </div>

  </div>

</section>
<section className="research-themes-section">

  <div className="container">

    <h2 className="text-center mb-5">
      Research Themes
    </h2>

    <div className="research-themes-grid">

      <div className="theme-card">
        <h4>Infectious Disease Dynamics</h4>
        <p>
          Mathematical modelling of HIV/AIDS,
          Dengue, Chikungunya, Leprosy and
          Leishmaniasis transmission dynamics.
        </p>
      </div>

      <div className="theme-card">
        <h4>Mathematical Epidemiology</h4>
        <p>
          Quantitative approaches to disease
          surveillance, intervention strategies
          and public health decision-making.
        </p>
      </div>

      <div className="theme-card">
        <h4>Cancer & Autoimmune Disorders</h4>
        <p>
          Modelling of Psoriasis, Cervical Cancer,
          immune response dynamics and
          therapeutic interventions.
        </p>
      </div>

      <div className="theme-card">
        <h4>Therapeutic Optimization</h4>
        <p>
          Optimal control strategies, drug
          treatment protocols and mathematical
          analysis of biomedical therapies.
        </p>
      </div>

      <div className="theme-card">
        <h4>Ecological Systems</h4>
        <p>
          Ecological modelling, pest management
          and sustainable biological resource
          utilization.
        </p>
      </div>

      <div className="theme-card">
        <h4>Computational Biology</h4>
        <p>
          Mathematical and computational
          approaches for understanding complex
          biological systems.
        </p>
      </div>

    </div>

  </div>

</section>


<section className="research-activity-section">

  <div className="container">

    <h2 className="text-center mb-4">
      Research Activities & Collaborations
    </h2>

    <img
      src="/research-group-lab.jpg"
      alt="Research Activities"
      className="activity-image"
    />

    <p className="activity-caption">
      Research discussions, collaborative meetings
      and academic interactions within the
      Mathematical Biology Research Group.
    </p>

  </div>

</section>

        <div className="container py-5">

          <div className="publication-header">
            <h2>
              Students & Research Fellows
            </h2>

            <p>
              PhD supervision, MSc dissertations and
              postdoctoral mentoring activities.
            </p>
          </div>

          <div className="student-tabs">

            <button
              className={`student-tab ${
                type === "phd" ? "active" : ""
              }`}
              onClick={this.courseChangeToPhd}
            >
              Awarded PhD
            </button>

            <button
              className={`student-tab ${
                type === "current_phd"
                  ? "active"
                  : ""
              }`}
              onClick={this.courseChangeToCurrentPhd}
            >
              Current PhD
            </button>

            <button
              className={`student-tab ${
                type === "msc" ? "active" : ""
              }`}
              onClick={this.courseChangeToMsc}
            >
              MSc Dissertations
            </button>

            <button
              className={`student-tab ${
                type === "post_doc"
                  ? "active"
                  : ""
              }`}
              onClick={this.courseChangeToPostDoc}
            >
              Postdoctoral Fellows
            </button>

          </div>

          {loading ? (
            <div className="loader-container">
              <div className="spinner"></div>

              <div className="loader-text">
                Loading records...
              </div>
            </div>
          ) : (
            <>
              <h3 className="section-title">

                {type === "phd" &&
                  "Awarded PhD Students"}

                {type === "current_phd" &&
                  "Current PhD Students"}

                {type === "msc" &&
                  "Completed MSc Students"}

                {type === "post_doc" &&
                  "Postdoctoral Fellows"}

              </h3>

              <div className="student-grid">

                {students.map((student, idx) => (
                  <div
                    className="student-card"
                    key={idx}
                  >
                    <div className="student-name">
                      {student.Name}
                    </div>

                    {type !== "post_doc" && (
                      <>
                        <div className="student-detail">
                          <strong>
                            {type === "msc"
                              ? "Dissertation:"
                              : "Thesis:"}
                          </strong>
                        </div>

                        <div className="student-thesis">
                          {student.Thesis}
                        </div>

                        {(type === "phd" ||
                          type === "msc") &&
                          student.Year && (
                            <div className="student-year">
                              {student.Year}
                            </div>
                          )}
                      </>
                    )}

                    {type === "post_doc" && (
                      <>
                        <div className="student-detail">
                          <strong>
                            Funding Agency:
                          </strong>
                        </div>

                        <div className="student-thesis">
                          {
                            student[
                              "Funding Agency"
                            ]
                          }
                        </div>

                        <div className="student-detail mt-3">
                          <strong>
                            Designation:
                          </strong>
                        </div>

                        <div className="student-thesis">
                          {student.Designation}
                        </div>

                        <div className="student-year">
                          {student.Year}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <section className="apply-section">

                <h3>
                  Prospective Students &
                  Researchers
                </h3>

                <p>
                  Applications are welcome from
                  highly motivated students
                  interested in Mathematical
                  Biology, Infectious Disease
                  Modelling, HIV/AIDS,
                  Leprosy, Leishmaniasis,
                  Dengue, Chikungunya,
                  Cervical Cancer,
                  Psoriasis, Methanol Toxicity,
                  Optimal Control and
                  Mathematical Modelling.
                </p>

                <a
                  href="mailto:pritiju@gmail.com"
                  className="btn btn-primary"
                >
                  Contact Prof. Roy
                </a>

              </section>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Students;