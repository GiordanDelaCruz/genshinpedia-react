import Navbar from "../../components/ui/Navbar/Navbar";
import Footer from "../../components/ui/Footer/Footer.jsx";

// Regular Components
import CharacterIntro from "../../components/ui/Character/CharacterIntro/CharacterIntro.jsx";
import CharacterSkills from "../../components/ui/Character/CharacterSkills/CharacterSkills.jsx";
import CharacterSideBar from "../../components/ui/Character/CharacterSideBar/CharacterSideBar.jsx";

// Testing Components
import CharacterProfileTest from "../CharacterProfile/CharacterProfile.test.jsx";
import CharacterInfoBlockTest from "../../components/ui/Character/InfoBlock/InfoBlock.test.jsx";

function TestingPage({ characterData }) {
  return (
    <>
      {/* <Navbar isCharacterPage={false} />
      <h1 className="text-center my-5">This is a testing page</h1> */}

      <CharacterProfileTest characterData={characterData} />

      {/* TODO: Figure out what props to send, and where to send it from (E.g CharacterProfileTest or TestingPage)}
      {/* <CharacterInfoBlockTest 
        id={}
        iconURL={}
        skillTalent={}
        vision={}
      /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}

export default TestingPage;
