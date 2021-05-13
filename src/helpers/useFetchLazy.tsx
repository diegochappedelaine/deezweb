import { useState } from "react";

const corsProxyUrl = "https://mycorsproxyapp.herokuapp.com/";

function useFetchLazy<T = unknown>(url: string) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();

  const fetchInfo = async () => {
    setLoading(true);
    try {
      const data = await fetch(corsProxyUrl + url);
      const result = await data.json();
      setData(result.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { error, loading, data, fetchInfo };
}

export default useFetchLazy;
