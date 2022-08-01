import React from "react";

function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div>

                   <p>I am Elsa. This is the damo intro.</p>
                  
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/feed/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/elsa5152/wk20-React-React-Portfolio.git" className="card-link">GitHub</a>
                </div>
            </div>
            
        </div>
    );
}

export default AboutCard;