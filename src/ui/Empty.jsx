import PropTypes from "prop-types";

function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}

Empty.propTypes = {
  resourceName: PropTypes.string, // `resourceName` is optional, no `.isRequired`
};

export default Empty;
