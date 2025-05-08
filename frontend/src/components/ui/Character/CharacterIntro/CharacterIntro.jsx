import react from "react";

function CharacterIntro(props) {
  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-sm-8">
          <h1 className="character-header">
            {/* Character Name */}
            <img
              className="character-icon"
              src={`https://genshin.jmp.blue/characters/${props.icon}/icon`}
              alt=""
            />
            {` ${props.name}`}
          </h1>
        </div>
        <div className="col-lg-3 col-sm-4">
          {/* Weapon */}
          <img
            className="weapon-icon"
            src={`/images/${props.weapon}.webp`}
            alt=""
          />
          {/* Vision */}
          <img
            className="vision-icon"
            src={`https://genshin.jmp.blue/elements/${props.vision}/icon/`}
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Title */}
          <h2 className="title-header"> {props.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-1">
          {/* Decription */}
          <p> {props.description} </p>
        </div>
      </div>
    </>
  );
}

export default CharacterIntro;
