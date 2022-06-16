import React, {useState, useEffect, useRef} from 'react'; 
import { MessageType } from '../types/types';
import {token} from "../util/constants";

export const useCompose = (url: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState<MessageType[] | null>(null);
    const [serverError, setServerError] = useState(null);
    const tokenAuth = token(); 
    const createMessage = async (body: any) => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
            method: "POST",
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

    
    return { isLoading, apiData, serverError, createMessage };

  };