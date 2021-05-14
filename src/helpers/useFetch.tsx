import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const corsProxyUrl = "https://mycorsproxyapp.herokuapp.com/";

function useFetch<T>(url: string) {
  const history = useHistory();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const data = await fetch(corsProxyUrl + url);
        const result = await data.json();
        if (result.error) return history.push("/404");
        setData(result);
      } catch (error) {
        return setError(error);
      }
      setLoading(false);
    };
    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { error, loading, data };
}

export default useFetch;
