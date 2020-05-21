import { useEffect, useState } from "react";

const useCustomFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function customFetch(url) {
    try {
      let response = await fetch(url);
      let resData = await response.json();
      setData(resData);
      setLoading(false);
    } catch (err) {
      setError("... something wrong!!");
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    // customFetch(url);

    setTimeout(() => {
      if (url) {
        customFetch(url);
      }
    }, 3000);
  }, [url]);

  return {
    data: data,
    loading: loading,
    error: error
  };
};

export default useCustomFetch;
