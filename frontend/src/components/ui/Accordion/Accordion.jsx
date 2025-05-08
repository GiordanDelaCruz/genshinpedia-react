import react from "react";
import Table from "../Table/Table";
import { v4 as uuidv4 } from "uuid";

function Accordion({ skillTalents, vision }) {
  const accordId = `collapse-${uuidv4()}`;

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
                data-bs-target={`#${accordId}`}
                aria-expanded="true"
                aria-controls={accordId}
              >
                Show Additional Details
              </button>
            </h2>
            <div
              id={accordId}
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
