const FormInput = (props) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        onChange={(e) => {
          props.setUsername(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default FormInput;
