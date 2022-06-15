import React, {useState, useEffect, useRef} from 'react'; 
import { MessageType } from '../types/types';
import {token} from "../constants/constants";

export const useFetch = (url: string, operation: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState<MessageType[] | null>(null);
    const [serverError, setServerError] = useState(null);
    const tokenAuth = token(); 
    const fetchData = async (body?: Object) => {
      setIsLoading(true);
      try {
        const res = operation === "GET" || "DELETE" ? 
          await fetch(url, {
            method: operation,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "Authorization": `Token ${tokenAuth}`
            }
          })
        :
          await fetch(url, {
            method: operation,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "Authorization": `Token ${tokenAuth}`
            },
            body: JSON.stringify(body)
          });
        const data = await res.json();
        setApiData(data);
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };
  
    
    return { isLoading, apiData, serverError, fetchData };

  };