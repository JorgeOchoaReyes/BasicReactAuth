import  React from 'react'; 
import { useNavigate } from 'react-router-dom';
import { ErrorType, MutationResultsType } from '../types/types';
import {token} from "../util/constants";

export const useDelete = (url: string) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [apiData, setApiData] = React.useState<MutationResultsType | null>(null);
    const [serverError, setServerError] = React.useState<ErrorType | null>(null);
    const router = useNavigate(); 
    const deleteMessage = async () => {
      const tokenAuth = token(); 
      setIsLoading(true);
      try {
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "Authorization": `Token ${tokenAuth}`
            },
          });
        const data = await res.json();
        setApiData(data);
        if(data.detail) setServerError(data); 
        else {
          router("/home")
        }
        setIsLoading(false);
      } catch (error: any) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    
    return { isLoading, apiData, serverError, deleteMessage };

  };