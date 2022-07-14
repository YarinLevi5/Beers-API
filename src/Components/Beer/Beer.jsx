import "./Beer.css";

function Beer({ image_url, name, tagline, description }) {
  return (
    <div className="beer-container">
      <div className="image-url-container">
        <img style={{ width: "25px" }} src={image_url} alt={name} />
      </div>
      <div className="beer-content">
        <p className="headline">{name}</p>
        <p className="tagline">{tagline}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Beer;
