import { useRef, useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameToched, setEnteredNameTouched] = useState(false);
    const nameInputRef = useRef();

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);

        if (e.target.value.trim() !== "") {
            setEnteredNameIsValid(true)
            return;
        }
    }
    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false)
            return;
        }
    }

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false)
            return;
        }
        setEnteredNameIsValid(true)

        console.log(enteredName)

        setEnteredName('');

        // using ref value 

        const enteredRefValue = nameInputRef.current.value;
        console.log(enteredRefValue)

    }

    const nameInpuIsInvalid = !enteredNameIsValid && enteredNameToched;
    const nameInputlClassess = nameInpuIsInvalid ? "form-control invalid" : "form-control ";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputlClassess}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    ref={nameInputRef}
                    value={enteredName}
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {nameInpuIsInvalid && <p className="error-text">Name can't be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
