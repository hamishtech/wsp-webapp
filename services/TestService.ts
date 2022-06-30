import { GoogleCredentialsDTO } from "../types/GoogleCredentials.interface";
import apiClient from "./apiClient";

const testCall = async () => {
  const response = await apiClient.get("test");
  return response.data;
};

const TestService = {
  testCall,
};

export default TestService;

// ? https://www.bezkoder.com/react-query-axios-typescript/
