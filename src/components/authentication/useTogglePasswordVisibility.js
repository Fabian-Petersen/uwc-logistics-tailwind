//custom hook to toggle password visibility on and off
import { useState } from "react";

const useTogglePassword = (initialType = "password") => {
  const [inputType, setInputType] = useState(initialType);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return [inputType, togglePasswordVisibility];
};

export default useTogglePassword;
