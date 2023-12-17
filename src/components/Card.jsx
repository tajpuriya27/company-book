import PropTypes from "prop-types";

const Smallbox = ({ textToShow, id }) =>
  textToShow.map((text) => (
    <div key={id} className="small-box">
      {text}
    </div>
  ));

const Card = (props) => {
  const {
    id,
    company_name,
    location,
    linkedin,
    website,
    company_type,
    preferred_languages,
    frameworks,
    work_model,
    description,
  } = props;

  const regex = /company\//g;
  const initials = "https://www.linkedin.com/";
  var concated_linkedin = null;
  if (linkedin.match(regex)) {
    concated_linkedin = initials.concat(linkedin);
  }
  return (
    <div
      className="card"
      style={{ width: "fit-content", display: "inline-flex" }}
    >
      <div className="card-body">
        <h3 className="card-title">{company_name}</h3>
        <h6>{location}</h6>
        {concated_linkedin ? (
          <a href={concated_linkedin}>Visit Linkedin</a>
        ) : (
          linkedin
        )}
        <br />
        {website.includes("http") ? (
          <a href={website}>Visit Website</a>
        ) : (
          website
        )}{" "}
        <br />
        <span>Programming Languages:</span>
        <br />
        <Smallbox textToShow={preferred_languages} id={id} />
        <br />
        <span>Frameworks/Stack:</span>
        <br />
        <Smallbox textToShow={frameworks} id={id} />
        <hr />
        <p>Company Type:{company_type}</p>
        <p>Work Model: {work_model}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  company_name: PropTypes.string.isRequired,
  location: PropTypes.string,
  linkedin: PropTypes.string,
  website: PropTypes.string,
  company_type: PropTypes.string,
  preferred_languages: PropTypes.array,
  frameworks: PropTypes.array,
  work_model: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
