import react from "react";
import Accordion from "../Accordion";
import CharacterIntro from "./CharacterIntro";
import CharacterSkills from "./CharacterSkills";

function CharacterContent(props) {
  return (
    <div>
      <CharacterIntro
        icon={props.icon}
        name={props.name}
        weapon={props.weapon}
        vision={props.name}
        title={props.title}
        description={props.description}
      />
      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Skill Talents --> */}
          {/* TODO: Update props in here and in <CharacterSkills/> to match */}
          <CharacterSkills
            id={props.id}
            icon={props.icon}
            skillTalents={props.skillTalents}
          />
          <Accordion data={props.skillTalents} />
        </div>
      </div>
    </div>
  );
}

export default CharacterContent;
