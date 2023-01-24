import React from "react";
import {
  Hero,
  Sales,
  FlexContent,
  Stories,
  Footer,
  Navbar,
  Cart,
} from "./components";
import {
  heroapi,
  popularsales,
  topratedsales,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratedsales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
