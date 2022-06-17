import React from 'react'; 
import { ComposeErrorType, MutationResultsType } from '../types/types';
import {token} from "../util/constants";

export const useCompose = (url: string) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [apiData, setApiData] = React.useState<MutationResultsType | null>(null);
    const [serverError, setServerError] = React.useState<ComposeErrorType | null>(null);
  
    const createMessage = async (body: any) => {
      const tokenAuth = token();
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
        if(data.errors) setServerError(data)
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    
    return { isLoading, apiData, serverError, createMessage };

  };