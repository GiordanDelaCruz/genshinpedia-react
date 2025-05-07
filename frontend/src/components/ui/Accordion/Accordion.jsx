import react from "react";
import Table from "../Table/Table";

function Accordion({ id, skillTalents }) {
  return (
    <>
      <div>
        <div className="accordion accordion-flush">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${id}`}
                aria-expanded="true"
                aria-controls={`collapse${id}`}
              >
                Show Additional Details
              </button>
            </h2>
            <div
              id={`collapse${id}`}
              className="accordion-collapse collapse"
              data-bs-parent=""
            >
              <div className="accordion-body">
                <Table skillTalents={skillTalents} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
