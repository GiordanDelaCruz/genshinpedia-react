import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";

function CharacterCard({ name, iconUrl }) {
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!name) return alert("Character name missing");
    try {
      const response = await axios.post(
        "http://localhost:3008/character-search",
        {
          character: name,
        }
      );

      // Navigate and pass response data as route state
      navigate("/character-profile", { state: response.data });
    } catch (err) {
      console.error("Error in fetching character data:", err);
      alert("Failed to load character data.");
    }
  };

  return (
    <>
      <div className="text-center zoom" onClick={handleClick}>
        <div className="ellipse">
          <img
            className="character-icon"
            src={iconUrl}
            alt={`A headshot picture of ${name}`}
          />
          <h4>{name}</h4>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
