import { useState } from "react";
import { useHistory } from "react-router-dom";

const corsProxyUrl = "https://mycorsproxyapp.herokuapp.com/";

function useFetchLazy<T = unknown>(url: string) {
  const history = useHistory();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();

  const fetchInfo = async () => {
    setLoading(true);
    try {
      const data = await fetch(corsProxyUrl + url);
      const result = await data.json();
      if (result.error) return history.push("/404");
      setData(result.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  // This variant of my useFetch hook is inspired by the one from appolo/graphql
  // data is not fetch when I execute useFetchLazy() but when I execute const {fetchInfo} = useFetchLazy();
  // This trick allow me to execute a hook conditionally (in a useEffect or after data has been fetched)
  return { error, loading, data, fetchInfo };
}

export default useFetchLazy;
