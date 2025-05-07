import "./CharacterCard.css";
function CharacterCard(props) {
  return (
    <>
      <div className="text-center zoom">
        <a href="/characters/ganyu">
          <div className="ellipse">
            <img
              className="character-icon"
              src={props.img}
              alt={`A headshot picture of ${props.name}`}
            />
            <h4>{props.name}</h4>
          </div>
        </a>
      </div>
    </>
  );
}

export default CharacterCard;
