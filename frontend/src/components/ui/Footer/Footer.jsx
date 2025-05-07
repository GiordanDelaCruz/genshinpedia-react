import react from "react";

function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright&copy;GiordanAndrew {year}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
