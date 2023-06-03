import { useEffect, useState } from "react";

export const useFetchJson = (url, options = null) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url,options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setData(json);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [data, loading, error] ;
};