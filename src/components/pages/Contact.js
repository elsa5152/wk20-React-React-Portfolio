import React from "react";
import { Link,Routes } from "react-router-dom";
import ContactCard from "../ContactCard";

import Learn from "./Learn";



function Contact(props) {
    return (
        <div>
          
          <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link bg-light">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link bg-light">
        Learn Less
      </Link>
      <Routes exact path={`${props.match.url}/learn`} component={Learn} />

      <ContactCard />

        </div>

    );
}

export default Contact;