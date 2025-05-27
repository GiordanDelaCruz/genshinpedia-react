import react from "react";

function Intro(props) {
  return (
    <>
      <div className="row text-center my-5">
        <div className="col">
          <h1 className="fw-700 mt-5">
            Start Your Journey Today!
            <img
              className="compass-icon"
              src="images/compass-icon.webp"
              alt=""
            />
          </h1>
          <h4 className="fw-600"> Take a look below to help get started!</h4>
        </div>
      </div>
    </>
  );
}

export default Intro;
