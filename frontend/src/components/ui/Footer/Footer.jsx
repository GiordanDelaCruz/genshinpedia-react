import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="social-icon-wrapper">
              <a href="https://github.com/GiordanDelaCruz">
                <i className="social-icon fab fa-2x fa-github big-zoom"></i>
              </a>
              <a href="https://www.linkedin.com/in/giordan-dela-cruz/">
                <i className="social-icon fa-2x fab fa-linkedin big-zoom"></i>
              </a>
              <a href="https://www.instagram.com/giordanandrew/">
                <i className="social-icon fab fa-2x fa-instagram big-zoom"></i>
              </a>
              <a href="mailto:giordandelacruz@gmail.com">
                <i className="social-icon fas fa-2x fa-envelope big-zoom"></i>
              </a>
            </div>
            <p className="copyright">Copyright&copy;GiordanAndrew {year}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
