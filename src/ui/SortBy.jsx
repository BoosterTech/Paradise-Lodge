import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import PropTypes from "prop-types";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
};

SortBy.propTypes = {
  options: PropTypes.array, // `options` is optional, can be an array
};

export default SortBy;
