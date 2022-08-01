import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const isValid = regEx.test(value);

    setEmail(value);
    setEmailIsValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const isValid = value.length > 5;

    setPassword(value);
    setPasswordIsValid(isValid);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allIsValid = passwordIsValid && emailIsValid;

    setIsSubmitted(allIsValid);
    console.log(allIsValid);
  };

  const emailInputClass = emailIsValid ? "is-valid" : "is-invalid";
  const passwordInputClass = passwordIsValid ? "is-valid" : "is-invalid";

  return (
    <>
      <h1 className="text-center mt-5">Login</h1>
      <div className="container d-flex justify-content-center mt-5">
        {isSubmitted ? (
          <div>
            <p>{email}</p>
          </div>
        ) : (
          <form className="col-10" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${emailInputClass}`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleEmailChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${passwordInputClass}`}
                id="exampleInputPassword1"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={handleRememberMeChange}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Form;
