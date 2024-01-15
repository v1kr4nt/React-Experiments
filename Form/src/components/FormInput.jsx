import "./formInput.css";

export function FormInput(props) {
  return (
    <div className="formInout">
      {/* <label>Username</label> */}
      <input placeholder={props.placeholder} onChange={e=>props.setUsername(e.target.value)} />
    </div>
  );
}
