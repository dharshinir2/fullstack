import instance from "./axios";


const api_uri = "http://localhost:8181";

export const bookingList = () => instance.get(`${api_uri}/api/v1/users/book`);
