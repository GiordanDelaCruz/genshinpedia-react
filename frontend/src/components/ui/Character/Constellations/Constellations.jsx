import "./Constellations.css";

function Constellations({ id, iconUrlBase, title, arrayData }) {
  return (
    <>
      {arrayData.map((elem, idx) => {
        return (
          <div key={`${title}_${idx}`} className="genshin-card-container">
            <div className="row">
              <div className="header-container">
                <img
                  className="constellation-icon"
                  src={`${iconUrlBase}${idx + 1}`}
                  alt=""
                />
                <h3 className="scroll-target constellation-name">
                  {elem.name}
                </h3>
              </div>
            </div>

            <div className="row mt-2">
              <h4 className="sub-header">{elem.unlock}</h4>
              <p className="constellation-description">{elem.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Constellations;
