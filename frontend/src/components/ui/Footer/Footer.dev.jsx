function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-light py-3">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright&copy;GiordanAndrew {year}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
