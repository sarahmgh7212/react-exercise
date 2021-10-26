import "./Input.css";
const Input = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder={props.text}
        onChange={props.handleQuery}
      />
    </>
  );
};
export default Input;
