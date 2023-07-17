import useBasicInput from "../hooks/use-basic-input";



const isValidFN = (value) => value.trim() !== "";
const isValidLN = (value) => value.trim() !== "";
const isValidEmail = (value) => value.includes("@");

const BasicForm = (props) => {

  const { inputValue: firstName, inputChangeHandler: firstNameChangeHalder, inputBlurHandler: firstNameBlurHandler, hasError: firstNameHasError, isValid: firstNameIsValid, reset: resetFN } = useBasicInput(isValidFN);
  const { inputValue: lastName, inputChangeHandler: lastNameChangeHalder, inputBlurHandler: lastNameBlurHandler, hasError: lastNameHasError, reset: resetLN, isValid: lastNameIsValid } = useBasicInput(isValidLN);
  const { inputValue: email, inputChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler, hasError: emailHasError, reset: resetEmail, isValid: emailIsValid } = useBasicInput(isValidEmail);

  const firstNameClasses = firstNameHasError ? "form-control invalid" : "form-control";
  const lastNameClasses = lastNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";


  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("form value is  = ", { firstName, lastName, email });

    resetFN();
    resetLN();
    resetEmail();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameChangeHalder} onBlur={firstNameBlurHandler} />
          {firstNameHasError && <p className="error-text">Pleae enter first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameChangeHalder} onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className="error-text">Pleae enter last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">email must ve valid </p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
