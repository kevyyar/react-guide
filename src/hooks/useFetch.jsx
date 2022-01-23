import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // use to fetch data from API
  useEffect(() => {
    const getData = async (url) => {
      try {
        let response = await fetch(url);

        if (!response.ok) {
          // eslint-disable-next-line no-throw-literal
          throw {
            err: true,
            status: response.status,
            statusText: !response.statusText
              ? "Error Fetching"
              : response.statusText,
          };
        }
        let data = await response.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};
