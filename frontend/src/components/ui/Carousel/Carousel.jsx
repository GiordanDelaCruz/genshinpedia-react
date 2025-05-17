import { v4 as uuidv4 } from "uuid";

function Carousel({ galleryImages }) {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide  carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {galleryImages.map((elem, idx) => {
            return (
              <button
                key={uuidv4()}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={idx}
                className="active"
                aria-current="true"
                aria-label={`Slide ${idx + 1}`}
              ></button>
            );
          })}
        </div>

        <div className="carousel-inner">
          {galleryImages.map((elem, idx) => {
            return (
              <div
                key={uuidv4()}
                className={idx == 0 ? "carousel-item active" : "carousel-item"}
              >
                <div className="container">
                  <img src={elem} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
