import { useState, useCallback } from 'react';

export default function useHttp() {
  const [errMesg, setErrMsg] = useState('');

  const sendRequest = useCallback(
    async (requestConfig, applyData, errorHandling) => {
      try {
        const res = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        });

        if (!res.ok) {
          setErrMsg('Incorrect User Name/Password combination');
          console.log(res);
          throw new Error('Oops something went wrong!');
        }
        const data = await res.json();
        console.log(data);
        applyData(data);
      } catch (err) {
        console.log(err);

        errorHandling();
      }
    },
    []
  );

  return {
    errMesg: errMesg,
    fn: sendRequest,
  };
}
