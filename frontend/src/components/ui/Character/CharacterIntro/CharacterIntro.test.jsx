function CharacterIntroTest({
  characterIconUrl,
  visionUrl,
  weaponUrl,
  nationUrl,
  name,
  title,
  description,
}) {
  return (
    <>
      <div className="bg-dark rounded text-white border shadow px-3 pt-3 pb-4">
        <div className="row mb-2">
          <div className="col-lg-9 col-md-6 col-sm-8">
            <h1 className="character-header">
              {/* Character Name */}
              <img className="character-icon" src={characterIconUrl} alt="" />
              {` ${name}`}
            </h1>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-4">
            {/* Nation */}
            <img className="nation-icon" src={nationUrl} alt="" />
            {/* Weapon */}
            <img className="weapon-icon" src={weaponUrl} alt="" />
            {/* Vision */}
            <img className="vision-icon" src={visionUrl} alt="" />
          </div>
        </div>
        <div className="row bg-light text-black rounded py-2 px-2 mx-2">
          <div className="col-lg-12">
            {/* Title */}
            <h2 className="title-header"> {title}</h2>
            {/* Decription */}
            <p> {description} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterIntroTest;
