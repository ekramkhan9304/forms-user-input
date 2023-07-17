import { useState } from "react";

const useBasicInput = (validateValue) => {
    const [inputValue, setInputValue] = useState("");
    const [isToched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(inputValue);
    const hasError = !valueIsValid && isToched

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setInputValue("");
    }

    return {
        inputValue,
        inputChangeHandler,
        inputBlurHandler,
        isValid: valueIsValid,
        hasError,
        reset
    }

}
export default useBasicInput;