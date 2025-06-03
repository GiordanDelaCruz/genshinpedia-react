import { v4 as uuidv4 } from "uuid";
import Accordion from "../../Accordion/Accordion";
import "./InfoBlock.css";

function InfoBlock({ id, iconURL, skillTalent, vision }) {
  return (
    <>
      <div
        key={uuidv4()}
        className="bg-dark text-white px-4 pt-2 pb-4 my-5 rounded border shadow"
      >
        <h4 id={id} className="pt-4 skill-talent-block scroll-target">
          <img id="" className="talent-icon" src={iconURL} alt="" />
          {` ${skillTalent.unlock}:`}
        </h4>
        <h5 className="skill-talent-block"> [{skillTalent.name}] </h5>
        <p className="pt-3">{skillTalent.description}</p>
        <Accordion skillTalents={skillTalent} vision={vision} />
      </div>
    </>
  );
}

export default InfoBlock;
