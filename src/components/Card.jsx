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
  return (
    <>
      <h3>{company_name}</h3>
      <h4>{location}</h4>
      <p>{linkedin}</p>
      <p>{website}</p>
      <p>{company_type}</p>
      <Smallbox textToShow={preferred_languages} id={id} />
      <Smallbox textToShow={frameworks} id={id} />
      <p>{work_model}</p>
      <p>{description}</p>
    </>
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
