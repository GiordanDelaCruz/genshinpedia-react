import Accordion from "../../Accordion/Accordion";

function CharacterInfoBlockTest({ id, iconURL, skillTalent, vision }) {
  return (
    <>
      <div>
        <h4 id={id} className="pt-4 skill-talent-block">
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

export default CharacterInfoBlockTest;
