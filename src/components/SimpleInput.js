import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
    const { value: enteredName,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const { value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler
    } = useInput(value => value.includes("@"))
    const [formIsValid, setFormIsValid] = useState(false);


    useEffect(() => {
        if (enteredNameIsValid && enteredEmailIsValid) setFormIsValid(true)
        else setFormIsValid(false)
    }, [enteredNameIsValid, enteredEmailIsValid])

    const formSubmissionHandler = (e) => {
        e.preventDefault();


        if (!enteredNameIsValid) {
            return;
        }
        console.log("name = ", enteredName, "Email", enteredEmail)

        resetNameInput();

    }

    const nameInputlClassess = nameInputHasError ? "form-control invalid" : "form-control ";
    const emailInputlClassess = emailInputHasError ? "form-control invalid" : "form-control ";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputlClassess}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                {nameInputHasError && <p className="error-text">Name can't be empty</p>}
            </div>
            <div className={emailInputlClassess}>
                <label htmlFor='name'>Your Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && <p className="error-text">Email must be valid</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
