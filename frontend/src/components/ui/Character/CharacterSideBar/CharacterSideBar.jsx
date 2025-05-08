import { v4 as uuidv4 } from "uuid";

function CharacterSideBar(props) {
  let dummyArr = [];
  if (props.rarity === 5) {
    dummyArr = [0, 0, 0, 0, 0];
    console.log("rarity: " + props.rarity);
  } else if (props.rarity == 4) {
    dummyArr = [0, 0, 0, 0];
  } else {
    dummyArr = [0];
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Rarity */}
          {dummyArr.map((elem, index) => {
            return <i key={uuidv4()} className="fa-solid fa-star fa-2x"></i>;
          })}
        </div>
      </div>
      <div className="row text-center">
        {/* Character Image */}
        <img
          className="character-image mx-auto"
          src={`https://genshin.jmp.blue/characters/${props.imageName}/card/`}
          alt=""
        />
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Gender */}
          <p> Gender: {props.gender} </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Nation */}
          <p> Nation: {props.nation}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Affiliation */}
          <p> Affiliation: {props.affiliation} </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Constellation */}
          <p> Constellation: {props.constellation}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Birthday */}
          <p> Birthday: {props.birthday}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Release Date */}
          <p> Release Date: {props.release}</p>
        </div>
      </div>
    </>
  );
}

export default CharacterSideBar;
