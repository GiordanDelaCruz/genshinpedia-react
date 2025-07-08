import "./PassiveTalents.css";

function PassiveTalents({ id, iconUrlBase, title, arrayData }) {
  return (
    <>
      {arrayData.map((elem, idx) => {
        return (
          <div key={`${title}_${idx}`} className="genshin-card-container">
            <div className="row">
              <div className="header-container">
                <img
                  src={`${iconUrlBase}${elem.level ? idx + 1 : 0}`}
                  alt=""
                  className="talent-icon"
                />
                <h3 className="talent-name">{elem.name}</h3>
              </div>
            </div>

            <div className="row pt-2">
              <h4 className="sub-header">{elem.unlock}</h4>
              <p className="talent-description">{elem.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PassiveTalents;
