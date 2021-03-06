import React from 'react'; 

export const useLogin = (url:string) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [login, setLogin] = React.useState<boolean | null>(null);
    const [serverError, setServerError] = React.useState(null);
    
    const loginFetch = async (body: Object) => {
      setIsLoading(true);
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
          if(isLoggedin) localStorage.setItem("token", data.token);
          setLogin(isLoggedin);
          setIsLoading(false);
          if(!isLoggedin) setServerError(data); 
      } catch (error: any) {
            console.log('RAN ERR');
            setServerError(error.statusText);
            setIsLoading(false);
      }
    };

    
    return { isLoading, login, serverError, loginFetch };

  };