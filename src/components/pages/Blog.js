import React from "react";
import PortfolioCard from "../PortfolioCard";
import projects from "../../assets/projects.json";

function Blog() {
    return (
        <div>
        <div className="container portfolio-container">
            <h1 className="tilte">Projects</h1>
            <div className="row">
            <PortfolioCard
            name={projects[0].name}
            image={projects[0].image}
            project={projects[0].project}
            location={projects[0].location}
          />
          <PortfolioCard
            name={projects[1].name}
            image={projects[1].image}
            project={projects[1].project}
            location={projects[1].location}
          />

            </div>
        </div>
        </div>

    );
}

export default Blog;