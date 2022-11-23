import { useState, useEffect } from "react";
import axios from "axios";
import token from "assets/static/token.json";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        url,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjI1MzQwMjMwMDc5OSwiaWF0IjoxNjY3NTE3NDQ5LCJzdWIiOiJiNTllNWYyOS1lZDBlLTQ4M2EtYWJhMy1lOTM2NmZmNDNhOGYifQ.1mJsCNnKZImPryOqyyRE6skVX8MZPDVpdhEGPlD9g7M",
          },
        }
      )
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
