function Hero() {
    return (
      <section
        style={{
          minHeight: "100vh",
          background: "#050816",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "1rem"
            }}
          >
            Prof. Priti Kumar Roy
          </h1>
  
          <p
            style={{
              fontSize: "1.5rem",
              opacity: 0.8
            }}
          >
            Mathematical Biology · Epidemiology · Complex Systems
          </p>
        </div>
      </section>
    );
  }
  
  export default Hero;