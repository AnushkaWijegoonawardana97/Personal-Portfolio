import React from "react";

function HomeServices() {
  return (
    <div className="sectionPadding">
      <div className="subSectionSpacing row">
        <div className="col-lg-8 col-md-10">
          <div className="primaryHeading">THE THINGS I AM ABLE TO DO</div>

          <p>
            With my experience & knowlade I will help you to design and develop
            UX and UI that make your website. application or software a joy to
            use.
          </p>
        </div>
      </div>

      <div className="serviceGrid">
        <div className="serviceCard">
          <div className="fadingText">01</div>

          <div className="primarySubHeading">UI-UX DESIGN</div>

          <div>
            I will design pixel perfect and modern websites and interfaces.
          </div>
        </div>

        <div className="serviceCard">
          <div className="fadingText">02</div>

          <div className="primarySubHeading">WEB DEVELOPMENT</div>

          <div>
            I build websites from scratch that the customer can edit themselves.
          </div>
        </div>

        <div className="serviceCard">
          <div className="fadingText">03</div>

          <div className="primarySubHeading">ECOMMERCE DEVELOPMENT</div>

          <div>
            I will build ecommerce website for your online store with all the
            payment options.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
