import { setServers } from 'dns';
import React, {useState, useEffect, useRef} from 'react'; 

export const useLogin = (url:string, body: Object) => {
    const skipFirstMount = useRef(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [login, setLogin] = useState<boolean | null>(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
      if (skipFirstMount.current) {
          skipFirstMount.current = false;
          return;
      }
      setIsLoading(true);
      const fetchData = async () => {
        try {
            const res = await fetch(url, {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            })
            const data = await res.json();
            const isLoggedin = data.token ? true : false;
            setLogin(isLoggedin);
            setIsLoading(false);
            if(isLoggedin) localStorage.setItem("token", data.token);
            if(!isLoggedin) setServerError(data); 
        } catch (error: any) {
            console.log('RAN ERR');
            setServerError(error.statusText);
            setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url, body]);

    
    return { isLoading, login, serverError };

  };