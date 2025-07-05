import convertDateToWords from "@utils/dateConverter";

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
    <div className="genshin-card-container">
      <div className="row">
        <div className="col-lg-12 text-center">
          {/* Rarity */}
          {Array.from({ length: rarity }, (_, i) => (
            <i key={i} className="fa-solid fa-star gold-star"></i>
          ))}
        </div>
      </div>
      <div className="row">
        {/* Character Image */}
        <img className="character-image mx-auto" src={imageUrl} alt="" />

        {/* <Carousel galleryImages={galleryImages} /> */}
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Gender */}
          <p> Gender: {gender} </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Nation */}
          <p> Nation: {nation}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Affiliation */}
          <p> Affiliation: {affiliation} </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Constellation */}
          <p> Constellation: {constellation}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Birthday */}
          <p> Birthday: {convertDateToWords(birthday)}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Release Date */}
          <p> Release Date: {convertDateToWords(release)}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterSideBarDev;
