import { v4 as uuidv4 } from "uuid";

function CharacterSideBarDev({
  rarity,
  imageUrl,
  galleryImages,
  visionUrl,
  weaponUrl,
  nationUrl,
  gender,
  nation,
  affiliation,
  constellation,
  birthday,
  release,
}) {
  let dummyArr = [];
  if (rarity === 5) {
    dummyArr = [0, 0, 0, 0, 0];
  } else if (rarity == 4) {
    dummyArr = [0, 0, 0, 0];
  } else {
    dummyArr = [0];
  }

  return (
    <div className="bg-dark text-white rounded border shadow text-center rounded">
      <div className="row py-2">
        <div className="col-lg-12">
          {/* Rarity */}
          {dummyArr.map((elem, index) => {
            return (
              <i
                key={uuidv4()}
                className="fa-solid fa-star fa-2x my-2 gold-star"
              ></i>
            );
          })}
        </div>
      </div>
      <div className="row">
        {/* Character Image */}
        <img className="character-image mx-auto" src={imageUrl} alt="" />

        {/* <Carousel galleryImages={galleryImages} /> */}
      </div>
      <div className="row my-3">
        <div className="col-lg-12">
          {/* Gender */}
          <p> Gender: {gender} </p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-12">
          {/* Nation */}
          <p> Nation: {nation}</p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-12">
          {/* Affiliation */}
          <p> Affiliation: {affiliation} </p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-12">
          {/* Constellation */}
          <p> Constellation: {constellation}</p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-12">
          {/* Birthday */}
          <p> Birthday: {birthday}</p>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-12">
          {/* Release Date */}
          <p> Release Date: {release}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterSideBarDev;
