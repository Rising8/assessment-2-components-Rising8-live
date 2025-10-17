import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/Contact";

const App = () => {
  const [page, setPage] = useState("home"); // "home" or "contact" for now

  return (
    <div>
      <Header setPage={setPage} /> {/* Pass setPage function so Header can change the current page */}

      {/* Conditional rendering of pages based on `page` state */}
      {page === "home" && <Home />}
      {page === "contact" && <Contact />}
      <Footer />
    </div>
  );
};

export default App;
