import React from "react";
import { useState, useEffect } from "react";

export function useJsonFetch(url, opts) {
  const [data, setData] = useState(opts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStatus = async () => {
      setLoading(true);
      try {
        let response = await fetch(url);
        if (!response.ok) {
          setError(response.statusText);
        }

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          });
      } catch {
        setError("Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    };
    getStatus();
  }, []);
  return [data, loading, error];
}
