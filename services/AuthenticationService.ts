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

const AuthenticationService = {
  loginWithGoogle,
};
export default AuthenticationService;

// ? https://www.bezkoder.com/react-query-axios-typescript/
