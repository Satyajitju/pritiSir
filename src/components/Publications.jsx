
import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";
import "./Publications.css";

export class Publications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publications: [],
      searchTerm: "",
    };
  }

  async componentDidMount() {
    const url =
      "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=publications";

    const response = await axios.get(url);

    const sortedPublications = response.data.data.sort(
      (a, b) => Number(b.Year) - Number(a.Year)
    );

    this.setState({
      publications: sortedPublications,
    });
  }

  render() {
    const { publications, searchTerm } = this.state;

    const filteredPublications = publications.filter(
      (pub) =>
        pub.Title?.toLowerCase().includes(
          searchTerm.toLowerCase()
        ) ||
        pub.Authors?.toLowerCase().includes(
          searchTerm.toLowerCase()
        ) ||
        String(pub.Year).includes(searchTerm)
    );

    return (
      <div>
        <Heading title="Publications" />

        <div className="container py-5">

          <div className="publication-header">

            <h2>
              Research Publications
            </h2>

            <p>
              {publications.length} Publications
            </p>

          </div>

          <div className="search-container">

            <input
              type="text"
              className="publication-search"
              placeholder="Search by title, author or year..."
              value={searchTerm}
              onChange={(e) =>
                this.setState({
                  searchTerm: e.target.value,
                })
              }
            />

          </div>

          {publications.length === 0 ? (
            <div className="loader-container">
              <div className="spinner"></div>
              <div className="loader-text">
                Fetching publications...
              </div>
            </div>
          ) : (
            <div className="publication-grid">

              {filteredPublications.map(
                (publication, index) => (
                  <div
                    className="publication-card"
                    key={index}
                  >
                    <div className="publication-top">

<span className="publication-number">
  #{filteredPublications.length - index}
</span>

<span className="publication-year">
  {publication.Year}
</span>

</div>
<div className="publication-header">

  <h2>
    Research Publications
  </h2>

  <p>
    {publications.length} Publications
  </p>

</div>


                    <h4 className="publication-title">
                      {publication.Title}
                    </h4>

                    <p className="publication-authors">
                      {publication.Authors}
                    </p>

                    <a
                      href={publication.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-button"
                    >
                      View Paper →
                    </a>

                  </div>
                )
              )}

            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Publications;

