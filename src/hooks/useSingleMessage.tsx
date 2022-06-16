import React, {useState, useEffect, useRef} from 'react'; 
import { MessageType } from '../types/types';
import {token} from "../util/constants";

export const useSingleMessage = (url: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState<MessageType |  null>(null);
    const [serverError, setServerError] = useState(null);
    const tokenAuth = token(); 
    const fetchData = async (body?: Object) => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "Authorization": `Token ${tokenAuth}`
            }
        })
        const data = await res.json();
        setApiData(data);
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchData(); 
    }, [])
  
    
    return { isLoading, apiData, serverError, fetchData };

  };