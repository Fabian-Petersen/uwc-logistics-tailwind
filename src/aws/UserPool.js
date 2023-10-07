import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_sJSZ31tEe",
  ClientId: "2cuf3l1obb95ti9j0aah5klbi4",
};

export default new CognitoUserPool(poolData);
