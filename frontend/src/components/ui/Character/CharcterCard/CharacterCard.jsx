import "./CharacterCard.css";
function CharacterCard({ name, iconUrl }) {
  return (
    <>
      <div className="text-center zoom">
        <a href="/characters/ganyu">
          <div className="ellipse">
            <img
              className="character-icon"
              src={iconUrl}
              alt={`A headshot picture of ${name}`}
            />
            <h4>{name}</h4>
          </div>
        </a>
      </div>
    </>
  );
}

export default CharacterCard;
