import React, {useState, useEffect} from 'react'; 
import { MessageType } from '../types/types';
import {token} from "../constants/constants";

export const useFetch = (url: string, operation: string, body?: Object) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState<MessageType[] | null>(null);
    const [serverError, setServerError] = useState(null);
    useEffect(() => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const res = operation === "GET" || "DELETE" ? 
            await fetch(url, {
              method: operation,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Token ${token}`
              }
            })
          :
            await fetch(url, {
              method: operation,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Token ${token}`
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
  
      fetchData();
    }, [url]);

    
    return { isLoading, apiData, serverError };

  };