import React, {useState, useEffect, useRef} from 'react'; 
import { MessageType } from '../types/types';
import {token} from "../constants/constants";

export const useCompose = (url: string, operation: string, body?: Object) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState<MessageType[] | null>(null);
    const [serverError, setServerError] = useState(null);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
            method: operation,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "Authorization": `Token ${token}`
            },
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