import axios from 'axios';


export const apiLocal = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"  
    }
  });

;