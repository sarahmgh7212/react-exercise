import "./Input.css";
const Input = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder={props.text}
        onChange={props.handleChange}
      />
    </>
  );
};
export default Input;
