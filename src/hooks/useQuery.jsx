import { useEffect } from 'react';

export default function useQuery({ fetchFn, args = [], dependencies = [] }) {
  useEffect(() => {
    fetchFn(...args)
      .then((result) => {
        console.log("Fetched data:", result);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, dependencies);

  return null;
}