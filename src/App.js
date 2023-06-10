import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, Works } from "./pages";
import styled from "styled-components"


const App = () => {
  const Container = styled.div`
    scroll-snap-type: y mandatory;
    scroll-behaviour: smooth;
    overflow-y: auto;
    scrollbar-widh: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
