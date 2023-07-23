import { useState, useEffect } from "react";

const useAxiosFetch = (fetchCb, ...params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetchCb(...params);
        setData(response);
      } catch (error) {
        console.log("error: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchCb, ...params]);

  return { data, loading, error };
};

export default useAxiosFetch;
