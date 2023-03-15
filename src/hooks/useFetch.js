import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState([]);
  const url = `http://localhost:8000/${api}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();

      setData(json.results);
    }

    fetchData();
  }, [url]);

  return { data };
};
