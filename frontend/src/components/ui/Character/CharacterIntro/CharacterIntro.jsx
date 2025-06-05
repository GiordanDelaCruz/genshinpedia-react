function CharacterIntroDev({
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
        <div className="row align-items-center">
          {/* Character name and icon */}
          <div className="col-md-6 d-flex justify-content-md-start justify-content-center align-items-center mb-2 mb-md-0">
            <img
              className="character-icon me-2"
              src={characterIconUrl}
              alt=""
            />
            <h1 className="character-header mb-0">{name}</h1>
          </div>

          {/* Icons group */}
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center gap-2">
            <img className="nation-icon" src={nationUrl} alt="Nation" />
            <img className="weapon-icon" src={weaponUrl} alt="Weapon" />
            <img className="vision-icon" src={visionUrl} alt="Vision" />
          </div>
        </div>

        <div className="row bg-light text-black rounded py-2 px-2 mx-2 mt-3">
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

export default CharacterIntroDev;
