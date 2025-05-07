import CharacterNavMenu from "./CharacterNavMenu";
function Navbar({ isCharacterPage }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="genshin-impact-logo"
              src="/images/paimon-logo.png"
              alt=""
            />
            GenshinPedia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isCharacterPage && <CharacterNavMenu />}
            </ul>
            <form className="d-flex" method="post" role="search">
              <input
                className="form-control me-2"
                type="search"
                name="character"
                placeholder="Character Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                value="Search"
                formAction="/post-character"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
