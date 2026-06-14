import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>

      {/* HERO SECTION */}

      <section className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="hero-content">

                <p className="hero-tag">
                  Professor • Department of Mathematics • Jadavpur University
                </p>

                <h1 className="hero-title">
                  Prof. Priti Kumar Roy
                </h1>
                <div
  style={{
    background: "red",
    color: "white",
    padding: "10px",
    marginBottom: "15px",
    fontWeight: "bold"
  }}
>
  DEPLOYMENT TEST 14 JUNE 2026
</div>

                <h3 className="hero-subtitle">
  Mathematical Biology • Disease Dynamics • Therapeutic Modelling
</h3>

<p className="hero-description">
  Research interests encompass infectious disease dynamics,
  cancer progression, autoimmune disorders, toxicological
  modelling, therapeutic optimization and sustainable
  biological systems, with applications to HIV/AIDS,
  Leprosy, Leishmaniasis, Dengue, Chikungunya,
  Psoriasis, Cervical Cancer and Methanol Toxicity.
</p>

                
<div className="hero-buttons">

  <a href="/research" className="btn btn-primary me-3">
    Research
  </a>

  <a
    href="/publications"
    className="btn btn-outline-primary me-3"
  >
    Publications
  </a>

  <a
    href="https://scholar.google.co.in/citations?user=M4--Ct4AAAAJ&hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-dark me-3"
  >
    Google Scholar
  </a>

  <a
    href="https://orcid.org/0000-0001-7454-4367"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success"
  >
    ORCID
  </a>

</div>



              </div>
            </div>

            <div className="col-lg-5 text-center">
              <img
                src="/image.jpg"
                alt="Prof. Priti Kumar Roy"
                className="hero-photo"
              />
            </div>

          </div>
        </div>
      </section>

      {/* RESEARCH IMPACT */}

      <section className="impact-section">

        <div className="impact-card">
          <h2>2599+</h2>
          <span>Citations</span>
        </div>

        <div className="impact-card">
          <h2>26</h2>
          <span>h-index</span>
        </div>

        <div className="impact-card">
          <h2>71</h2>
          <span>i10-index</span>
        </div>

        <div className="impact-card">
          <h2>170+</h2>
          <span>Publications</span>
        </div>

      </section>

      {/* RESEARCH THEMES */}

      <section className="research-highlight">

        <div className="container">

          <h2 className="text-center mb-5">
            Research Themes
          </h2>

          <div className="row">

            <div className="col-md-6 mb-4">
              <div className="highlight-card">
                <h4>Infectious Disease Dynamics</h4>
                <p>
                  Mathematical modelling of HIV/AIDS,
                  Leprosy, Leishmaniasis, Dengue and
                  Chikungunya transmission dynamics,
                  intervention strategies and disease control.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="highlight-card">
                <h4>Cancer & Autoimmune Disorders</h4>
                <p>
                  Quantitative investigations of Cervical Cancer,
                  Psoriasis, immune regulation and therapeutic
                  optimization.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="highlight-card">
                <h4>Toxicology & Therapeutic Control</h4>
                <p>
                  Mathematical analysis of Methanol Toxicity,
                  antidote kinetics and optimal treatment
                  protocols.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="highlight-card">
                <h4>Sustainable Biological Systems</h4>
                <p>
                  Biodiesel production, Jatropha biomass
                  utilization and mathematical approaches
                  to pest-control strategies.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SELECTED PUBLICATIONS */}

      <section className="featured-publications">

        <div className="container">

          <h2 className="text-center mb-5">
            Selected Recent Publications
          </h2>

          <div className="publication-card">

            <h4>
              Evaluating the Reliability of Data-Driven
              Compartmental Models on Dengue Fever
              for the Ongoing Outbreak in America
            </h4>

            <p>
              <a
                href="https://doi.org/10.1007/s10441-026-09520-z"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acta Biotheoretica (2026)
              </a>
            </p>

          </div>

          <div className="publication-card">

            <h4>
              Fractional Calculus Approach to RT-IN
              Enzymatic Competition in Modulating
              HIV Replication Dynamics
            </h4>

            <p>
              <a
                href="http://www.amjcu.zju.edu.cn/amjcub/2020-2029/202601/225-254.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Applied Mathematics – A Journal of Chinese Universities (2026)
              </a>
            </p>

          </div>

          <div className="publication-card">

            <h4>
              Impulsive Stem Cell Transplantation
              to Modulate Psoriasis:
              Insights of Complex Cytokine Network
            </h4>

            <p>
              <a
                href="https://doi.org/10.1016/j.mbs.2026.109623"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mathematical Biosciences (2026)
              </a>
            </p>

          </div>

        </div>

      </section>
      


<section className="conference-section">

  <div className="container">

    <div className="conference-card">

      <h2>
        ICMAAM'26
      </h2>

      <h4>
        4th International Conference on Mathematical Analysis
        and Applications in Modelling
      </h4>

      <p>
        A global platform bringing together researchers
        working in mathematical biology, epidemiology,
        medicine and applied mathematics.
      </p>

      <a
        href="https://icmaamjadavpuruniversity.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Visit Conference Website
      </a>

    </div>

  </div>

</section>



      {/* EDITORIAL ACTIVITIES */}

      <section className="editor-section">

        <div className="container">

          <h2 className="text-center mb-4">
            Editorial Activities
          </h2>

          <div className="editor-card text-center">

            <h4>
              Associate Editor
            </h4>

            <p>
              Mathematical Biosciences (Elsevier)
            </p>

            <a
              href="https://www.sciencedirect.com/journal/mathematical-biosciences"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Journal
            </a>

          </div>

        </div>

      </section>

      {/* NEWS */}

      <section className="news-section">

        <div className="container">

          <h2 className="text-center mb-5">
            News & Announcements
          </h2>

          <div className="news-card">
            ICMAAM'26 – 4th International Conference on Mathematical Analysis
            and Applications in Modelling.
          </div>

          <div className="news-card">
            Three new publications published in 2026 focusing on Dengue Dynamics, HIV Replication and Psoriasis Modelling.
          </div>

          <div className="news-card">
            Researchers interested in Mathematical Biology and Disease Dynamics are encouraged to explore collaborative opportunities.
          </div>

        </div>

      </section>

      {/* RESEARCH OPPORTUNITIES */}

      <section className="opportunity-section">

        <div className="container">

          <h2 className="text-center mb-4">
            Research Opportunities
          </h2>

          <div className="opportunity-card">

            <h4>
              Postdoctoral Fellowship Opportunity
            </h4>

            <p>
              Applications are invited from highly motivated
              researchers interested in Mathematical Biology,
              Infectious Disease Modelling and Therapeutic
              Optimization.
            </p>

            <p>
              Contact:
              <a href="mailto:pritiju@gmail.com">
                {' '}pritiju@gmail.com
              </a>
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;

