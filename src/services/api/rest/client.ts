import axios, { AxiosInstance } from "axios";

export default class APIClient {
  private axiosClient: AxiosInstance;
  private AUTH_SESSION_TOKEN: string;

  constructor(AUTH_SESSION_TOKEN: string) {
    this.axiosClient = axios;
    this.AUTH_SESSION_TOKEN = AUTH_SESSION_TOKEN;
  }

  async login(data: any) {
    //console.log(data);
    const response = await this.axiosClient.post("api/login", data);
    console.log(response);
    return response.data;
  }

  async graphql_query(data: any) {
    //console.log(data);
    const response = await this.axiosClient.post("api/graphql", {
      ...data,
      AUTH_SESSION_TOKEN: this.AUTH_SESSION_TOKEN,
    });
    //console.log(response);
    return response.data;
  }
}
