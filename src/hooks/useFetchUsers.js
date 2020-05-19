import { useState, useEffect } from "react";
import axios from "axios";

function useFetchUsers() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch(_err => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return {
    users,
    isLoading,
    error,
  };
}

export default useFetchUsers;
