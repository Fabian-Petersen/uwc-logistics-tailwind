import { createContext } from "react";
import PropTypes from "prop-types";
//? AWS Cognito Packages
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../../aws/UserPool";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AccountContext = createContext();

const Account = (props) => {
  //$ 1. ====== use navigate hook to redirect the page to the dashboard once logged in. ====== //
  const navigate = useNavigate();

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
          toast.success("Successfully Logged In");
          console.log("onSuccess:", data);
          navigate("/dashboard");
        },
        onFailure(error) {
          reject(error);
          toast.error(error.message);
          console.error("onFailure:", error);
          console.log("authDetails:", authDetails);
        },
        newPasswordRequired: (data) => {
          resolve(data);
          console.log("newPasswordRequired:", data);
        },
      });
    });
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession }}>
      {props.children}
    </AccountContext.Provider>
  );
};

Account.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Account, AccountContext };
