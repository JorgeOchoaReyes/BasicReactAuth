import React from 'react'; 
import { ErrorType, MessageType } from '../types/types';
import {token} from "../util/constants";

export const useFetch = (url: string) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [apiData, setApiData] = React.useState<MessageType[] |  null>(null);
    const [serverError, setServerError] = React.useState<ErrorType | null>(null);

    const fetchData = async (body?: Object) => {
      const tokenAuth = token(); 
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
        if(data.detail) setServerError(data); 
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    React.useEffect(() => {
      fetchData(); 
    }, [])
  
    
    return { isLoading, apiData, serverError, fetchData };

  };