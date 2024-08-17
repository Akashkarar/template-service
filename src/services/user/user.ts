import { authenticationInternalFetcher } from "../auth/authInternalFetcher";

interface Data {
  username: string;
  password: string;
}

export const registerUser = async (data: Data) => {
  return authenticationInternalFetcher("register", { ...data });
};

export const loginUser = async (data: Data) => {
  return authenticationInternalFetcher("login", { ...data });
};
