import { v4 as uuidv4 } from "uuid";
import Accordion from "../../Accordion/Accordion";
import "./InfoBlock.css";

function InfoBlockDev({ id, iconUrl, data, vision }) {
  return (
    <>
      <div key={uuidv4()} className="genshin-card-container">
        <div className="row">
          <div className="header-container">
            <img className="talent-icon" src={iconUrl} alt="" />
            <h3 id={id}>{` ${data.unlock}:`}</h3>
          </div>
        </div>
        <div className="row mt-2">
          <h4 className="sub-header">{data.name}</h4>
          <p className="">{data.description}</p>
          <Accordion data={data} vision={vision} />
        </div>
      </div>
    </>
  );
}

export default InfoBlockDev;
