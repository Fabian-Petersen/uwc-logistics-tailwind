import { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(false);
  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(() => {
        setStatus(true);
      })
      .catch((error) => {
        console.log(error);
        setStatus(false);
      });
  }, [getSession]);

  return (
    <div className="text-sm ml-auto md:text-md">
      {status ? "Logged In" : "Please Login"}
    </div>
  );
};

export default Status;
