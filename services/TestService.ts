import { GoogleCredentialsDTO } from "../types/GoogleCredentials.interface";
import { IUser } from "../types/User.interface";
import apiClient from "./apiClient";

const testCall = async (): Promise<IUser> => {
  const response = await apiClient.get("test");
  return response.data;
};

const TestService = {
  testCall,
};

export default TestService;

// ? https://www.bezkoder.com/react-query-axios-typescript/
