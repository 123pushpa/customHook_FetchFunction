import React, { useState, useEffect } from "react";

const useCustomHook = (url) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    //fetch logic
    //clear logic

    let fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let response = await fetch(url);
        let jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();

    return () => {
      setData();
    };
  }, [url]);

  return { data, error, loading };
};
export default useCustomHook;
