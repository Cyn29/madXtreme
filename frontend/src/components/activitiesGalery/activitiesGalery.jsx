

function Gallery() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src="imagen1.jpg" alt="Imagen 1" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src="imagen2.jpg" alt="Imagen 2" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src="imagen3.jpg" alt="Imagen 3" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
