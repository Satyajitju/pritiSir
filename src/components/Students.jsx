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

    <div
  id="researchCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
>

  <div className="carousel-inner">

    <div className="carousel-item active">
      <img
        src="/research-group.png"
        className="research-group-image d-block w-100"
        alt="Research Group"
      />
    </div>

    <div className="carousel-item">
      <img
        src="/research-group-lab.jpg"
        className="research-group-image d-block w-100"
        alt="Research Activities"
      />
    </div>

  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#researchCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#researchCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>

</div>

    <div className="research-group-description">

      <p>
      The Mathematical Biology Research Group, led by Prof. Priti Kumar Roy at Jadavpur University, brings together doctoral researchers, postdoctoral fellows, and collaborators working on infectious disease dynamics, mathematical epidemiology, therapeutic optimization, ecological systems, and computational biology, with a strong focus on addressing real-world biomedical and public health challenges through mathematical modelling.

      </p>

    </div>

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
                    {student.image && student.image.trim() !== "" && (
  <img
    src={student.image}
    alt={student.Name}
    className="student-photo"
    onError={(e) => {
      e.target.style.display = "none";
    }}
  />
)}
                    <div className="student-name">
                      {student.Name}
                    </div>
                    {student["Research Area"] && (
  <div className="student-research-area">
    {student["Research Area"]}
  </div>
)}
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