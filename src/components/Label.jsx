import PropTypes from "prop-types";

const Label = ({ htmlFor, labelText }) => {
  Label.propTypes = {
    htmlFor: PropTypes.string,
    labelText: PropTypes.string
  }

  return (
    <label htmlFor={htmlFor} className="block text-sm text-gray-500">
      {labelText}
    </label>
  )
}

export default Label