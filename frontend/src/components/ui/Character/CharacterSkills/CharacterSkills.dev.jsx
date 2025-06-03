import Accordion from "../../Accordion/Accordion.jsx";

function CharacterSkillsDev(props) {
  const normalAttack = props.skillTalents[0];
  const elementalSkill = props.skillTalents[1];
  const elementalBurst = props.skillTalents[2];
  const passiveTalents = props.passiveTalents;
  const constellations = props.constellations;
  const vision = props.vision;

  return (
    <>
      {/* Normal Attack */}
      <div>
        <h4 id="normalAttack" className="pt-4 skill-talent-block">
          <img
            id=""
            className="talent-icon"
            src={`https://genshin.jmp.blue/characters/${props.name}/talent-na`}
            alt=""
          />
          {` ${normalAttack.unlock}:`}
        </h4>
        <h5 className="skill-talent-block"> [{normalAttack.name}] </h5>
        <p className="pt-3">{normalAttack.description}</p>
        <Accordion skillTalents={normalAttack} vision={vision} />
      </div>

      {/* Elemental Skill */}
      <div>
        <h4 id="elementalSkill" className="pt-4 skill-talent-block">
          <img
            className="talent-icon"
            src={`https://genshin.jmp.blue/characters/${props.name}/talent-skill`}
            alt=""
          />
          {` ${elementalSkill.unlock}:`}
        </h4>
        <h5 className="skill-talent-block"> [{elementalSkill.name}] </h5>
        <p className="pt-3">{elementalSkill.description}</p>
        <Accordion skillTalents={elementalSkill} vision={vision} />
      </div>

      {/* Elemental Burst */}
      <div>
        <h4 id="elementalBurst" className="pt-4 skill-talent-block">
          <img
            id=""
            className="talent-icon"
            src={`https://genshin.jmp.blue/characters/${props.name}/talent-burst`}
            alt=""
          />
          {` ${elementalBurst.name}:`}
        </h4>
        <h5 className="skill-talent-block"> [{elementalBurst.name}] </h5>
        <p className="pt-3">{elementalBurst.description}</p>
        <Accordion skillTalents={elementalBurst} vision={vision} />
      </div>

      {/* Passive Talents */}
      <h4 id="passiveTalents" class="pt-4">
        {" "}
        Passive Talents
      </h4>
      {passiveTalents.map((elem, index) => {
        return (
          <div>
            <table class="table custom-table table-hover">
              <tbody>
                <tr>
                  <td class="">
                    <img
                      class="passive-talent-icon"
                      src={`https://genshin.jmp.blue/characters/${props.name}/talent-passive-${index}`}
                      alt=""
                    />{" "}
                    {elem.name}{" "}
                  </td>
                  <td class=""> {elem.description} </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}

      {/* Make this load conditionally */}
      {/* // <td class=""><img class="passive-talent-icon" src="https://genshin.jmp.blue/characters/<%= imageName %>/talent-passive-<%= i %>" alt=""/> <%= passiveTalents[i].name %></td> */}

      {/* Constellations */}
      <h4 id="constellations" class="pt-4">
        {" "}
        Constellations
      </h4>
      {constellations.map((elem, index) => {
        return (
          <div>
            <table class="table custom-table table-hover">
              <tbody>
                <tr>
                  <td class="">
                    <img
                      class="constellations-icon"
                      src={`https://genshin.jmp.blue/characters/${props.name}/constellation-${elem.level}`}
                      alt=""
                    />{" "}
                    {elem.name}
                  </td>
                  <td class="">{elem.unlock}</td>
                  <td class="">{elem.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}

export default CharacterSkillsDev;
