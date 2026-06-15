import React from "react";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "60px",
        padding: "40px 20px",
        textAlign: "center",
        background: "#0f172a",
        color: "#cbd5e1",
      }}
    >
      
      <hr
        style={{
          borderColor: "#334155",
          margin: "20px auto",
          maxWidth: "600px",
        }}
      />

      <p>
        © 2026 Prof. Priti Kumar Roy. All Rights Reserved.
      </p>

      <p>
        Website designed, developed and maintained by{" "}
        <strong>Satyajit Mukherjee</strong>.
      </p>
    </footer>
  );
}

export default Footer;