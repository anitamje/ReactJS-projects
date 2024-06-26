import React from "react";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Content = () => {
    return (
        <div className="content">
            <Home />
            <About />
            <Gallery />
            <Contact />
        </div>
    )
};

export default Content;
