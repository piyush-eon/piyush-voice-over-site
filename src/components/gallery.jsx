import React, { Component } from "react";
import Modalpop from "./Modalpop";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Some of the videos I have done voiceover for.</p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {this.props.data
                ? this.props.data.map((d) => (
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg">
                          {" "}
                          <Modalpop link={d.link}>
                            <div className="hover-text">
                              <h4>{d.title}</h4>
                            </div>
                            <img
                              src={`https://i3.ytimg.com/vi/${d.link}/maxresdefault.jpg`}
                              className="img-responsive"
                              alt="Project Title"
                            />{" "}
                          </Modalpop>{" "}
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
