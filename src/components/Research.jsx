import React from "react";
import Heading from "./Heading";

function Research() {
  return (
    <div>
      <Heading title="Research" />

      {/* Research Hero */}

      <section className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Mathematical Biology & Disease Dynamics
          </h2>

          <p
            className="mx-auto mt-3"
            style={{ maxWidth: "900px", fontSize: "1.1rem" }}
          >
            Research focuses on mathematical modelling of infectious diseases,
            cancer progression, autoimmune disorders, ecological systems,
            therapeutic optimization and sustainable biological processes,
            integrating theory with real-world biomedical applications.
          </p>

        </div>

        {/* Research Areas */}

        <div className="row g-4">

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h4>Infectious Disease Dynamics</h4>
                <p>
                  Mathematical modelling of HIV/AIDS, Dengue,
                  Chikungunya, Leprosy and Leishmaniasis with
                  emphasis on transmission dynamics and control
                  strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h4>Cancer & Autoimmune Disorders</h4>
                <p>
                  Mathematical investigations of Psoriasis,
                  Cervical Cancer and immune response systems,
                  including therapeutic intervention modelling.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h4>Ecology & Sustainability</h4>
                <p>
                  Ecological modelling, biomass utilization,
                  biodiesel production and sustainable biological
                  resource management.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h4>Therapeutic Optimization</h4>
                <p>
                  Optimal control strategies, drug treatment
                  protocols, enzyme kinetics and therapeutic
                  decision modelling.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Research Experience */}

      <section className="container pb-5">

        <h2 className="text-center mb-5">
          Research Experience
        </h2>

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <h4>
              Agricultural & Ecological Research Unit
            </h4>
            <h6 className="text-muted">
              Indian Statistical Institute, Kolkata
            </h6>
            <p>
              1996 – 2007
            </p>
          </div>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h4>
              Department of Mathematics
            </h4>
            <h6 className="text-muted">
              Jadavpur University
            </h6>
            <p>
              Research spanning infectious diseases,
              ecology, mathematical biology, cancer
              dynamics, enzyme kinetics and biodiesel
              production.
            </p>
          </div>
        </div>

      </section>

      {/* Research Impact */}

      <section className="container pb-5">

        <h2 className="text-center mb-5">
          Research Impact
        </h2>

        <div className="row text-center">

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h2>170+</h2>
                <p>Publications</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h2>2599+</h2>
                <p>Citations</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h2>26</h2>
                <p>H-Index</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h2>30+</h2>
                <p>Years Research Experience</p>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Research;