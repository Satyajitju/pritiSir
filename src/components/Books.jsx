import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";
import "./Publications.css";

export class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  async componentDidMount() {
    const url =
      "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=books";

    const response = await axios.get(url);

    const sortedBooks = response.data.data.sort(
      (a, b) => Number(b.Year) - Number(a.Year)
    );

    this.setState({
      books: sortedBooks,
    });
  }

  render() {
    const { books } = this.state;

    const authoredBooks = books.filter(
      (book) =>
        book.Role?.toLowerCase().includes("author")
    ).length;

    const editedBooks = books.filter(
      (book) =>
        book.Role?.toLowerCase().includes("editor")
    ).length;

    return (
      <div>
        <Heading title="Books" />

        <div className="container py-5">

          <div className="publication-header">
            <h2>Books & Edited Volumes</h2>

            <p>
              Authored and edited books in
              Mathematical Biology, Infectious Diseases,
              Therapeutic Modelling and Applied Mathematics.
            </p>
          </div>

          {books.length === 0 ? (
            <div className="loader-container">
              <div className="spinner"></div>

              <div className="loader-text">
                Loading books...
              </div>
            </div>
          ) : (
            <>
              <div className="award-stats">

                <div className="stat-box">
                  <h3>{books.length}</h3>
                  <span>Total Books</span>
                </div>

                <div className="stat-box">
                  <h3>{authoredBooks}</h3>
                  <span>Books Authored</span>
                </div>

                <div className="stat-box">
                  <h3>{editedBooks}</h3>
                  <span>Books Edited</span>
                </div>

                <div className="stat-box">
                  <h3>2008–2025</h3>
                  <span>Publication Span</span>
                </div>

              </div>

              <div className="publication-grid">

                {books.map((book, index) => (
                  <div
                    className="publication-card"
                    key={index}
                  >
                    <div className="publication-top">

                      <span className="publication-number">
                        {book.Role}
                      </span>

                      <span className="publication-year">
                        {book.Year}
                      </span>

                    </div>

                    <h4 className="publication-title">
                      {book.Title}
                    </h4>

                    <p className="publication-authors">
                      {book.Publisher}
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

export default Books;