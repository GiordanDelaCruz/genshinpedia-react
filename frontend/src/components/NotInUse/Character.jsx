import react from "react";
import CharacterContent from "./CharacterContent";
import CharacterSideBar from "./CharacterSideBar";

// NOTE: THis might be useless
function Character(props){
    return(
        <div>
            <CharacterContent 
                name = {props.name}
                weapon = {props.weapon}
                vision = {props.vision}
                title = {props.title}
                description = {props.description}
                skillTalents = {props.skillTalents}
                passiveTalents = {props.passiveTalents}
                constellations = {props.constellations}
            />
            <CharacterSideBar 
                rarity = {props.rarity}
                image = {props.image}
                gender = {props.gender}
                nation = {props.nation}
                affiliation = {props.affiliation}
                constellation = {props.affiliation}
                birthday = {props.birthday}
                release = {props.release}
            />
        </div>
        
    );
}

export default Character;
