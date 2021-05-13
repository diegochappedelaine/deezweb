import { useState, useEffect } from "react";

const corsProxyUrl = "https://mycorsproxyapp.herokuapp.com/";

function useFetch<T>(url: string) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const data = await fetch(corsProxyUrl + url);
        const result = await data.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchInfo();
  }, [url]);

  return { error, loading, data };
}

export default useFetch;
