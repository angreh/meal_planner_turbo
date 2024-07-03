import { useState, useEffect, useCallback } from "react";

type useApiType<T> = {
  apiFunction: () => Promise<T>;
  opts?: {
    retries: number;
    retryDelay: number;
  };
};
const useApi = <T>({
  apiFunction,
  opts = { retries: 3, retryDelay: 1000 },
}: useApiType<T>) => {
  console.log("useApi");

  const [data, setData] = useState<T>();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const { retries, retryDelay } = opts;

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(false);
    setIsDataLoaded(false);

    let attempt = 0;
    while (attempt < retries) {
      console.log("while");

      try {
        const response: T = await apiFunction();
        console.log("response", response);

        setData(response);
        setLoading(false);
        setIsDataLoaded(true);
        return;
      } catch (err) {
        console.log("catch");

        attempt++;
        if (attempt >= retries) {
          setError(true);
          setErrorMessage((err as Error).message);
          setLoading(false);
        } else {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
      }
    }
  }, [apiFunction, retries, retryDelay]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, retry: fetchData, errorMessage, isDataLoaded };
};

export default useApi;
