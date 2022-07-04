import { GoogleCredentialsDTO } from "../types/GoogleCredentials.interface";
import { IUser } from "../types/User.interface";
import apiClient from "./apiClient";

const loginWithGoogle = async (dto: GoogleCredentialsDTO) => {
  const response = await apiClient.post<{ user: IUser; token: string }>(
    "/auth/login/google",
    dto
  );
  return response.data;
};

const checkAuthentication = async (authCookie: any) => {
  try {
    let res = await apiClient.get("/auth/authenticate", {
      withCredentials: true,
      headers: { cookie: authCookie ? authCookie : {} },
    });
    if (res.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

const AuthenticationService = {
  loginWithGoogle,
  checkAuthentication,
};
export default AuthenticationService;

// ? https://www.bezkoder.com/react-query-axios-typescript/
