import { Form } from "react-bootstrap";

const SelectField = ({
  label,
  value,
  onChange,
  options = [],
  required = false,
  name,
}) => {
  
  const normalizedOptions = options.map((item) => {
    if (typeof item === "string") {
      return {
        value: item,
        label: item.charAt(0).toUpperCase() + item.slice(1),
      };
    }
    return item;
  });

  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}

      <Form.Select
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      >
        {normalizedOptions.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectField;
