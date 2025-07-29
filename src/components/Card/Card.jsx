export default function Card({ imageSrc, title, text }) {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageSrc} className="img-fluid rounded-start " alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title mb-3">{title}</h5>
            <p className="card-text mb-3 mx-2 text-start">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
